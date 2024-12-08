import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../features/itemSlice";

// Defining the type for Props that this component will accept
interface Props {
  currentItem?: { id: number; name: string } | null;
  onSave: () => void;
}

// Functional component to manage adding and editing items
const ItemForm: React.FC<Props> = ({ currentItem, onSave }) => {
  // useState hook to store the current item's name (or empty string if no item is passed)
  const [name, setName] = useState(currentItem?.name || "");
  const dispatch = useDispatch(); // Initialize Redux dispatch hook to dispatch actions to the Redux store

  // Handler function for form submission
  const handleSubmit = () => {
    // If currentItem exists, dispatch the updateItem action with the updated data
    if (currentItem) {
      dispatch(updateItem({ ...currentItem, name }));
    } else {
      // Otherwise, create a new item by dispatching the addItem action with a new id and name
      dispatch(addItem({ id: Date.now(), name }));
    }
    setName("");
    onSave();
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update the state when the input changes
        placeholder="Item name" // Placeholder text for the input field
      />

      <button onClick={handleSubmit}>
        {currentItem ? "Update Item" : "Add Item"}{" "}
        {/* Displays "Update Item" if editing, "Add Item" if adding */}
      </button>
    </div>
  );
};

export default ItemForm;
