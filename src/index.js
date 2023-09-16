import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/homepage';
import SearchPage from './pages/SearchPage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:"/search/:id",
    element:<MovieDetailPage />
  },
  {
    path:"/search",
    element:<SearchPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);