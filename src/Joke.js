import React, { useState } from "react";

//CONDITIONAL RENDERING



export default function Joke(props) {
    //1
    const [isshown, setIsShown] = useState(false)

    function toggle(){
        console.log(isshown)
        setIsShown(prevShown => !prevShown) //prev value
    }

    //2
    const [messages, setMessages] = React.useState([])
    //const [messages, setMessages] = React.useState([])

   

   

// conditonal rendering
// && - either one something to display or not display
// ternary operator - if we have to chooes between one of two things


 
    return (
        <div>

            
            {props.setup && <h3>{props.setup}</h3>}
            {isshown && <p>{props.punchline}</p>}   
            {/* if shown is true then paragraph is shown */}
            {/* && and logical operator helps- element either want to display or not */}
           
           
            {/* if isshown is true then paragraph is shown and button name be hide punchline*/}
            {/* {isshown && <button onClick={toggle}>Hide Punchline</button>}
            {!isshown && <button onClick={toggle}>Show Punchline</button>} */}

            {/* ternary operator */}
            <button onClick={toggle}>{isshown ? "Hide" : "Show"} Punchline</button>
            <hr/>


            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
            {/* if messages is > greater than 0 then display messages */}
            {/* if messages is empty then shows nothing */}



            <div>
                {
                    messages.length === 0 ?
                    <h1>You're all caught up</h1>:
                    <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"} </h1>
                }
            </div>

        </div>
    )
}


// // const cond1 = true
// //const cond 2 = falswe
// if(const1 && const2) {
//     //code wont run
//check truthy 
// }