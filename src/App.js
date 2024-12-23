import React, { createContext } from "react";
import NavigationStack from './Navigations/navigation';
import { useState } from "react";
export const DataContext = createContext(); // Exporting DataContext

const App = () => {
  const[username,setUserName]=useState("Meghana")
  const[darkMode,setDarkMode]=useState(true)

  const changeUsername=(newName)=>{
    setUserName(newName)
  }
  return (
    <DataContext.Provider value={{
      username,
      darkMode,
      changeUsername,
    }}>
      <NavigationStack />
    </DataContext.Provider>
  );
};

export default App;
