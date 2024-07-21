import { Fooddata } from "./items";
import "./food.css"
const Eachrecipe=()=>{
    return(
        <div className="b">
            {Fooddata.recipes.map((recipe)=>(
               <div key={recipe.id} className="a">
                <center><h2 style={{color:"red"}}>{recipe.name}</h2></center>
                <center><img src={recipe.image} height={150} width={150}></img></center>
               <center><h2 style={{color:"aqua"}}>Ingredients</h2></center>
                <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <ul>
            <h2 style={{color:"grey"}}>Instructions to prepare a recipe</h2>
            {recipe.instructions.map((instruct, index) => (
              <li key={index}>{instruct}</li>
            ))}
          </ul>
                </div>

            ))}
        </div>
    );
};
export default Eachrecipe;