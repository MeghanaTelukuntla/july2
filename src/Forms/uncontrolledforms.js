import React,{useRef, useState} from "react"


function UncontrolledForm(){
   const emailRef= useRef();//here we are accepting only dom we are not preserving any value so give as empty it will create a reference and that should be added to inputs
   const passwordRef= useRef();
   const[error,setError]=useState(null)
   const submitHandler=(event)=>{
    event.preventDefault();
  const emailEntered=emailRef.current.value;
  const PasswordEntered=passwordRef.current.value;
  console.log(emailEntered,PasswordEntered,"user Entered Details");
  if(emailEntered.length<18 && PasswordEntered.length<10){
    //allow user to submit
    setError(null)
    sucessSubmit(emailEntered,PasswordEntered)
  }else{
    setError("please Enter less than 15 characters for email and password")
    //throw the error
  }
   }
   const sucessSubmit= async(username,password)=>{
    // alert('Client validation is sucessfull')
    // Hit The server
    try{
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
        
      })
    })
    const finalResponse=await response.json();
    console.log(finalResponse);
    
  }catch(err){

  }
    // .then(res => res.json())
    // .then(console.log);
   };
    return (
        <form onSubmit={submitHandler}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={emailRef}//ref is used to attach the reference
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  {error && <span style={{color:'red'}}>{error}</span>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    )
}
export default UncontrolledForm