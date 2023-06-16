import React, { useState, useEffect, useRef } from "react";
import "./MockStreaming.css";

function MockStreaming() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef(null);

  const sentences = [
    "This is the first sentence.",
    "Here is another sentence.",
    "The third sentence is quite interesting.",
    "I hope you are enjoying this example.",
    "We are halfway through!",
    "Let's keep going with more sentences.",
    "Only a few more to go.",
    "Almost done now.",
    "Just one more sentence.",
    "And that's the final sentence!"
  ];

  const generateRandomParagraph = () => {
    const minWords = 5;
    const maxWords = 50;
    const numWords =
      Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
    let paragraph = "";

    while (paragraph.split(" ").length < numWords) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      paragraph += " " + sentences[randomIndex];
    }

    return paragraph.trim();
  };

  //smooth
  const showStreamingText = (paragraph) => {
    setIsLoading(true);
    let index = 0;
    const interval = setInterval(() => {
      setOutputText(paragraph.slice(0, index));
      index++;
      if (index > paragraph.length) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 50);
  };

  //jerky
  // const showStreamingText = (paragraph) => {
  //   setIsLoading(true);
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     const chunkSize = Math.floor(Math.random() * 8) + 4; // Randomize chunk size
  //     const endIndex = index + chunkSize;
  //     setOutputText(paragraph.slice(0, endIndex));
  //     index = endIndex;
  //     if (index >= paragraph.length) {
  //       clearInterval(interval);
  //       setIsLoading(false);
  //     }
  //   }, Math.floor(Math.random() * 500) + 50); // Randomize delay between chunks
  // };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (!isLoading && event.key === "Enter") {
      const paragraph = generateRandomParagraph();
      showStreamingText(paragraph);
    }
  };

  const handleStreamComplete = () => {
    setIsLoading(false);
    if (outputRef.current) {
      // outputRef.current.focus();
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(outputRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      handleStreamComplete();
    }
  }, [isLoading]);

  useEffect(() => {
    setInputText("");
    setOutputText("");
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="input"
        placeholder="Type something and press Enter..."
      />
      {/* <div className={`output ${isLoading ? "loading" : ""}`}> */}
      <div
        className={`output ${isLoading ? "loading" : ""}`}
        ref={outputRef}
        // onBlur={handleStreamComplete}
        tabIndex={0}
      >
        {outputText}
        {/* </div> */}
        {isLoading && (
          <div className="loader">
            <div className="ball ball1"></div>
            <div className="ball ball2"></div>
            <div className="ball ball3"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MockStreaming;
