import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageMapping } from "../Data/imageMapping";
import MealDetail from "./MealDetail";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  mealId,
}) {
  const navigation = useNavigation();
  console.log("meal item title:", title);
  console.log("Imageurl", imageUrl);

  const imageSource = imageMapping[imageUrl];

  // Handle navigation on press
  function handleOnMealItemPress() {
    navigation.navigate("MealDetailsScreen", {
      mealId: mealId, // Passing the mealId to the MealDetails screen
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={handleOnMealItemPress}
      >
        <View style={styles.innerContainer}>
          <View>
            {imageSource && <Image source={imageSource} style={styles.image} />}
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: "hidden", // Required for ripple effect on Android

    // Shadow for Android and iOS
    backgroundColor: "white",
    elevation: 4, // Android shadow
    shadowColor: "black", // iOS shadow
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.25 : 0.5, // Optional: opacity for iOS
  },
});
