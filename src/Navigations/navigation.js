import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeScreen from "../Screens/home-screen";
import AboutScreen from "../Screens/about-screen";
import SettingScreen from "../Screens/setting-screen";
import BlogScreen from "../Screens/blog-screen";
import InavlidScreen from "../Screens/invalid-screen";
import UserScreen from "../Screens/user-screen";
import RecipeDetail from "../Screens/recipe-detail-screen";

import DoctorsScreen, {
    NewDoctors,
    OldDoctors,
  } from "../Screens/doctorscreen";


const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>  
           {/* Static Routes */}
             <Route path="/" element={<HomeScreen/>}/>
             <Route path="/about" element={<AboutScreen/>}/>
             <Route path="/setting" element={<SettingScreen/>}/>
             <Route path="/blog" element={<BlogScreen/>}/>
             <Route path="*" element={<InavlidScreen/>}/>
             <Route path="recipes" element={<UserScreen/>}/>
             <Route path="doctors" element={<DoctorsScreen/>}> 
             <Route path="new" element={<NewDoctors />} />
             <Route path="old" element={<OldDoctors />} />
             </Route>
             {/* Dynamic routes */}
             <Route path="recipes/:cuisine/:recipeId" element={<RecipeDetail/>}/>
             </Routes>
        </BrowserRouter>
    );
};

export default NavigationStack;