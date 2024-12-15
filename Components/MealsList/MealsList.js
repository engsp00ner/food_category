import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";
function MealsList({ items }) {
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
        data={items} // Ensure `displayedMeals` is passed directly as an array
        keyExtractor={(item) => item.id} // Make sure `id` exists in `MEALS`
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

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
