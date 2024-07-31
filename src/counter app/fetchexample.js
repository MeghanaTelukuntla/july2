


import React, { Component } from 'react'

export default class Fetchexample extends Component {
    state={
        products:[],
        loader:true,
        error:false,
    };

 fetcproducts=()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then((data)=>this.setState({products:data, loader:false}));
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
                return <h3>{each.title}</h3>
            }
        )}
            </>
           )
        }
      </div>
    )
  }
}
