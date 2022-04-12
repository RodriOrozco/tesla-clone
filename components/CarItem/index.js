import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";
import { View, Text, ImageBackground } from "react-native";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelS.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420 </Text>
      </View>
      <StyledButton
        type={"primary"}
        content={"Custom order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />
      <StyledButton
        type={"secondary"}
        content={"Existing inventory"}
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
