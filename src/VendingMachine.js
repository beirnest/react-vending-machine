import React from "react";
import { Link } from "react-router-dom";
import vendingMachinePic from "./Neovend1.png"

function VendingMachine() {
  return(
    <div>
        <img src={vendingMachinePic} height="300px" alt="Neovend vending machine from Citizen Sleeper"></img>
        <h1>Hello, I'm Neovend, the sentient vending machine. What can I get for you?</h1>
        <h1><Link to="/soda">Soda</Link></h1>
        <h1><Link to="/chips">Chips</Link></h1>
        <h1><Link to="/candy">Candy</Link></h1>
    </div>
  );
}

export default VendingMachine;
