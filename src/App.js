import React, { useState } from "react";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import AIhelper from "./components/AIhelper";
import "./styles/style.css";
function App() {
  const [text, setText] = useState("");
  const [aiSuggestion, setAisuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  // function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <h1 className="heading">AI-Enhanced Rich Text Editor</h1>
        <div className="button-container">
          <button className="theme-toggle" onClick={toggleTheme}>
            Toggle {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
        <Editor text={text} setText={setText} />
        <AIhelper
          text={text}
          setAiSuggestion={setAisuggestion}
          setLoading={setLoading}
        />
        <Preview text={text} aiSuggestion={aiSuggestion} loading={loading} />
      </div>
    </div>
  );
}

export default App;
