import React from "react";
import Input from "./Input";
import Button from "./Button";


function Register() {
    return(
        <form>
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
            <Button name="Register"/>
        </form>
    );
}

export default Register;