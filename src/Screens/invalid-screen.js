import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbars";


const InavlidScreen=()=>{
  const navigate =  useNavigate();
    const navigateToHome=()=>{
             navigate("/")
    }
    return(
        <>
       {/* <Navbar/> */}
        <h3>We are sorry to inform you that the data you are looking for is invalid.</h3>
        <button onClick={navigateToHome}>
            {/* <Link to={"/"}>Go to Home</Link> */}
            Go To Home
            </button>
        </>
    );
};
export default InavlidScreen;