import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navigation = ({ navigation }) => {
  const screens = [
    { title: "Recent", screen: "Recent", icon: "clockcircleo", index: 0 },
    { title: "Team", screen: "Team", icon: "team", index: 1 },
    { title: "Today", screen: "Today", icon: "calendar", index: 2 },
    { title: "Tasks", screen: "Tasks", icon: "pushpino", index: 3 },
    { title: "Analytics", screen: "Analytics", icon: "linechart", index: 4 },
  ];

  return (
    <View className="bg-white absolute bottom-0 w-full px-10 pt-5 flex flex-row justify-between items-center border-t-[1px] border-gray-300">
      {screens.map((screen, index) => {
        const isActive = screen.index === navigation.getState().index;

        return (
          <TouchableOpacity
            key={index}
            className={`flex flex-col items-center justify-center gap-x-2`}
            onPress={() => navigation.navigate(screen.screen)}
          >
            <AntDesign
              name={screen.icon}
              size={20}
              color={isActive ? "red" : "gray"}
            />
            <Text
              className={`mt-2 ${
                isActive
                  ? "text-red-500 font-bold text-[13.6px]"
                  : "text-gray-500"
              } transition-all duration-300`}
            >
              {screen.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navigation;
