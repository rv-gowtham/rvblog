import React from "react";
import RecipeItems from "./RecipeItems";
import { Link } from "react-router-dom";
import heroimg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <>
      <div className="d-flex hero_img">
        <div className="col-12 col-md-6 px-5 mb-2 mb-md-5">
          <div>
            <h1
              className="display-1 fw-bold pt-5 mt-5"
              style={{ color: "#f9af44" }}
            >
              FOOD RECIPE
            </h1>
          </div>
          <div className="py-3 fs-5">
            <p>
              A recipe blog shares cooking ideas, tips, and step-by-step
              instructions for making delicious dishes. It features a variety of
              recipes—from quick snacks to traditional meals—often with photos
              and personal stories. Recipe blogs inspire food lovers to try new
              dishes, explore flavors, and enjoy the art of home cooking.
            </p>
          </div>
          <div className="my-5 pt-5">
            <Link
              className="text-decoration-none py-2 px-4 btn btn-warning"
              to="/add"
            >
              Share Your Recipe
            </Link>
          </div>
        </div>
        <div className="col-6 d-none d-md-block"></div>
      </div>

      <div className="container-fluid mt-4">
        <RecipeItems />
      </div>
    </>
  );
};

export default Hero;
