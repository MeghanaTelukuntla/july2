
import { useContext } from "react";
import { DataContext } from "../App";
import Navbar from "../navbar/navbars";
const SettingScreen=()=>{
const {username, darkMode, changeUsername}=useContext(DataContext);
const nameChanger=()=>{
    changeUsername("Meghana Telukuntla");
};
    return(
        <>
        <Navbar/>
        <h3>Welcome {username}</h3>
        <button onClick={nameChanger}>Change your UserName</button>
        </>
    );
};
export default SettingScreen;