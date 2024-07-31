import { Component } from "react";
import "./square.css"

class SquareComponent extends Component{
    state={
        squareArray:[],
    }
    addSquarehandler=()=>{const newstate=[...this.state.squareArray,1];
        this.setState({
      squareArray:newstate,
    },()=>{})}
    render(){
        return(
        <>
        <h1>Square Component</h1>
        <button onClick={this.addSquarehandler}>Add Square</button>
        {/* <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div>
        <div className="square-card"></div> */}
        {
            this.state.squareArray.map((each,index)=>{
                return(
                    <>
                           <div className={(index+1)%2==0?"even":"odd"}></div>
                    </>
                )
            })
        }
        </>
        )
    }
}

export default SquareComponent;