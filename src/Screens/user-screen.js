import { useEffect, useState } from "react";
import Navbar from "../navbar/navbars";
import axios from "axios";
import { Link } from "react-router-dom";

const UserScreen = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const { status, data } = await axios.get("https://dummyjson.com/recipes");
            if (status === 200) {
                setRecipeList(data.recipes);
                console.log(data);
            }
        } catch (err) {
            console.error("Error fetching recipes:", err);
        }
    };

    return (
        <>
            <Navbar />
            <h3>Welcome to Recipe Screen</h3>
            <h3>Recipe Listing</h3>
            {
                recipeList.map((eachRecipe) => {
                    const { id, name, image, rating , cuisine} = eachRecipe; // Destructure id
                    return (
                        <div key={id}> {/* Use id as a unique key */}
                            <h4>Dish Name: {name}</h4>
                            <img src={image} width={100} height={100} alt={name} />
                            <h5>Rating: {rating}</h5>
                            <button>
                                <Link to={`/recipes/${cuisine}/${id}`}>See More</Link>
                            </button>
                        </div>
                    );
                })
            }
        </>
    );
};

export default UserScreen;
