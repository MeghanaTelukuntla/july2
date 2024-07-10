import logo from './logo.svg';
import './App.css';
// import CustomButton from './button/button';
import Heading1 , { Heading2,Heading3 }   from './component/headings/headings';
// import { Heading3 as Mmmm} from './component/headings/headings';
// import CustomImage from './image/customimage';
import ProfileComponents from './profilecomponent/profilecomponent';
import Tables from './tables/table';
import Cards from './card/card';
import ListItems from './lists/Listitems';
import UnorderList from './lists/UnorderList';
const App =() => {
  return (
   
   <div>
   {/* <CustomButton/>
   <h3>Hi How Are U</h3>
    <CustomButton/>
    <CustomButton/>
    <CustomButton/>
    <Heading1/>
    <Heading2/>
    <Mmmm/>
    <CustomImage></CustomImage> */}
    <ProfileComponents></ProfileComponents>
    <Tables></Tables>
    <Cards/>
    <ListItems/>
    <UnorderList/>
   </div>
  );
}

export default App;
