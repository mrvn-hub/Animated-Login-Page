import React from "react";
import "../styles/main.css";
import Login from "./Login";


function App() {
  return (
    <div className="App">
      <BG/>
      <div className="main slide">
        <WelcomeWidget/>
        <Login/>

      </div>
    </div>
  );
}



const WelcomeWidget =()=>
{
  return(
    <h1 className="welcome">
      <span>W</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e</span>
    </h1>
  );
}

export default App;
