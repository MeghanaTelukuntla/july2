import React, { createContext } from "react";
import NavigationStack from './Navigations/navigation';
import { useState } from "react";
export const DataContext = createContext(); // Exporting DataContext

const App = () => {
  const[username,setUserName]=useState("Meghana");
  const[darkMode,setDarkMode]=useState(true);
  const[counter,setCounter]=useState(100);

  const changeUsername=(newName)=>{
    setUserName(newName)
  }
  const changeCount=(value)=>{
    setCounter(counter+ value);
  }
  return (
    <DataContext.Provider value={{
      username,
      darkMode,
      changeUsername,
      counter,
      changeCount,
    }}>
      <NavigationStack />
    </DataContext.Provider>
  );
};

export default App;
