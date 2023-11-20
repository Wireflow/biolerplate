import React from "react";
import { ScrollView, View } from "react-native";
import TodayActions from "../components/TodayActions";
import TodayHeader from "../components/TodayHeader";
import TodayExpenses from "../components/TodayExpenses";

const TodayScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-6 pt-4">
      <TodayHeader />
      <TodayActions />
      <TodayExpenses />
    </View>
  );
};

export default TodayScreen;
