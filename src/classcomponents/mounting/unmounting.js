import { Component } from "react";
import React from "react";


class Unmounting extends Component{
    constructor(){
        super();
       this.state={
             ischildVisible:true,
        };
    }
    childHandler=()=>{
        this.setState({
            ischildVisible: !this.state.ischildVisible,
        });
    };
    render(){
        return (  
            <div>
          {this.Children.ischildVisible ? <Children/> : <h3> Child Not Found</h3>}
          <button onClick={this.childHandler}>Click Me</button>
            </div>
        )
    }
}
export default Unmounting;

class Children extends Component{
    render(){
        return(
           <div>Unmounting</div>
        )
    }
}
