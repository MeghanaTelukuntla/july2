import { Component } from "react";
class  Counter extends Component{
    state={
        count:10,
    };
incrementHandler=()=>{
     this.setState({
         count:this.state.count+1,
        },()=>{})
    }
resetHandler=()=>{
    this.setState({
        count:0,
    },()=>{})
}
decrementHandler=()=>{
    this.setState({
        count:this.state.count-1,
    },()=>{})
}
    render(){
        return(
            <>
            <h2>My Counter</h2>
          <h3>{this.state.count}</h3>
          <button className="btn btn-primary mx-2" onClick={this.incrementHandler}>+</button>
        <button className="btn btn-danger mx-2" onClick={this.decrementHandler} >-</button>
        <button className="btn btn-secondary mx-2" onClick={this.resetHandler} >Reset</button>
            </>
        )
    }
}
export default Counter;