import { Component, PureComponent } from "react";


class Child extends PureComponent{
    componentDidMount(){
        console.log("Component did mount child")
    }
    render(){
        console.log("Child rendering")
        return(
            <div>
          <h2>Hai Hello</h2>
            </div>
        )
    }
}
export default Child;