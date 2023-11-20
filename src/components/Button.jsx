import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({
  children,
  onPress,
  variant = "default",
  disabled = false,
}) => {
  const variants = {
    default: {
      button: `bg-blue-600 px-10 py-4 rounded-lg ml-4 ${
        disabled && "bg-blue-300"
      }`,
      text: "text-white",
    },
    danger: {
      button: `bg-red-500 px-10 py-4 rounded-lg ml-4 ${
        disabled && "bg-red-300"
      }`,
      text: "text-white",
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={variants[variant].button}
      disabled={disabled}
    >
      <Text className={variants[variant].text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
