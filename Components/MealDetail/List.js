import { StyleSheet, Text } from "react-native";

function List({ iteamsList }) {
  return (
    <>
      {iteamsList.map((item, index) => (
        <Text key={index}>
          {" "}
          {index + 1}- {item}
        </Text>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({});
