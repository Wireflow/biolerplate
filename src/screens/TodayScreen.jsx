import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import TodayActions from "../components/TodayActions";
import TodayHeader from "../components/TodayHeader";
import TodayExpenses from "../components/TodayExpenses";
import { getCurrentDate } from "../utils/utils";
import { postDay } from "../actions/postDay";

const TodayScreen = ({ navigation }) => {
  const currentDate = getCurrentDate();

  useEffect(() => {
    const newDate = async () => {
      try {
        const response = await postDay();
      } catch (error) {
        console.error(error);
      }
    };

    newDate();
  }, [currentDate]);

  return (
    <View className="flex-1 bg-white px-6 pt-4">
      <TodayHeader />
      <TodayActions />
      <TodayExpenses />
    </View>
  );
};

export default TodayScreen;
