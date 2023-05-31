import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area";

const RestaurantsScreen = () => {
  const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[2]};
  `;

  const RestaurantsListContainer = styled(View)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
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
        {/* <RestaurantsListContainer>
          <RestaurantInfo />
        </RestaurantsListContainer> */}
        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
            { name: 15 },
          ]}
          renderItem={() => <RestaurantInfoCard />}
          contentContainerStyle={{ padding: 16 }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
