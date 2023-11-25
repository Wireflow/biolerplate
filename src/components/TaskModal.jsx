import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import EmployeeForm from "./EmployeeForm";
import TaskForm from "./TaskForm";

const TaskModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex flex-row mt-6 gap-x-2">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-orange-300 px-3 py-2 pb-2.5 rounded-lg flex flex-row gap-1 items-center justify-center ml-2"
      >
        <AntDesign name="plus" size={15} color={"black"} />
        <Text>Task</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TaskForm setModalVisible={setModalVisible} />
      </Modal>
    </View>
  );
};

export default TaskModal;
