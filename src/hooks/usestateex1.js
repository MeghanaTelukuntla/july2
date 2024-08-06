import { useState } from "react";




const Usestateexample1=()=>{
     const [login,setLogin] =useState(false)
     const[count,setCount]=useState(10)
     const LoginHandler=()=>{
        // setLogin((login)=>!login)
        setLogin(!login);//simpler syntax when compared to top line

     };
    //  const CountHandler=()=>{
    //     setCount((count)=>count+1);
    //     setCount((count)=>count+1);
    //     setCount((count)=>count+1);
    //  }
    //Timer example
    const CountHandler=()=>{
        setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
    }
      return(
        <>
        <h4>Use State Example</h4>
        {
            login?<h4>Welcome user</h4> : <h4>Please login</h4>
        }
        <button onClick={LoginHandler}>Click Me</button>
        <button onClick={CountHandler}>{count}</button>
        </>
      );
};
export default Usestateexample1;