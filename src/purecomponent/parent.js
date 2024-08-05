import { Component } from "react";
import Child from "./child";

class Purecomponent extends Component{
    state={
        toggleComponent:false,
    };
   toogleClicked=()=>{
        this.setState({
         toggleComponent:!this.state.toggleComponent,
        },()=>{})
    }
    componentDidMount(){
        console.log("Component did mount parent")
    }
    render(){
        console.log("Parent rendering")
        return(
            <div>
    <Child/>
    <button onClick={this.toogleClicked}>Toogle The Component</button>
            </div>
        )
    }
}
export default Purecomponent;