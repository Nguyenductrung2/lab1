import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7ce0f9",
  },
  boxCustom: {
    backgroundColor: "#yourColorHere",
  },
});

const Square = ({ text, bgColor = styles.box.backgroundColor }) => (
  <View style={[styles.box, bgColor ]}>
    <Text>{text}</Text>
  </View>
);

export default function Exercise5() {  
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c" />
    </View>
  );
}

