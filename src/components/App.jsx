import React from "react";
import Login from "./Login";
import Heading from "./Heading"

var isLogedIn = false;

function App() {
  return (
    <div className="container">
      {isLogedIn?<Heading text= "Hello"/>:<Login/>}
    </div>
    
  );
}

export default App;
