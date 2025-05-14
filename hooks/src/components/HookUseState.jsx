import React from 'react'
import {useState} from "react";

const HookUseState = () => {
    //-1 useState
    let userName = "João"

    const [name, setName] = useState("Matheus")

    const changeNames = () => {

        userName = "João souza"

        setName ("Michel Lopes")
    }

    //2 input
    const [age, setAge] = useState(18)
  return (
    <div>
      {/* 1 - useState*/}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/*2 INPUT*/}
      <form>
        <input
          type='text'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <hr />
    </div>
  );
  
}

export default HookUseState