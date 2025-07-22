import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="py-5 my-5">
          <h1>
            <strong>ABOUT THIS BLOG</strong>
          </h1>
          <br />

          <h3 className="fw-semibold">Welcome to TasteTrove!</h3>

          <p className="fs-5">
            Whether you're a home cook, a passionate foodie, or just someone
            looking for dinner inspiration, you're in the right place. This blog
            is all about sharing easy, delicious, and authentic recipes from
            around the world — all tested, loved, and written with care. From
            comfort food classics to quick weekday meals, each recipe comes with
            step-by-step instructions, ingredients, and cooking time to make
            your kitchen experience fun and stress-free.
          </p>

          <br />

          <h3 className="fw-semibold">What You'll Find Here:</h3>

          <ul style={{ listStyle: "none" }}>
            <li> " Tried and tested recipes "</li>
            <li> "Ingredient tips and substitutes "</li>
            <li> " Cooking guides for beginners "</li>
            <li> " LocalStorage-enabled Liked Recipes section "</li>
            <li> " User-authenticated recipe sharing "</li>
          </ul>
          <br />
          <h3 className="fw-semibold">Built with ❤️ using:</h3>
          <p>React.js | Express.js | Node.js | MongoDB</p>
          <br />
          <h4>Happy Cooking!</h4>
          <p>————the blog Team</p>
        </div>
      </div>
    </>
  );
};

export default About;
