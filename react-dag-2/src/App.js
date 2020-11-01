import './App.css';
import Count from "./counter.js"
import CNJoke from "./chuckNorrisJoke"
import DadJoke from "./dadJoke"
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <p>React Day 2</p>
      <Count initial={50} increment={5}/>
      <br/>
      <CNJoke/>
      <DadJoke/>
    </div>
  );
}

export default App;
