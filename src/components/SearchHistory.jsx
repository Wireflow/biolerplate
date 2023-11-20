import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SearchHistory = ({
  resetSearchHistory,
  searchHistory,
  setCurrentSearch,
}) => {
  return (
    <View className="mt-3">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-lg font-medium">Your browsing history</Text>
        <TouchableOpacity
          onPress={resetSearchHistory}
          className="bg-gray-200 py-1 px-2 rounded-full"
        >
          <Text>Clear History</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-2">
        <ScrollView
          className="gap-x-2 "
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {!searchHistory.length && (
            <Text className="text-sm py-[7px] text-gray-400">
              No Search History
            </Text>
          )}
          {searchHistory?.map((search, index) => (
            <TouchableOpacity
              className="bg-gray-200 px-3 py-2 rounded-full"
              onPress={() => setCurrentSearch(search)}
              key={index}
            >
              <Text>{search}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchHistory;
