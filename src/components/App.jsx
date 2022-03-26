import React from "react";
import "../styles/main.css";
import Login from "./Login";
//import bg from "../images/bg2.png";


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


const BG =()=> 
(
  <div className="bg">
    {/*<img src={bg} alt=""/>*/}
  </div>
);

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
