import { Component } from "react"

class Updating extends Component{
    constructor(){
        super()
        this.state={
         cakecount:100,
        }
    }

    cakehandler=()=>{
        this.setState({
             cakecount:this.state.cakecount-1,
        },()=>{})
    }
    shouldComponentUpdate(){// by using should component we are making it fasle means when we are decreasing the count it will no decrease when we use true it will decrement
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
             console.log(prevState)// here we are not using any props we are using state and is decreasing each and every time  
             return null;
    }
    // to use side effects we should use  didmount and didupdate here we are changing the react app in search bar so we are using side effects
    componentDidMount(){
        document.title=`cake count${this.state.cakecount}`
    }
    //componentdidupdate we are uisng because the title count is not decreasing  it will carryforward the side efffects in updating phase
    componentDidUpdate(){
         document.title=`cake count${this.state.cakecount}`
    }
    render(){
        console.log("render executing..........")
        return(
            <>
            <div>Updating Component</div>
        <h3>No.of Cake are {this.state.cakecount}</h3>
        <button onClick={this.cakehandler}> Buy Cake</button>
            </>
        )
    }
}

export default Updating;