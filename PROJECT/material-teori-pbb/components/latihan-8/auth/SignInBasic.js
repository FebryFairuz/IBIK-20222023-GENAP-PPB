import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignInBasic = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState("");
  const handlerValidMail = (value)=>{
    if(value){ //if value is not null
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(value)) {
        setValidEmail("Invalid Email Address");
      } else {
        setValidEmail("");
      }
    }else{
      setValidEmail("This field is required");
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
          onChangeText={(text) => handlerValidMail(text)}
        />
        <Text style={{ color:"red" }}>{validEmail}</Text>
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
            onChangeText={(text)=>setPassword(text)}
          />
          <Pressable onPress={()=>handlerOpenPassword()}>
            <FontAwesome5 name={(isOpenPass) ? "eye":"eye-slash"} size={25} color="purple" />
          </Pressable>
        </View>
        
      </View>

      <TouchableOpacity
        style={styles.btn_signin}
        onPress={() => handlerSignIn()}
      >
        <Text style={styles.btn_signin_text}>
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInBasic;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  frm_row: {
    marginBottom: 15,
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
  btn_signin_text:{ color: "white", textAlign: "center", fontSize: 16 }
});
