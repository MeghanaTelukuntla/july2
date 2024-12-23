
import { useContext } from "react";
import { DataContext } from "../App";
import Navbar from "../navbar/navbars";
const SettingScreen=()=>{
const {username, darkMode, changeUsername , changeCount, counter}=useContext(DataContext);
const nameChanger=()=>{
    changeUsername("Meghana Telukuntla");
};
const changeCountHandler=()=>{
    changeCount(4);
}
    return(
        <>
        <Navbar/>
        <h3>Welcome {username} {counter}</h3>
        <button onClick={nameChanger}>Change your UserName</button>
        <button onClick={changeCountHandler}>Change Count</button>
        </>
    );
};
export default SettingScreen;