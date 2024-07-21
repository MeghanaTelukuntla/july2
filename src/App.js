import logo from './logo.svg';
import './App.css';
import Data from './fakestore/fakedata';
import Ipl_List from './ipllist/iplcard';
import Eachrecipe from './fooditems/fdata';
const App =() => {
  return (
   <div>
  {/* <Data/> */}
  {/* <Ipl_List/> */}
  <Eachrecipe/>
   </div>
  );
}

export default App;
