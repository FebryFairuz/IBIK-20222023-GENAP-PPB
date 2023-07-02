import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyInvoice = ({ code, handleScanAgain }) => {
  const [invoice, setInvoice] = useState({
    loading: false,
    data: [],
    message: "",
  });
  const [totalBill, setTotalBill] = useState(0); 
  const [taxBill, setTaxBill] = useState(0);
  const FetchInvoice = (code) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/invoice/"+code,
      headers: {},
    };
    console.log(config.url);

    axios
      .request(config)
      .then((response) => {
        if(response.data.result){
            var totalBill = response.data.data.reduce((a, v) => (a = a + v.price), 0);
            setTotalBill(totalBill);
            var taxBill = (12 / 100) * totalBill;
            setTaxBill(taxBill);
            setInvoice({loading:false, data:response.data.data, message:""})
        }else if(response.data.message){
            setInvoice({loading:false, data:[], message:response.data.message})
        }
      })
      .catch((error) => {
        console.log(error);
        setInvoice({loading:false, data:[], message:error.message})
      });
  };

  useEffect(() => {
    FetchInvoice(code);
  }, []);
  return (
    <View style={{ width:"80%" }}>
      <View style={{ marginBottom:55 }}>
        <Text style={styles.h2}>Invoice Code</Text>
        <Text style={styles.h1}>{code}</Text>
        {invoice.message ? <Text>{invoice.message}</Text> : ""}
        {Object.values(invoice.data).length > 0 ? (
            <View style={{ borderTopWidth:1, borderColor:"purple", marginTop:15 }}>
                {invoice.data.map((v,index)=>(
                    <View key={index} style={{ marginVertical:10, flexDirection:'row', justifyContent:'space-between' }}>
                        <Text>{v.quantity}pcs {v.name} </Text>
                        <Text>IDR {v.price}</Text>
                    </View>
                ))}
                <View style={{ borderTopWidth:1, borderColor:"purple", paddingTop:10 }}>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text>Sub Total </Text>
                        <Text style={{ fontWeight:"bold" }}>IDR {totalBill}</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text>Tax(12%) </Text>
                        <Text style={{ fontWeight:"bold" }}>IDR {taxBill}</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text style={{ fontWeight:"bold" }}>Total </Text>
                        <Text style={{ fontWeight:"bold" }}>IDR {invoice.data[0].total}</Text>
                    </View>
                    <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                        <Text>Payment method</Text>
                        <Text style={{ fontWeight:"bold" }}>{invoice.data[0].payment_name}</Text>
                    </View>
                </View>
            </View> 
        ) : "" }
      </View>
      <Button title="Scan Again" onPress={handleScanAgain} />
    </View>
  );
};

export default MyInvoice;

const styles = StyleSheet.create({
    h2:{
        fontSize:25,
    },
    h1:{
        fontSize:30,
        fontWeight:"bold"
    }
});
