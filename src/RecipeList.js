import React from "react";

function RecipeList({ recipes, setRecipes }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const deleteRecipe = (indexToDelete) => {
    setRecipes((recipes) => 
      recipes.filter((recipe, index) => index !== indexToDelete)
    );
  };

  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} /></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td>{preparation}</td>
      <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Prepartion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
