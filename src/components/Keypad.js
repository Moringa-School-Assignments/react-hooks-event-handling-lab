// Code Keypad Component Here
import React from 'react';
// import handleChange from "./EyesOnMe";

function handleChange(e){
    e.preventDefault();
    console.log("Entering password...");
}

function Keypad() {
    return (
        <div>
            <label htmlFor="name">Name (4 to 8 characters):</label>

            <input type="password" id="name" onChange={handleChange} name="name" required
                minLength="4" maxLength="80" size="40"></input>
        </div>
    )
}

export default Keypad;