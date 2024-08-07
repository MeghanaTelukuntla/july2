import { useState } from "react";
import { greetingFn } from "./usestategrex";

const ShowGreeting=()=>{
    const[greeting,setgreeting]=useState("");// local state
    const greetinghandler=()=>{
            const greetString= greetingFn() //while we are calling it will return greet string
            setgreeting(greetString)
            console.log(greetString)
    }
    return(
        <>
        {/* <h4>Hello User {greeting}</h4> */}
        <button onClick={greetinghandler}>Greet User</button>
        </>
    );
};
export default ShowGreeting;