import React, { useState } from "react";
import DetailsForm from "./DetailsForm";
const key = "AIzaSyBpFIw8w-cd-_wG-HpQCo46aBnSAoHM1lI";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(key);

async function onFinish({ AnyReason: prompt }) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

const TranslateComponent = () => {
  const [translatedData, settranslatedData] = useState({});
  return (
    <div className="TranslateComponent">
      <DetailsForm onFinish={onFinish} />
      {JSON.stringify(translatedData)}
    </div>
  );
};

export default TranslateComponent;
