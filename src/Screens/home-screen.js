import { useContext } from "react";
import Navbar from "../navbar/navbars";
import { DataContext } from "../App"; // Importing DataContext correctly
import RecipeFinder from "../recipeFinder/recipe-finder";

const HomeScreen = () => {
  const {username,counter} = useContext(DataContext);
//   console.log(globalData, "globalData");

  return (
    <>
    
      <Navbar />
      <h3>Welcome {username} {counter}</h3>
      <RecipeFinder/>
    </>
  );
};

export default HomeScreen;
