import logo from './logo.svg';
import './App.css';
import Data from './fakestore/fakedata';
import Ipl_List from './ipllist/iplcard';
import Eachrecipe from './fooditems/fdata';
import Greeting from './greeting/greeting';
const students=["Meghana","Rohan","Rahul","Priya","Achyuth"]
const App =() => {
  return (
   <div>
  {/* <Data/> */}
  {/* <Ipl_List/> */}
  {/* <Eachrecipe/> */}
  {/* {//first method in child prop passing the content
  students.map(eachstudent=>(
    <Greeting>{eachstudent}</Greeting>
  ))} */}
  {/* {//second method in child prop passing as jsx
    students.map(eachstudent=>(
            <Greeting>
              <h4>Good Morning {eachstudent}</h4>
              <h3>How was the weather today</h3>
            </Greeting>
    ))} */}

    {//third method in children prop using jsx
      students.map((eachstudent)=>(
        <Greeting>
            <Card name={eachstudent}/> 
            {/* //here we are using name is equal to eachstudent because to get each and every name in good morning if we use directly in card we wll get error so we are using general prop */}
        </Greeting>
      ))
    }
   </div>
  );
}

export default App;
const Card=(prop)=>{
  return(
    <>
    <h2>Good Morning {prop.name} </h2>
    <h3>How was the weather today?</h3>
    </>
  )
}
