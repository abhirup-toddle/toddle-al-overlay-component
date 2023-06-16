import React, { useState } from "react";
import "./ChatInterface.css";
import Menu from "./Menu";
import MockStreaming from "./MockStreaming";

function ChatInterface() {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState(["hello there", "how are you?"]);
  // const [streamingText, setStreamingText] = useState("");

  const dummyText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      setChatLog((prevChatLog) => [...prevChatLog, userInput]);
      setUserInput("");
    }
  };

  return (
    <div id="chat-container">
      <div className="input-container">
        <div className="logo-container">Toddle AI</div>
        <div id="chat-log">
          {dummyText}
          {/* {streamingText && <div>{streamingText}</div>} */}
        </div>
        <div id="user-input">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Add further instructions ..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <div id="menu-container">
        <Menu />
      </div>
    </div>
  );
}

export default ChatInterface;
