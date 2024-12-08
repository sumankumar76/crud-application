import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of an Item
interface Item {
  id: number; 
  name: string;
}

// Define the shape of the state managed by this slice
interface ItemState {
  items: Item[]; 
}

// Initialize the state with an empty items array
const initialState: ItemState = {
  items: [],
};

// Create a slice of the Redux store named "item"
const itemSlice = createSlice({
  name: "item", 
  initialState, 
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload); 
    },

    //Update an existing item in the state.
    updateItem(state, action: PayloadAction<Item>) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
         // If item is found, replace it with the updated item
        state.items[index] = action.payload;
      }
    },
    //Delete an item from the state.
    deleteItem(state, action: PayloadAction<number>) {
      // Filter out the item with the matching ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
