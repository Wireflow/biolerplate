import React from "react";
import { ScrollView, Text, View } from "react-native";
import TeamHeader from "../components/TeamHeader";
import Employees from "../components/Employees";
import EmployeeModal from "../components/EmployeeModal";

const TeamScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-6 pt-4">
      <TeamHeader />
      <EmployeeModal />
      <Employees />
    </View>
  );
};

export default TeamScreen;
