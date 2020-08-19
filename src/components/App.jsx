import React from "react";
import Login from "./Login";
import Register from "./Register"
import Heading from "./Heading";

var isLogedIn = true;

function App() {
  return (
    <div className="container">
      {isLogedIn?
            (
              <div>
              <Heading text = "Login"/>
              <Login/>
              </div>
              ):(
                <div>
                <Heading text = "Register"/>
                <Register/>
                </div>
              )}
    </div>
    
  );
}

export default App;
