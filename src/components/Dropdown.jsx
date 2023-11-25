import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Dropdown = ({ handleChange, name, options, label, error }) => {
  return (
    <View className="py-2">
      <Text className="text-base mb-1">{label}</Text>
      <RNPickerSelect
        style={{
          inputIOS: {
            color: "black",
            paddingVertical: 13,
            paddingHorizontal: 8,
            fontSize: 16,
            borderWidth: 2,
            borderColor: error ? "red" : "lightgray",
            borderRadius: 6,
          },
          inputAndroid: {
            color: "black",
            paddingVertical: 12,
            paddingHorizontal: 8,
            fontSize: 16,
            borderWidth: 2,
            borderColor: "lightgray",
            borderRadius: 6,
          },
        }}
        onValueChange={(value) => handleChange(name, value)}
        items={options}
      />
      {error && <Text className="text-red-500 mt-1">{error}</Text>}
    </View>
  );
};

export default Dropdown;
