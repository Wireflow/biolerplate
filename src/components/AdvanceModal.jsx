import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import ExpenseForm from "./ExpenseForm";
import AdvanceForm from "./AdvanceForm";

const AdvanceModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-red-200 px-3 py-2 pb-2.5 rounded-lg flex flex-row gap-1 items-center justify-center ml-2"
      >
        <AntDesign name="plus" size={15} color={"black"} />
        <Text>Advance</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AdvanceForm setModalVisible={setModalVisible} />
      </Modal>
    </>
  );
};

export default AdvanceModal;
