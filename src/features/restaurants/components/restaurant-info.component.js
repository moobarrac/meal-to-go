import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantInfo = ({ restaurant = {} }) => {
  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.secondary};
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary};
  `;

  const Title = styled(Text)`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
  `;

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
      <RestaurantCard elevation={4}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantInfo;
