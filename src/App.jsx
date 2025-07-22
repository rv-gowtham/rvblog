import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Hero from "./component/page/Hero";
import About from "./component/page/About";
import Fav from "./component/page/Fav";
import Add from "./component/page/Add";
import Login from "./component/page/Login";
import Signup from "./component/page/Signup";
import RecipeDetail from "./component/page/RecipeDetail";
import RecipePage from "./component/page/RecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 - Page Not Found</h1>,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "recipes",
        element: <RecipePage />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "recipes",
        element: <RecipePage />,
      },
      {
        path: "recipes/:id",
        element: <RecipeDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
