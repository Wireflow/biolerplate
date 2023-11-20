import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { ScrollView, View } from "react-native";
import SearchHistory from "../components/SearchHistory";
import Categories from "../components/Categories";
import { foodCategories } from "../data/categories";

const TodayScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [categories] = useState(foodCategories);

  const [searchHistory, setSearchHistory] = useState([]);
  const [search, setSearch] = useState("");

  const addToSearchHistory = (search) => {
    if (search) {
      setSearchHistory([search, ...searchHistory]);
    }
  };

  const setCurrentSearch = (currentSearch) => {
    setSearch(currentSearch);
  };

  const onSearchSubmit = () => {
    addToSearchHistory(search);
    setSearch("");
  };

  const resetCurrentSearch = () => {
    setSearch("");
  };

  const resetSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <View className="bg-white">
      <SearchBar
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setCurrentSearch={setCurrentSearch}
        onSearchSubmit={onSearchSubmit}
        search={search}
        resetCurrentSearch={resetCurrentSearch}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white flex-1 px-6 mb-[70px]">
          <SearchHistory
            resetSearchHistory={resetSearchHistory}
            searchHistory={searchHistory}
            setCurrentSearch={setCurrentSearch}
          />

          <Categories categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TodayScreen;
