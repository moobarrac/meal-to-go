import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled(View)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
