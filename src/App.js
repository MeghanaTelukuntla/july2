import logo from './logo.svg';
import './App.css';

import Iplcard from './ipllist/iplcard';
import Ipldata from './ipllist/ipldata';

const App =() => {
  return (
   
   <div>
   
    {/* <CustomImage 
    source="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    altenate="bag"
    width={100}
    height={100}
    />
     <CustomImage 
    source="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    altenate="bag"
    width={100}
    height={100}
    /> */}
    {/* <Ipldata/> */}
  <Iplcard
  each={Ipldata}
  />
   </div>
  );
}

export default App;
