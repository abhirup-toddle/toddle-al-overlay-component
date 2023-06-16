import "./styles.css";
import React from "react";
import ChatInterface from "./ChatInterface";
import MockStreaming from "./MockStreaming";

const App = () => {
  return (
    <div>
      <ChatInterface />
      <MockStreaming />
    </div>
  );
};

export default App;
