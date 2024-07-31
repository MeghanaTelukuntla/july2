


import axios from 'axios';
import React, { Component } from 'react'

export default class Fetchexample extends Component {
    state={
        products:[],
        loader:true,
        error:false,
    };
//To Make a http call to retrive the products
//  fetcproducts=()=>{
//     fetch("https://fakestoreapi.com/products")
//     .then(res=>res.json())
//     .then((data)=>this.setState({products:data, loader:false}));
//  }
//here we will make the http calls and collect the data from await function
// fetcproducts =async()=>{
//     try{
//  const response=await fetch("https://fakestoreapi.com/products")
//  const finalResponse=await response.json()
//  this.setState({
//   products:finalResponse,
//   loader:false,
//  });
//     }catch(error){
//       this.setState({
//         error:true,
//       })
     
//     }
//     finally{
//       this.setState({
//         loader:false
//       })
//     }
// }
fetcproducts=async()=>{
  try{
  const response=await axios.get("https://fakestoreapi.com/products")
  console.log(response)
  if(response.status===200){
        this.setState({
           products:response.data,
           loader:false,
        })
  }
}catch(err){
  this.setState({
    error:true,
    loader:false,
  });
}
}
  render() {
    return (
      <div>
        <button onClick={this.fetcproducts}>Fetch Example</button>
        {
           this.state.loader?(
            <h2>Please wait....</h2>
           ):(
            <>
            {this.state.products.map((each)=>{
                return <h3 key={each.id}>{each.title}</h3>
            }
        )}
            </>
           )
        }
      </div>
    )
  }
}
