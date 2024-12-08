import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { deleteItem } from "../features/itemSlice";
import ItemForm from "./ItemForm";

const ItemList: React.FC = () => {
  // Select the list of items from the Redux store using the selector
  const items = useSelector((state: RootState) => state.item.items);
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions

  // Local state to manage the currently selected item for editing
  const [currentItem, setCurrentItem] = useState<{
    id: number;
    name: string;
  } | null>(null);

  return (
    <div>
      <h2>Items</h2>
      {/* Render the ItemForm and pass the current item for editing */}
      <ItemForm currentItem={currentItem} onSave={() => setCurrentItem(null)} />
      <ul>
        {/* Map over the items and render each one in the list */}
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => setCurrentItem(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
