import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

function CategoryGridTiles({ title, color, onPress }) {
  return (
    <>
      <View style={styles.gridItem}>
        {/* when we press on the button we need some visual feed back so :
         for android we use android_ripple={{ color: "#ccc" }}
         but for iOS we use  */}
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}
export default CategoryGridTiles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    //shadow for android
    elevation: 4,
    //shadow for iOS
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    // if we use android so the over flow off will only apply the
    //effects inside the view but it will cancel the shadow from the iOS
    //so we
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  category: {
    padding: 15,
    borderWidth: 2,
    borderBlockColor: "brown",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
