import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

import HomeScreen from "../Screens/home-screen";
import AboutScreen from "../Screens/about-screen";
import SettingScreen from "../Screens/setting-screen";
import BlogScreen from "../Screens/blog-screen";
import InvalidScreen from "../Screens/invalid-screen";
import UserScreen from "../Screens/user-screen";
import RecipeDetail from "../Screens/recipe-detail-screen";
import DoctorsScreen, { NewDoctors, OldDoctors } from "../Screens/doctorscreen";
import Favouritescreen from "../Screens/favourite-recipe-screen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const RecipeContext = createContext();

const NavigationStack = () => {
  const [recipelist, setRecipeList] = useState([]);
  const [favouriteDish,setFavoutiteDish]=useState([])
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      const newData=data.recipes.map((EachData)=>{
        return{...EachData,existInFavourite:false}
      })
      if (status === 200) {
        console.log(data);
        setRecipeList(data?.recipes || []); // Adjust based on actual API response structure
      }
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
    }
  };
  const addFavouriteDishHandler=(newDish)=>{
    const recipeExists=favouriteDish.find(eachFood=>eachFood.id==newDish.id==newDish.id)

    const newRecipeList=recipelist.map((eachRecipe)=>{
   if(eachRecipe.id==newDish.id){
      return{...eachRecipe,existInFavourite:true}
   }
    else{
      return eachRecipe
    }
   })
   setRecipeList(newRecipeList)

  if (recipeExists) {
    toast.error("already exists in favourite foods! !", {
      position: "top-right",
    });
    // alert("already exists in favourite foods");
  } else {
    setFavoutiteDish([...favouriteDish, newDish]);
    toast.success("Added to favourites !", {
      position: "top-right",
    });
  }
};

  const removeFromFavourite=(id)=>{
    // const recipeExists=favouriteDish.find(eachFood=>eachFood.id==newDish.id==newDish.id)
    const newRecipeList=recipelist.map((eachRecipe)=>{
   if(eachRecipe.id==id){
      return{...eachRecipe,existInFavourite:false}
   }
    else{
      return eachRecipe
    }
   })

   setRecipeList(newRecipeList)
    const newFavouriteList=favouriteDish.filter((eachDish)=>eachDish.id!=id);
    setFavoutiteDish(newFavouriteList);
  }

  return (
    <RecipeContext.Provider value={{ recipelist,favouriteDish,addFavouriteDishHandler,removeFromFavourite }}>
      <BrowserRouter>
        <Routes>
          {/* Static Routes */}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/setting" element={<SettingScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="*" element={<InvalidScreen />} />
          <Route path="/recipes" element={<UserScreen />} />
          <Route path="/favouriteRecipe" element={<Favouritescreen/>} />
          {/* Nested Routes Example */}
          <Route path="/doctors" element={<DoctorsScreen />}>
            <Route path="new" element={<NewDoctors />} />
            <Route path="old" element={<OldDoctors />} />
          </Route>

          {/* Dynamic Routes */}
          <Route path="/recipe-details/:cuisine/:recipeId" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </RecipeContext.Provider>
  );
};

export default NavigationStack;
