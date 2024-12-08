import { configureStore } from "@reduxjs/toolkit"; 
import itemReducer from "../features/itemSlice"; 


// Configuring the Redux store

export const store = configureStore({
  reducer: {
    item: itemReducer,  // Registering the itemReducer under the key 'item' in the store
  },
});

// Inferring the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;
// RootState represents the structure of the entire state object in the Redux store

// Inferring the AppDispatch type from the store's dispatch function
export type AppDispatch = typeof store.dispatch;
// AppDispatch ensures type safety when dispatching actions in a TypeScript project

