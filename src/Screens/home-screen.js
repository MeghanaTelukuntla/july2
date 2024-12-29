import { useContext } from "react";
import Navbar from "../navbar/navbars";
import { DataContext } from "../App"; // Importing DataContext correctly
import { RecipeContext } from "../Navigations/navigation";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const { username, counter } = useContext(DataContext);
  const { recipelist,addFavouriteDishHandler } = useContext(RecipeContext);
  const navigate=useNavigate()
  console.log(recipelist, "recipelist");
 const addFoodHandler=(eachFood)=>{
  addFavouriteDishHandler(eachFood)
 }
 const goToFavouriteHAndler=()=>{
       navigate("favouriteRecipe")
 }
  return (
    <>
      <Navbar />
      <h3>Welcome {username} {counter}</h3>

      {Array.isArray(recipelist) && recipelist.length > 0 ? (
        recipelist.map((each) => (
          <div key={each.id}>
            <h4>{each.name}</h4>
            <img src={each.image || "default-image-url"} alt={each.name} height={100} width={100} />
            <button>View More</button>
            {each.existInFavourite?
            (<button onClick={goToFavouriteHAndler}>Go To Favourite</button>)
            :(
              <button onClick={()=>addFoodHandler(each)}>Add To Favorite{""}</button> 
            )}
            {/* <button onClick={()=>addFoodHandler(each)}>Add To Favorite</button> */}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </>
  );
};

export default HomeScreen;
