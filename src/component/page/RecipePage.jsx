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

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        {/* Search Box */}
        <div className="text-center mt-5 mb-4">
          <input
            type="text"
            placeholder="Search recipes (e.g., veg, cake, sweet)..."
            className="form-control w-50 mx-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div
          className="row justify-content-center px-4"
          style={{ padding: "40px 0" }}
        >
          {filteredRecipes.length === 0 ? (
            <div className="text-center mt-5">
              <h4 className="text-muted">
                No recipes found for "{searchTerm}"
              </h4>
            </div>
          ) : (
            filteredRecipes.map((recipe) => (
              <div
                className="card col-10 col-sm-6 col-md-4 col-lg-3 m-2 p-3 shadow"
                key={recipe._id}
              >
                <h5 className="fw-bold text-capitalize">{recipe.title}</h5>
                <p className="text-muted">
                  {recipe.description?.substring(0, 60)}...
                </p>
                <Link
                  to={`/recipes/${recipe._id}`}
                  className="btn btn-sm btn-outline-warning"
                >
                  View Recipe
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeItems;
