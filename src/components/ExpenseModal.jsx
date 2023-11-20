import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import ExpenseForm from "./ExpenseForm";

const ExpenseModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-blue-200 px-3 py-2 pb-2.5 rounded-lg flex flex-row gap-1 items-center justify-center ml-2"
      >
        <AntDesign name="plus" size={15} color={"black"} />
        <Text>Expense</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ExpenseForm setModalVisible={setModalVisible} />
      </Modal>
    </>
  );
};

export default ExpenseModal;
