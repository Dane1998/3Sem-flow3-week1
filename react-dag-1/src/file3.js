import React from 'react'
import {persons} from './file2'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
 export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]}/>
        <WelcomePerson person={persons[1]}/>
        <WelcomePerson person={persons[2]}/>
        <br/>
        {persons.map((person) =><WelcomePerson key={person.id} person={person}/>)}
      </div>
    )
  }

  function WelcomePerson(props){
  return <li>Hello, 
  {props.persons.firstName} 
  {props.persons.lastName}
  {props.persons.email}</li>
  }
  

  