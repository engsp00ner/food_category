import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../Data/dummy-data";

import { imageMapping } from "../Data/imageMapping";
import MealDetail from "../Components/MealDetail";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";
function MealDetailsScreen({ route, navigation }) {
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
  function HandleHeaderButtonPressed() {
    console.log("mealId :", mealId);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={HandleHeaderButtonPressed}
          />
        );
      },
    });
  }, [navigation]);
  return (
    <>
      <ScrollView style={styles.baseContainer}>
        {imageSource && (
          <Image
            source={imageSource}
            style={styles.image}
          />
        )}
        <Text style={styles.title}>{title}</Text>

        <MealDetail
          duration={duration}
          affordability={affordability}
          complexity={complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>ingredients</Subtitle>
            <List iteamsList={ingredients} />
            <Subtitle>Steps</Subtitle>
            <List iteamsList={steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  baseContainer: {
    marginBottom: 32,
  },
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
  listOuterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
