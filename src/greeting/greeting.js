import React from "react";
const Greeting=(prop)=>{
    return(
        <React.Fragment>
            {/* <h2>Good Morning {prop.children}</h2> */}
            {prop.children}
          <h3>July 17 is a holiday on account of moharam</h3>
          
        </React.Fragment>
    )
}
export default Greeting;