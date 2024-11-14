import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTiles from "../Components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function RenderCategoryItem({ item }) {
    function handleOnPress() {
      navigation.navigate("MealsOverView", {
        categoryId: item.id,
      });
      console.log("Item ID :", item.id);
    }

    return (
      <CategoryGridTiles
        title={item.title}
        color={item.color}
        onPress={handleOnPress}
      />
    );
  }
  const { width, height } = useWindowDimensions();
  let rawItemsCount = width < 600 ? 2 : 4;
  console.log("width:", width);
  console.log("heigt:", height);
  // Use rawItemsCount as part of the key to force re-render on numColumns change
  return (
    <View style={styles.container}>
      <Text>List of all categories</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategoryItem}
        numColumns={rawItemsCount}
        key={rawItemsCount.toString()} // Change key to force re-render
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
