import { StyleSheet, Text, View } from "react-native";

function List({ iteamsList }) {
  return (
    <>
      {iteamsList.map((item, index) => (
        <View
          style={styles.listItem}
          key={index}>
          <Text
            key={index}
            style={styles.itemText}>
            {" "}
            {item}
          </Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
