import React from "react";
import { Text, View } from "react-native";

const TeamHeader = () => {
  return (
    <>
      <Text className="text-3xl font-medium mb-1">Employees</Text>
      <Text className="text-base">
        View all your employees and their pay for the week minus all advances.
      </Text>
    </>
  );
};

export default TeamHeader;
