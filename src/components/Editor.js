import React, { useRef } from "react";
import EditIcon from './../assets/icons/bold.svg'
import ItalicIcon from './../assets/icons/italic.svg'
import UnderLineIcon from './../assets/icons/underline.svg'
import listIcon from './../assets/icons/list.svg'
import strike from './../assets/icons/strike.svg'

const Editor = ({ text, setText }) => {
  // create reference to editor div 
  const editorRef = useRef(null);

  // function to handle text formatting
  const handleFormat = (command) => {
    document.execCommand(command, false, ""); //apply formatting like bold,italic etc
  };

  const handleInput = (e) => {
    const htmlContent = e.currentTarget.innerHTML;

    // Remove <br> when the editor is empty
    if (htmlContent === "<br>") {
      setText("");
      e.currentTarget.innerHTML = ""; // Clear editor manually
    } else {
      setText(htmlContent);
    }
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button onClick={() => handleFormat("bold")}><img src={EditIcon} alt="bold"/></button>
        <button onClick={() => handleFormat("italic")}><img src={ItalicIcon} alt="italic" /></button> 
        <button onClick={() => handleFormat("underline")}><img src={UnderLineIcon} alt="underline" /></button>
        <button onClick={() => handleFormat("strikeThrough")}><img src={strike} alt="strikethrough" /></button>
        <button onClick={() => handleFormat("insertUnorderedList")}><img src={listIcon} alt="list" /></button>
      </div>
      {/* editable area  */}
      <div
        ref={editorRef}  // Assigning reference to access it for setting suggestion or removing
        contentEditable  // Makes the div editable like a text editor
        className="editor"
        onInput={handleInput}  // custom onIput handler
      ></div>
    </div>
  );
};

export default Editor;