import React, { useState } from "react";



const UsestateExample2=()=>{
const [todos,SetTodos]=useState([
    {
        period:"Morning",
        todos:"Woke up at 8am",
        
     },
     {
        period:"Afternoon",
        todos:"Lunch at 1pm",
     }])
     const todoHandler=()=>{
        const newTodo={
            period:"evening",
            todos:"Snacks at 3pm",
        }
        const newtodostate=[...todos,newTodo]
        SetTodos(newtodostate)
        console.log(todos)
     }
     const deleteHandler=(index)=>{
        console.log(index,todos)
        const finalstate= todos.filter((_,indexes)=>indexes!=index)
        SetTodos(finalstate)
     }
    return(
        <>
        <h4>Hi This is second example</h4>
        <button onClick={todoHandler}>Add todo</button>
        {/* //to display in the ui */}
       {
        todos.map((eachTodo,index)=>{
            return( 
                <React.Fragment key={index}>
                <h4>Current Period {eachTodo.period}</h4>
                <h5> {eachTodo.todos}</h5>
                <button onClick={()=>deleteHandler (index)}>Delete Todo</button>
                </React.Fragment>
            ) 

        })
       }
        </>
    )
}
export default UsestateExample2;