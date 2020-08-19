import React from "react";
import Login from "./Login";
import Heading from "./Heading"

var isLogedIn = false;

function renderConditionally(){
  if (isLogedIn){
    return <Heading text= "Hello"/>
  }else{
    return (
      <Login/>
    );
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
    
  );
}

export default App;
