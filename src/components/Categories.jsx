import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Category from "./Category";

const Categories = ({ categories }) => {
  return (
    <View className="mt-8 flex-1 mb-14">
      <Text className="text-lg font-medium mb-4">Browse by category</Text>
      <View className="flex flex-row flex-wrap gap-6 justify-between">
        {categories?.map((category, index) => (
          <TouchableOpacity key={index}>
            <View className="bg-green-500 w-[100px] h-[100px] rounded-lg" />
            <Text className="text-center mt-1 text-base font-light">
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Categories;
