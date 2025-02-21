import { createContext, useState } from "react";

//this is the context that will be used in the whole app to manage the favourites
export const favouritesContext = createContext({
  //list all stared IDS in this array
  ids: [],
  //the functions that will be used to add and remove the favourites
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function favouritesContextProvider({ children }) {
  //this state is going to be used to collect all the favourite IDs in single list
  const [favouriteMealIds, setFavouriteMealIds] =
    useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentFavIds) => [
      ...currentFavIds,
      id,
    ]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter(
        (mealId) => mealId !== id
      )
    );
  }
  //this is how we pass the func and parameters to the provider

  const value = {
    ids: favouriteMealIds,
    //this is how we use the context value
    // the name of the function to be used in upper components : the name of the required function in the context
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <>
      <favouritesContext.Provider value={value}>
        {children}
      </favouritesContext.Provider>
    </>
  );
}

export default favouritesContextProvider;
