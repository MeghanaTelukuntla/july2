import { useEffect, useState } from "react"


const Case4=()=>{
    const[xposition,setxposition]=useState(0)
    const[yposition,setyposition]=useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove", mousetrack)
        return()=>{
            window.removeEventListener("mousemove", mousetrack)
        }
    },[]);
    const mousetrack=(event)=>{
        setxposition(event.clientX)
        setyposition(event.clientY)
        console.log(event);
        
    }
    return(
        <>
        <h4>This is use state Example case 4</h4>
        <h3>Current mouse position at xaxis{xposition}</h3>
        <h3>Current mouse position at yaxis{yposition}</h3>
        </>
    )
}

export default Case4;
