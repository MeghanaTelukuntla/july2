import { Component } from "react";


// state creation
class SubscribeButton extends Component{
    state={
          isSubscribe:false,
          text1:"Subscribe",
          text2:"Subscribed",
    };
    handleClick=()=>{
       console.log("clicked")
       this.setState({
        isSubscribe:!this.state.isSubscribe,

       },()=>{})
    }
    render(){
        return(
            <>
           <button onClick={this.handleClick}>
            {this.state.isSubscribe?this.state.text2:this.state.text1}
           </button>
           {
            this.state.isSubscribe?(<> 
            <h2>Thanks for subscribing</h2>
           
            </> ) : ( 
                <h2>Please subscibe to see the content</h2>
            )}</>
        );
    }
}

export default SubscribeButton;