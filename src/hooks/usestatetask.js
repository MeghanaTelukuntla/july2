import React, { useState } from "react";

const Recipetask = () => {
    const [recipe, setRecipe] = useState([
        {
            country: "India",
            dish: "Pizza",
            timetomakedish: "2 hours",
        },
        {
            country: "USA",
            dish: "Burger",
            timetomakedish: "1 hour",
        },
        {
            country: "India",
            dish: "Biryani",
            timetomakedish: "1 hour",
        }
    ]);

    const recipeHandler = () => {
        const newRecipe={
            country: "India",
            dish: " Chicken Biryani",
            timetomakedish: "1 hour",
        }
        const newrecipestate=[...recipe,newRecipe]
        setRecipe(newrecipestate)
        console.log(recipe)
    }
    const deleteHandler=(index)=>{
        console.log(index,recipe)
        const final_state= recipe.filter((_,indexes)=>indexes!=index)
        setRecipe(final_state)
     }

    return (
        <React.Fragment>
            <h2>Table Task To Add Recipes And Delete It Accordingly</h2>
            <button onClick={recipeHandler}>Add Recipes</button>
           
            <table style={{ borderCollapse: "collapse", width: "60%" }}>
                <thead>
                    <tr>
                        <th style={{ border: "2px solid black" }}>Dish</th>
                        <th style={{ border: "2px solid black" }}>Time to Make</th>
                        <th style={{ border: "2px solid black" }}>To Delete Items</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipe.map((eachdish, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ border: "2px solid black" }}>To Make {eachdish.dish}</td>
                                    <td style={{ border: "2px solid black" }}>It Will Take {eachdish.timetomakedish}</td>
                                    <button onClick={()=>deleteHandler (index)}>Delete Recipes</button>
                                </tr>
                                
                            );
                        })
                    }
                </tbody>
            </table>
            
        </React.Fragment>
    );
}

export default Recipetask;
