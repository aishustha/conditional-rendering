import React, { useState } from "react";

//CONDITIONAL RENDERING



export default function Joke(props) {
    const [isshown, setIsShown] = useState(false)


    function toggle(){
        console.log(isshown)
        setIsShown(prevShown => !prevShown) //prev value
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isshown && <p>{props.punchline}</p>}   
            {/* if shown is true then paragraph is shown */}
            {/* && and logical operator helps- element either want to display or not */}
            <button onClick={toggle}>Show Punchline</button>
            <hr/>
        </div>
    )
}


// // const cond1 = true
// //const cond 2 = falswe
// if(const1 && const2) {
//     //code wont run
//check truthy 
// }