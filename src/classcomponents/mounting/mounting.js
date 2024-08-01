import { Component } from "react";


class MountingComponent extends Component{

    constructor(){
        console.log("Constructor Exection...")
        super();
        this.state={
     color:"blue",
        }
    }
     static getDerivedStateFromProps(){
        console.log("get derived from props executing")
        return null
     }

     componentDidMount(){
        console.log("Did Mount example")
     }
      render(){
        console.log("render example.....")
        return(
            <>

            <h1>Mounting Example</h1>
            <h2>Favourite Color is {this.state.color}</h2>
            </>
        )
      }
}
export default MountingComponent