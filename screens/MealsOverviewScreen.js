import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealsList from "../Components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
