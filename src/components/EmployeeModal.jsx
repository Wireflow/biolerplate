import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import EmployeeForm from "./EmployeeForm";

const EmployeeModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex flex-row mt-6 gap-x-2">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-emerald-300 px-3 py-2 pb-2.5 rounded-lg flex flex-row gap-1 items-center justify-center ml-2"
      >
        <AntDesign name="plus" size={15} color={"black"} />
        <Text>Employee</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <EmployeeForm setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default EmployeeModal;
