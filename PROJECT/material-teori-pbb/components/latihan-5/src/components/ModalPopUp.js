import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

const states = {
  setState: null,
  changeState(data) {
    if (!this.setState) return;
    this.setState((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
  },
};

const handleClose = () => {
  states.changeState({
    open: false,
  });
};

const ModalPopUp = () => {
  const [data, setData] = useState({
    open: false,
    header: "ini header default",
    message: "ini message default",
    size: "md",
    footer: "",
    onClose: handleClose,
  });

  states.setState = setData;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={data.open}
        onRequestClose={data.onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{data.message}</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={data.onClose}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "purple",
    borderRadius:10,
    padding: 10,
    paddingHorizontal:20,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

const openModal = ({
  open = true,
  message,
  header,
  size,
  footer,
  onClose = () => {},
}) => {
  states.changeState({
    message,
    header,
    size,
    open,
    footer,
    onClose: () => {
      onClose();
      handleClose();
    },
  });
};

export default ModalPopUp;
export { openModal };
