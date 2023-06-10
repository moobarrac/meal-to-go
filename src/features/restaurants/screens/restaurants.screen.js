import React, { useContext, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { ActivityIndicator, Searchbar, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[2]};
  `;
  const RestaurantsList = styled(FlatList)`
    padding: ${(props) => props.theme.space[3]};
  `;
  const Loading = styled(ActivityIndicator)`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const onChangeSearch = (query) => setSearchQuery(query);

  if (isLoading) {
    return <Loading animating={true} color="blue" size={50} />;
  }
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
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
