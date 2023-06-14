import React from 'react';
import { Link } from "react-router-dom";


const Candy = () => {
    console.log("I want candy");

    return (
        <div>
            <h1>Ok, here is some candy!</h1>
            <h1><Link to="/">Go Back</Link></h1>
        </div>
    )
};

export default Candy;