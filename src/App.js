import logo from './logo.svg';
// import './App.css';
import Data from './fakestore/fakedata';
import Ipl_List from './ipllist/iplcard';
import Eachrecipe from './fooditems/fdata';
import Greeting from './greeting/greeting';
import Cards from './cards/cards';
import CustomButton from './button/custombutton';
import style from './App.module.css'
import CustomAccordion from './bootstrap/accordion';

// const students=["Meghana","Rohan","Rahul","Priya","Achyuth"]
const App =() => {
  return (
   <div>
  <Data/>
  {/* <Ipl_List/> */}
  {/* <Eachrecipe/> */}
   {/* <Cards/> */}
  {/* <CustomButton className={style.button}>How are you</CustomButton> */}
 {/* <CustomAccordion/> */}
    
   </div>
  );
}

export default App;

