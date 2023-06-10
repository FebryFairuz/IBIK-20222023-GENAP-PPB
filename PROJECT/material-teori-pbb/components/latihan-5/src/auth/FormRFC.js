import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const FormRFC = () => {
    const [title, setTitle] = useState("IBI Kesatuan");
    const [subTitle, setSubTitle] = useState("Bogor Indonesia");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Image
          source={require("../../../../assets/icons/icon-ibik.png")}
          style={styles.logo}
        />
        <View
          style={{
            marginLeft: 10,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={styles.logo_text}>{title}</Text>
          <Text style={{ ...styles.logo_text, fontSize: 12, fontWeight: 300 }}>
            {subTitle}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 15 }}>
        <View>
          <Text style={styles.form_heading}>Change Logo</Text>
        </View>
        <View>
          <Text style={styles.form_label}>Title</Text>
          <TextInput
            placeholder="Enter title here"
            style={styles.form_input}
            defaultValue={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View>
          <Text style={styles.form_label}>Sub Title</Text>
          <TextInput
            placeholder="Enter sub title here"
            style={styles.form_input}
            defaultValue={subTitle}
            onChangeText={(text) => setSubTitle(text)}
          />
        </View>

        <TouchableOpacity>
            <View style={styles.form_btn}>
                <Text style={{ color:"white", textAlign:"center", fontSize:16 }}>Sign in</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormRFC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 50,
    height: 50,
  },
  logo_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
  },
  form_heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  form_label: {
    fontSize: 14,
    marginBottom: 5,
  },
  form_input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginBottom: 15,
  },
  form_btn:{
    backgroundColor:"purple",
    padding:10,
    paddingVertical:15,
    borderRadius:5
  }
});
