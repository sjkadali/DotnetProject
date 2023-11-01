import React, { useState, useEffect } from 'react';
import Recipe from  './Recipe';

const ShowRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const id = 1;

    useEffect(() => {
        fetch(`recipe`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                setRecipes(data);
            })
    }, [])

    return (
        <div className="app">
            <h1>Recipes</h1>
                {recipes?.length > 0 ? (
                    <div className="container">
                    {recipes.map((recipe) => (
                        <Recipe recipe={recipe} />
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No recipes found</h2>
                    </div>
                )}
        </div>
    )
}

export default ShowRecipes;