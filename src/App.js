import logo from './logo.svg';
import './App.css';
// import CustomButton from './button/button';
import CustomImage from './image/customimage';
// import Heading1 , { Heading2,Heading3 }   from './component/headings/headings';
// import { Heading3 as Mmmm} from './component/headings/headings';
// import CustomImage from './image/customimage';
// import ProfileComponents from './profilecomponent/profilecomponent';
// import Tables from './tables/table';
// import Cards from './card/card';
// import ListItems from './lists/Listitems';
// import UnorderList from './lists/UnorderList';

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
    {/* <ProfileComponents></ProfileComponents>
    <Tables></Tables>
    <br></br>
    <Cards/>
    <ListItems/>
    <UnorderList/> */}
    {/* <CustomButton text="login" bgColor="red" color="white"/>
    <CustomButton text="signup" bgColor="black" color="white"/>
    <CustomButton text="submit" bgColor="blue" color="white"/> */}
    <CustomImage 
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
    />

   </div>
  );
}

export default App;
