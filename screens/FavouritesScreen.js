import { useContext } from "react";
import MealsList from "../Components/MealsList/MealsList";
import { favouritesContext } from "../STORE/Context/FavouritesContext";
import { MEALS } from "../Data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouritesScreen() {
  const favouriteMealsCtx = useContext(favouritesContext);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx.ids.includes(meal.id)
  );
  if (favouriteMeals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> No Favourite meals added </Text>
      </View>
    );
  return <MealsList items={favouriteMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
