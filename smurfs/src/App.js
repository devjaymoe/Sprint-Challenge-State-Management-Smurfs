import React, {useState} from "react";
// context
import {SmurfContext} from './contexts/SmurfContext';
// components
import Smurfs from './components/Smurfs';
import Form from './components/Form';
// style
import "./App.css";

const App = () => {
  const [smurfs, setSmurfs] = useState([])

  return (
    <div className="App">
      <SmurfContext.Provider value={{smurfs, setSmurfs}}>
        <h1>SMURFS!</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Form />
        <Smurfs />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
