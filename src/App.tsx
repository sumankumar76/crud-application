import React from "react";
import ItemList from "./components/ItemList";

// Defining the App functional component using TypeScript's React.FC type
const App: React.FC = () => {
  return (
    // Main container for the application
    <div>
      <h1>CRUD APP</h1>
      {/* Rendering the ItemList component */}
      <ItemList />
    </div>
  );
};

export default App;
