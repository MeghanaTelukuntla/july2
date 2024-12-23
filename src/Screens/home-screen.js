import { useContext } from "react";
import Navbar from "../navbar/navbars";
import { DataContext } from "../App"; // Importing DataContext correctly

const HomeScreen = () => {
  const {username} = useContext(DataContext);
//   console.log(globalData, "globalData");

  return (
    <>
      <Navbar />
      <h3>Welcome {username}</h3>
    </>
  );
};

export default HomeScreen;
