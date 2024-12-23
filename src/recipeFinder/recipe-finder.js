import axios from "axios";
import { useEffect, useState } from "react";

const RecipeFinder = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe,setSelectedRecipe]=useState({})
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/recipes");
    //   In api we have many data if we want only specific data then use this extracting to an object and assigning the object to recipes.
      const revampDAta = data.recipes.map((eachRecipe) => ({
        id: eachRecipe.id,
        recipeName: eachRecipe.name,
      }));
      setRecipes(revampDAta);
      console.log(revampDAta);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const selectHandler = (event) => {
    const selectedRecipeId = event.target.value;
    fetchEachRecipe(selectedRecipeId);
  };

  const fetchEachRecipe = async (recipeId) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
      setSelectedRecipe(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
   
    
  };

  return (
    <>
      <h4>Select The Recipes</h4>
      {recipes.length > 0 && (
        <select onChange={selectHandler}>
          {recipes.map((each) => (
            <option key={each.id} value={each.id}>
              {each.recipeName}
            </option>
          ))}
        </select>
      )}
      {/* binding to the ui */}
 {
    Object.keys(selectedRecipe).length>0 && <div>
        <h4>{selectedRecipe.name}</h4>
        <h4>{selectedRecipe.rating}</h4>
    </div>
 }
    </>
  );
};

export default RecipeFinder;

//sir code
// import axios from "axios";
// import { useEffect, useState } from "react";

// const RecipeFinder = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState({});
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const { data } = await axios.get("https://dummyjson.com/recipes");

//     const revampData = data.recipes.map((eachRecipe) => {
//       return { id: eachRecipe.id, recipeName: eachRecipe.name };
//     });
//     // console.log(revampData);
//     setRecipes(revampData);
//     console.log(data);
//   };

//   const selectHandler = (event) => {
//     const selectedRecipeId = event.target.value;

//     fetchEachRecipe(selectedRecipeId);
//   };

//   const fetchEachRecipe = async (recipeId) => {
//     const { data } = await axios.get(
//       `https://dummyjson.com/recipes/${recipeId}`
//     );

//     setSelectedRecipe(data);

//     console.log(data);
//   };

//   return (
//     <>
//       <h3>Select the recipes</h3>

//       {recipes.length > 0 ? (
//         <select onChange={selectHandler}>
//           {recipes.map((each) => (
//             <option value={each.id} key={each.id}>
//               {each.recipeName}
//             </option>
//           ))}
//         </select>
//       ) : (
//         <h5>no recipes found</h5>
//       )}

//       {Object.keys(selectedRecipe).length > 0 && (
//         <div>
//           <h4>{selectedRecipe.name}</h4>
//           <h4>{selectedRecipe.rating}</h4>
//         </div>
//       )}
//     </>
//   );
// };
// export default RecipeFinder;