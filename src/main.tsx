import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap-grid.rtl.css";
import "./components/itemList.css";

// Finding the root HTML element in the DOM where the React app will be mounted
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Ensures the element is treated as an HTMLElement
);

// Rendering the application into the root element
root.render(
  // Wrapping the App component with the Redux Provider to make the Redux store available to the entire app
  <Provider store={store}>
    <App /> {/* The main App component is rendered here */}
  </Provider>
);
