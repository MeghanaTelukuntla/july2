import { useEffect, useState } from "react"
import { greetingFn } from "../hooks/usestategrex";
import axios from "axios";


const ShowGreet=()=>{
    const[greet,setGreet]=useState("")
    const[count,setCount]=useState(0);//case 2
    useEffect(()=>{
        console.log('use Effect executed....')//it is automatically invoking
        greetsHandler();
        fetchRecipes();
        // window.addEventListener("mousemove",mouseTrack);
    });
    useEffect(()=>{
        console.log("Use Effect 2")
    },[])
    const CountHandler=()=>{
        setCount(count+1);
    }
    const mouseTrack=()=>{
        console.log("Mouse Moving...")
    }
    const greetsHandler=()=>{
        const greetsString=greetingFn();
        setGreet(greetsString)
    }
   const fetchRecipes=async()=>{
        try{
    const {status,data}=await axios.get('https://dummyjson.com/recipes')
    
    if(status===200){
      console.log(data)
    }
        }catch(err){
           
        }
    }
    return(
        <>
        <h4>Hello User {greet}</h4>
        <button onClick={CountHandler}>Click Me {count} </button>
        </>
    );
}

export default ShowGreet;