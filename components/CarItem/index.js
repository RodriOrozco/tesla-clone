import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";
import { View, Text, ImageBackground } from "react-native";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer} key={name}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Elon Musk Rules!!");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Sorry, it's an example too. Scroll up!");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
