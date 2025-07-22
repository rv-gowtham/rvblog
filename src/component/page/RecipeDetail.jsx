import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await axios.delete(`http://localhost:5000/recipes/${id}`);
        navigate("/recipes");
      } catch (e) {
        console.error("Failed to delete recipe:", e);
        alert("Failed to delete recipe.");
      }
    }
  };

  const startEditing = () => {
    setEditData({
      title: recipe.title || "",
      description: recipe.description || "",
      category: recipe.category || "",
      ingredients: (recipe.ingredients || []).join(", "),
      instructions: (recipe.instructions || []).join("\n"),
      time: recipe.time || "",
    });
    setEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedRecipe = {
        ...editData,
        ingredients: editData.ingredients.split(",").map((i) => i.trim()),
        instructions: editData.instructions.split("\n").map((i) => i.trim()),
      };
      const res = await axios.put(
        `http://localhost:5000/recipes/${id}`,
        updatedRecipe
      );
      setRecipe(res.data);
      setEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update recipe.");
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mt-4" style={{ minHeight: "90vh" }}>
      <h2 className="my-3 display-4 fw-bold text-capitalize">{recipe.title}</h2>
      {editing && editData ? (
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              value={editData.title}
              onChange={handleEditChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={editData.description}
              onChange={handleEditChange}
              className="form-control"
              rows={3}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <input
              name="category"
              value={editData.category}
              onChange={handleEditChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time</label>
            <input
              name="time"
              value={editData.time}
              onChange={handleEditChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <textarea
              name="ingredients"
              value={editData.ingredients}
              onChange={handleEditChange}
              className="form-control"
              rows={3}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Instructions</label>
            <textarea
              name="instructions"
              value={editData.instructions}
              onChange={handleEditChange}
              className="form-control"
              rows={5}
            />
          </div>
          <div className="d-flex gap-2 my-3">
            <button type="submit" className="btn btn-success">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p>
            <strong>Description:</strong> {recipe.description}
          </p>
          <p>
            <strong>Category:</strong> {recipe.category}
          </p>
          <p>
            <strong>Time:</strong> {recipe.time} minutes
          </p>
          <div className="mt-4">
            <h5>
              <strong>Ingredients:</strong>
            </h5>
            <ul>
              {(recipe.ingredients || []).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h5>
              <strong>Instructions:</strong>
            </h5>
            <p style={{ whiteSpace: "pre-line" }}>
              {(recipe.instructions || []).join("\n")}
            </p>
          </div>
          <div className="my-3">
            <button className="btn btn-primary me-2" onClick={startEditing}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
