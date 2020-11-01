import React from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";
//import {values} from "./file2"
import {males, females} from "./file2"
import {MultiWelcome} from "./file3"


console.log(males, females)



function App() {
  return (
    <div className="App">
      <h2>EX 1</h2>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <h2>Ex 2</h2>
      <p>{person.firstName}</p>
      <p>{person.email}</p>

      <h2>Ex 3</h2><MultiWelcome/>
      

    </div>
  )
}

export default App;
