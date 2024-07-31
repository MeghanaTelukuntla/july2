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
import ConditionalRendering from './conditionalrendering/condtion';
import CustomClassButton from './classcomponents/btn';
import SubscribeButton from './classcomponents/subscribebutton';
import CounterApp from './counter app/counterapp';
// const students=["Meghana","Rohan","Rahul","Priya","Achyuth"]
const App =() => {
  return (
   <div>
  {/* <Data/> */}
  {/* <Ipl_List/> */}
  {/* <Eachrecipe/> */}
   {/* <Cards/> */}
  {/* <CustomButton className={style.button}>How are you</CustomButton> */}
 {/* <CustomAccordion/> */}
    {/* <ConditionalRendering/> */}
    {/* <CustomClassButton/> */}
    {/* <SubscribeButton/> */}
   <CounterApp/>
   </div>
  );
}

export default App;

