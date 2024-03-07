import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Failed to find the root element");
}

const container = createRoot(root);

container.render(<App />);
