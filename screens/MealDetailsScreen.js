import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../Data/dummy-data";

import { imageMapping } from "../Data/imageMapping";
import MealDetail from "../Components/MealDetail";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../STORE/Redux/Favourites";
function MealDetailsScreen({ route, navigation }) {
  //we call the favourite redux store
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();
  //we can get the meal id from the navigator params
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

  //check if the meal was favourite
  const mealIsFavourite = favouriteMealIds.includes(mealId);
  const imageSource = imageMapping[imageUrl];
  console.log("imageUrl", imageUrl);
  console.log("imageSource :", imageSource);
  function ToggleFavouriteStatusHandler() {
    mealIsFavourite
      ? dispatch(removeFavourite({ id: mealId }))
      : dispatch(addFavourite({ id: mealId }));
    console.log("mealIsFavourite:", mealIsFavourite);
    console.log("mealId :", mealId);
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={ToggleFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, ToggleFavouriteStatusHandler]);
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
