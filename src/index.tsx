import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/index.scss";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Failed to find the root element");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/shop",
        element: <h1>Shop</h1>,
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
