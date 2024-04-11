import React from 'react';
import ReactDOM from 'react-dom';    
import "./styles/styles.scss";
const {Translate} = require('@google-cloud/translate').v2;

// const projectId = "AIzaSyBpFIw8w-cd-_wG-HpQCo46aBnSAoHM1lI";
// const translate = new Translate({projectId});

// async function quickStart() {
//   // The text to translate
//   const text = 'Hello, world!';

//   // The target language
//   const target = 'ru';

//   // Translates some text into Russian
//   const [translation] = await translate.translate(text, target);
//   console.log(`Text: ${text}`);
//   console.log(`Translation: ${translation}`);
// }

// quickStart();
ReactDOM.render( <p className="ok">hi harish </p> , document.getElementById("app"));
 