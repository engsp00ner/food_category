import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }) {
  return (
    <>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
    </>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
