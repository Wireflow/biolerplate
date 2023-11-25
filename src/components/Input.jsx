import React from "react";
import { Text, TextInput, View } from "react-native";

const Input = ({
  handleChange,
  name,
  label,
  error,
  style,
  multiline = false,
  numberOfLines = 1,
  keyboardType,
  placeholder,
}) => {
  return (
    <View className="py-3">
      <Text className="text-base mb-1">{label}</Text>
      <View>
        <TextInput
          keyboardType={keyboardType}
          onChangeText={(value) => handleChange(name, value)}
          style={style}
          className={`border-2 rounded-md px-2 flex text-base pb-2  ${
            multiline ? "h-28" : "h-12"
          } ${error ? "border-red-500" : "border-gray-300 "}`}
          placeholder={placeholder}
          placeholderTextColor={"lightgray"}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />

        {error && <Text className="text-red-500 mt-1">{error}</Text>}
      </View>
    </View>
  );
};

export default Input;
