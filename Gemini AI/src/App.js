import { useEffect, useState } from "react";

const App = () => {
  const [scriptAdded, setScriptAdded] = useState(false);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    if (!scriptAdded) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      setScriptAdded(true);
    }
  }, [scriptAdded]);

  return (
    <>
      <div id="google_translate_element"></div>
      <h4>Start building your app. Happy Coding!</h4>
    </>
  );
};

export default App;
