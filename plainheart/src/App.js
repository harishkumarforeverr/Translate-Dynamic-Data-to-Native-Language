import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect } from "react";
import axios from "axios";
const { Translate } = require('@google-cloud/translate').v2;
function App() {
  const getapi = async () => {
    const options = {
      method: "POST",
      url: "https://swift-translate.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "06934f45b4msh7d76fb66eb2e4d0p13741cjsn781682bededc",
        "X-RapidAPI-Host": "swift-translate.p.rapidapi.com",
      },
      data: {
        text: "hello",
        sourceLang: "en",
        targetLang: "fr",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getapi();
  }, []);
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
