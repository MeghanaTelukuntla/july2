import axios from "axios";
import React, { Component } from "react";
import "./table.css";
class RecipeeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            takerecipes: [],
            loader: true,
            error: false,
        };
    }

    async fetchRecipes() {
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            this.setState({
                takerecipes: response.data.recipes,
                loader: false,
            });
            console.log(response, "response");
        } catch (err) {
            this.setState({
                error: true,
                loader: false,
            });
        }
    }

    componentDidMount() {
        this.fetchRecipes();
    }

    render() {
        const { takerecipes, loader, error } = this.state;

        if (loader) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error fetching recipes.</div>;
        }

        return (
            <div>
                <h1>Recipe List</h1>
                <table className="tablestyle">
                    <thead >
                        <tr>
                            <th className="headstyle">Name</th>
                            <th className="headstyle">Instructions</th>
                            <th className="headstyle">Ingredients</th>
                            <th className="headstyle">Rating</th>
                            <th className="headstyle">Meal Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {takerecipes.map((recipe) => (
                            <tr key={recipe.id}>
                                <td className="bodystyle">{recipe.name}</td>
                                <td className="bodystyle">{recipe.instructions}</td>
                                <td className="bodystyle">
                                    <ul>
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="bodystyle">{recipe.rating}</td>
                                <td className="bodystyle">{recipe.mealType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RecipeeeList;
