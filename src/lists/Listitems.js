 
 import { Fruits } from "./fruitdata";
 const ListItems = () =>{
  
    return( <> 
    {Fruits.map((eachFruit)=>(
      <li>{eachFruit.name}</li>
   ))}</>
    );
 };

 export default ListItems;