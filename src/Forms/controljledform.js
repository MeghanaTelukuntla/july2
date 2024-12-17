import React, {  useState } from "react";

function ControlledForm() {
  
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[usernameerror,setUsernameerror]=useState(false);
    const[userpassworderror,setpassworderror]=useState(false);
    // const[formdata,setformdata]=useState({
    //   username:"",
    //   password:""
    // })
  const submitHandler = (event) => {
    event.preventDefault();
   

    // console.log(emailEntered, passwordEntered, "User entered details");
    // if (emailEntered.length < 15 && passwordEntered.length < 15) {
    //   setError(null);
    //   //allow user to submit

    //   sucesssSubmit(emailEntered, passwordEntered);
    // } else {
    //   setError("Please entered <15 characters for email and password");
    //   // throw the error
    // }
  };

  const sucesssSubmit = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const finalResponse = await response.json();

      if (finalResponse.message) {
        alert(finalResponse.message);
      } else {
        console.log(finalResponse, "final response");
        // setUserData(finalResponse);
      }
    } catch (err) {}
  };
  const usernameHandler=(event)=>{
         const userEnteredValue= event.target.value;
         setUserName(userEnteredValue);
         console.log(userEnteredValue,"UserName Entering....")
         if(validate(userEnteredValue)){
          setUsernameerror(true)
         }else{
          setUsernameerror(false)
         }
  }
  const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value;
        setPassword(userEnteredPassword)
        console.log(userEnteredPassword,"Password Entering...");
        if(validate(userEnteredPassword)){
          setpassworderror(true)
         }
         else{
          setpassworderror(false)
         }
  }
   const validate=(value)=>{
    return value.length > 15;
   }
  return (
    <>
      {false ? (
        <>
          <h2>Wellcome user</h2>
        </>
      ) : (
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
              //Attached state via value attribute
              value={username}
              onChange={usernameHandler}
            //   ref={emailRef}
            />
           { usernameerror && (
            <span>Invalid UserName</span>
            )}
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
            //   ref={passwordRef}
            value={password}
            onChange={passwordHandler}
            />
             { userpassworderror && (
            <span>Invalid UserName</span>
            )}
          </div>

          {/* {error && <span style={{ color: "red" }}>{error}</span>} */}
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
      )}
    </>
  );
}

export default ControlledForm;