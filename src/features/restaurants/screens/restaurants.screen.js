import React, { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components";

const RestaurantsScreen = () => {
  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  `;

  const SearchContainer = styled(View)`
    padding: 10px;
  `;

  const RestaurantsListContainer = styled(View)`
    background-color: blue;
    flex: 1;
    padding: 20px;
  `;

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar
            placeholder="Search restaurants"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        <RestaurantsListContainer>
          <RestaurantInfo />
        </RestaurantsListContainer>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
