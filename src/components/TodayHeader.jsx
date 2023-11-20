import React from "react";
import { Text, View } from "react-native";
import { getToday } from "../utils/utils";

const TodayHeader = () => {
  const currentDate = getToday();

  return (
    <>
      <Text className="text-3xl font-medium mb-1">Today</Text>
      <View className="flex flex-row items-center gap-1">
        <View className="bg-red-900 rounded-3xl px-2 py-0.5">
          <Text className="text-base text-white">{currentDate.weekday}</Text>
        </View>
        <View className="bg-black rounded-3xl px-2 py-0.5">
          <Text className="text-base text-white">{currentDate.date}</Text>
        </View>
      </View>
    </>
  );
};

export default TodayHeader;
