import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const Button = ({
  children,
  onPress,
  variant = "default",
  style,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  const variants = {
    default: {
      button: `bg-blue-600 px-10 py-4 rounded-lg ml-4 ${
        disabled ? "bg-blue-300" : ""
      }`,
      text: "text-white text-center",
    },
    danger: {
      button: `bg-red-500 px-10 py-4 rounded-lg ml-4 ${
        disabled ? "bg-red-300" : ""
      }`,
      text: "text-white text-center",
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[tw`${variants[variant].button}`, tw`${buttonStyle}`]}
      disabled={disabled}
    >
      <Text style={[tw`${variants[variant].text}`, tw`${textStyle}`]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
