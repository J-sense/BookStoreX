import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/modules/home/Home.jsx";
import BookDetails from "./components/modules/home/book/BookDetails.jsx";
import BookStorXRegistration from "./components/modules/auth/Register.jsx";
import BookStorXLogin from "./components/modules/auth/BookStorXLogin.jsx";
import Authprovider from "./provider/Authprovider.jsx";
import PrivateRoute from "./provider/PrivateRoute.jsx";
import Authors from "./components/Pages/Authors.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/bookData.json"),
      },
      {
        path: "register",
        element: <BookStorXRegistration />,
      },
      {
        path: "login",
        element: <BookStorXLogin />,
      },
      {
        path: "authors",
        element: (
          <PrivateRoute>
            <Authors></Authors>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
