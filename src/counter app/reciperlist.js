import axios from "axios";
import { Component } from "react";

import React from "react";

class Reciperlist extends Component{
    state={
        takerecipes:[],
        loader:true,
        error:false,
    }
    fetchRecipes=async()=>{
        try{
    const {status,data}=await axios.get('https://dummyjson.com/recipes')
    // console.log(response,"response")
    if(status===200){
      this.setState({
        recipeslist:data.recipes,
        loader:false,
      })
    }
        }catch(err){
            this.setState({
                error:true,
                loader:false,
            })
        }
    }

    componentDidMount(){
        this.fetchRecipes();
    }
    render(){
        return(
            <React.Fragment>
          <h2>Hello</h2>
          {
            this.state.loader?(<h3>
                  Please wait........  
            </h3>
        ):(
        <>
                {
                    this.state.recipeslist.map((eachReciper)=>{
                        const{name,image,id,ingredients}=eachReciper
                            return(
                                <React.Fragment key={id}> 
                                
                                <h4>{name}</h4>
                               <img src={image} height={60} width={60}></img>
                               <ul>
                                <h3>Ingredients to make dish</h3>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
                               
                               
                                </React.Fragment>
                            )
                    })
                }
            </>)
          }
            </React.Fragment>
        )
    }
}
export default Reciperlist;