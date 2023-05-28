import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.secondary};
  `;

  const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.secondary};
  `;

  const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;

  const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
  `;

  const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const Section = styled(View)`
    justify-content: space-between;
    flex-direction: row;
  `;
  const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
  `;

  return (
    <View>
      <RestaurantCard elevation={4}>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <View>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </View>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};

export default RestaurantInfo;
