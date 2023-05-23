import React from "react";
import { Text, View } from "react-native";

const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "This restaurant",
    icon,
    address = "@4, Abari Street, Lagos",
    rating = 4,
    isOpenNow = true,
    photos = ["../../../../assets/restaurant.jpg"],
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <View>
      <Text>Restaurant Info</Text>
    </View>
  );
};

export default RestaurantInfo;
