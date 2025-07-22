import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    category: "",
    ingredients: "",
    instructions: "",
    time: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...recipe,
        ingredients: recipe.ingredients.split(",").map((i) => i.trim()),
        instructions: recipe.instructions.split("\n").map((i) => i.trim()),
      };
      const response = await axios.post(
        "http://localhost:5000/recipes",
        payload
      );
      if (response.status === 201 || response.status === 200) {
        alert("Recipe added successfully!");
        setRecipe({
          title: "",
          description: "",
          category: "",
          ingredients: "",
          instructions: "",
          time: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while adding recipe.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={recipe.description}
            onChange={handleChange}
            rows="2"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingredients (comma separated)</label>
          <textarea
            className="form-control"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Instructions (line by line)</label>
          <textarea
            className="form-control"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cooking Time (in minutes)</label>
          <input
            type="text"
            className="form-control"
            name="time"
            value={recipe.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Add;
