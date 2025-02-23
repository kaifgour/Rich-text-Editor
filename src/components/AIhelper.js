import { useEffect } from "react";

//passing text as flag, loading for loading text before suggestion flag
const AIhelper = ({ text, setAiSuggestion, setLoading }) => {
  // check if text is empty or not if empty then remove suggestion and loading text
  useEffect(() => {

    if (!text.trim()) {
      setAiSuggestion("");
      setLoading(false);
      return;
    }

    setLoading(true);

    console.log(text,"twxt")

    // using debounce here when user type after 700ms it set suggestion making smooth UI
    const timer = setTimeout(() => {
      const suggestions = [
        "Consider rewording for better clarity.",
        "Check your sentence structure.",
        "Avoid passive voice where possible.",
        "Use a more engaging tone.",
      ];
      const randomSuggestion =
        suggestions[Math.floor(Math.random() * suggestions.length)];
      setAiSuggestion(randomSuggestion);
      setLoading(false);
    }, 700);
    // clearing timeout on text change
    return () => clearTimeout(timer);
  }, [text, setAiSuggestion, setLoading]);

  return null;
};

export default AIhelper;
