import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { openModal } from "../components/ModalPopUp";
import ModalView from "../components/ModalPopUp";

const SignIn = ({navigation}) => {
  const [email, setMail] = useState("212310016@student.ibik.ac.id");
  const [isValidMail, setValidMail] = useState("");
  const [password, setPassword] = useState("BESTstudent_2023");
  const [isValidPass, setValidPass] = useState("");
  const isValidEmail = (val) => {
    if (val.length > 3) {
      let regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(val)) {
        setValidMail("Invalid Email Address");
      } else {
        setValidMail("");
      }
    }
    setMail(val);
  };

  const isValidPassword = (value) => {
    if(value.length > 3){
        setValidPass("");
        setPassword(value);
    }else{
        setValidPass("This field is required");
    }
  }
  const [isOpenPass, setOpenPass] = useState(true);
  const handlerOpenPassword = () =>{
    switch (!isOpenPass) {
      case true:
        setOpenPass(true);
        break;
      default:
        setOpenPass(false);
        break;
    }
  }

  const handlerSignIn = () =>{
    if(email && password){
        if(email === "212310016@student.ibik.ac.id" && password === "BESTstudent_2023"){
            console.log("ok");
            navigation.navigate("AppNavbarBottom");
        }else{
            openModal({message:"Email/Password is not match"});
        }
    }else{
        openModal({message:"Please fill up the form with correctly"});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Email </Text>
        <TextInput
          placeholder="npm@student.ibik.ac.id"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.text_input}
          defaultValue={email}
          onChangeText={(text) => isValidEmail(text)}
        />
        <Text style={{ color:"red", fontSize:11 }}>{isValidMail}</Text>
      </View>

      <View style={styles.frm_row}>
        <Text style={styles.text_label}>Password</Text>
        <View
          style={{
            ...styles.text_input,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            secureTextEntry={isOpenPass}
            placeholder="Enter your password"
            autoCorrect={false}
            style={{ ...styles.text_input, borderWidth:0, padding:0, width:"90%" }}
            defaultValue={password}
            onChangeText={(text)=>isValidPassword(text)}
          />
          <Pressable onPress={()=>handlerOpenPassword()}>
            <FontAwesome5 name={(isOpenPass) ? "eye":"eye-slash"} size={25} color="purple" />
          </Pressable>
        </View>
        <Text style={{ color:"red", fontSize:11 }}>{isValidPass}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn_signin}
        onPress={() => handlerSignIn()}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <ModalView />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  frm_row: {
    marginBottom: 10,
  },
  text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },
  text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "purple",
  },
  btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop:15
  },
});
