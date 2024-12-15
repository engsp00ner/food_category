import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./Favourites";
export const store = configureStore({
  reducer: {
    favouriteMeals: favouritesReducer,
  },
});
