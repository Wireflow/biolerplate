import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Category = ({ title }) => {
  return (
    <TouchableOpacity>
      <View className="bg-green-500 w-[100px] h-[100px] rounded-lg" />
      <Text className="text-center mt-1 text-base font-light">{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
