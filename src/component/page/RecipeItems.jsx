import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeItems = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center mt-5 mb-4">
        <div className="col-10 col-sm-8 col-md-6">
          <input
            type="text"
            placeholder="Search recipes (e.g., veg, cake, sweet)..."
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {filteredRecipes.length === 0 ? (
          <div className="col-12 text-center mt-5">
            <h5 className="text-muted">No recipes found for "{searchTerm}"</h5>
          </div>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              className="col-11 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={recipe._id}
            >
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold text-capitalize">{recipe.title}</h5>
                <p className="text-muted mb-1">
                  <strong>Category:</strong> {recipe.category}
                </p>
                <p className="text-muted mb-2">
                  {recipe.description?.substring(0, 60)}...
                </p>
                <Link
                  to={`/recipes/${recipe._id}`}
                  className="btn btn-sm btn-outline-warning mt-auto"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeItems;
