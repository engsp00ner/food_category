import { useLayoutEffect } from "react";
import MealItem from "../Components/MealItem";
import { MEALS, CATEGORIES } from "../Data/dummy-data";
import { StyleSheet, FlatList, View } from "react-native";

//as this is registed as a screen so it gets
//the route and navigation props automatically
//so another methode of setting options to
function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  console.log("categoryId: ", categoryId);
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;
    navigation.setOptions({ title: categoryTitle });
    console.log("categoryTitle :", categoryTitle);
    console.log("categoryTitle :", categoryTitle);
  }, [categoryId, navigation]);

  function renderMealItem({ item }) {
    // Ensure item is destructured properly

    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        mealId={item.id}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals} // Ensure `displayedMeals` is passed directly as an array
        keyExtractor={(item) => item.id} // Make sure `id` exists in `MEALS`
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
