import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../Data/dummy-data";

import { imageMapping } from "../Data/imageMapping";
import MealDetail from "../Components/MealDetail";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
function MealDetailsScreen({ route }) {
  const { mealId } = route.params;
  const {
    title,
    imageUrl,
    steps,
    duration,
    affordability,
    ingredients,
    complexity,
  } = MEALS.find((meal) => meal.id === mealId);
  const imageSource = imageMapping[imageUrl];
  console.log("imageUrl", imageUrl);
  console.log("imageSource :", imageSource);
  return (
    <>
      <View style={styles.baseContainer}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text style={styles.title}>{title}</Text>

        <MealDetail
          duration={duration}
          affordability={affordability}
          complexity={complexity}
          textStyle={styles.detailText}
        />
        <Subtitle>ingredients</Subtitle>
        <List iteamsList={ingredients} />
        <Subtitle>Steps</Subtitle>

        {steps.map((step, index) => (
          <Text key={index}>
            {" "}
            {index + 1}- {step}
          </Text>
        ))}
      </View>
    </>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: { color: "white" },
});
