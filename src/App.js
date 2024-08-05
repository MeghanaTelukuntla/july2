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
import Counter from './counter app/counter';
import SquareComponent from './counter app/squaretask';
import Fetchexample from './counter app/fetchexample';
import Reciperlist from './counter app/reciperlist';
import RecipeeeList from './18julytask/tables';
import CountryList from './18julytask/country';
import MountingComponent from './classcomponents/mounting/mounting';
import Updating from './classcomponents/updating';
import Unmounting from './classcomponents/mounting/unmounting';
import Task from './july 20 task/july20';
import Purecomponent from './purecomponent/parent';
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
   {/* <CounterApp/> */}
   {/* <Counter/> */}
   {/* <SquareComponent/> */}
   {/* <Reciperlist/> */}
   {/* <Fetchexample/> */}
   {/* <RecipeeeList/> */}
   {/* <CountryList/> */}
   {/* <MountingComponent/> */}
   {/* <Updating/> */}
   {/* <Unmounting/> */}
   {/* <Task/> */}
  <Purecomponent/>
   </div>
  );
}

export default App;

