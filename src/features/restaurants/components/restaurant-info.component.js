import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "This restaurant",
    icon,
    address = "@4, Abari Street, Lagos",
    rating = 4,
    isOpenNow = true,
    photos = ["https://picsum.photos/700"],
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <View>
      <Card style={styles.card} elevation={4}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    backgroundColor: "gray",
  },
  content: {
    marginVertical: 5,
  },
});

export default RestaurantInfo;
