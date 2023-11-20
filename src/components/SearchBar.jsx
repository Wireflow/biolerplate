import React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AvoidKeyboard from "./AvoidKeyboard";

const SearchBar = ({
  setIsSearching,
  setCurrentSearch,
  isSearching,
  onSearchSubmit,
  search,
  resetCurrentSearch,
}) => {
  return (
    <AvoidKeyboard>
      <View className="relative mx-6 pb-3 mt-2">
        <TextInput
          onChangeText={setCurrentSearch}
          placeholder="Search item..."
          className="bg-gray-200 py-3 px-3 pl-12 rounded-full border-2 border-transparent focus:border-black"
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          returnKeyType="search"
          value={search}
          onSubmitEditing={onSearchSubmit}
        />
        <View className="absolute left-4 top-[11px]">
          <AntDesign name="search1" size={20} color="black" />
        </View>
        {isSearching && !search.length ? (
          <TouchableOpacity
            onPress={() => {
              resetCurrentSearch();
              Keyboard.dismiss();
            }}
            className="absolute right-4 top-[11px]"
          >
            <View>
              <AntDesign name="closecircle" size={20} color="black" />
            </View>
          </TouchableOpacity>
        ) : null}

        {isSearching && search.length ? (
          <TouchableOpacity
            onPress={resetCurrentSearch}
            className="absolute right-4 top-[13px]"
          >
            <Text>Clear</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </AvoidKeyboard>
  );
};

export default SearchBar;
