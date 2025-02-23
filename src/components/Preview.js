import React from "react";

const Preview = ({ text, aiSuggestion, loading }) => {
  return (
    <div className="preview-container">
      {/* Display the user-entered text as a live preview */}
      {/* Using dangerouslySetInnerHTML to render formatted content */}
      <h2>Live Preview</h2>
      <div className="preview" dangerouslySetInnerHTML={{ __html: text }} />
      {/* Show AI suggestion or loading message */}
      {loading ? (
        <div className="ai-suggestion">Analyzing text...</div>  // Display loading message while AI processes text
      ) : (
        aiSuggestion && (
          <div className="ai-suggestion">AI Suggestion: {aiSuggestion}</div>
        )
      )}
    </div>
  );
};

export default Preview;
