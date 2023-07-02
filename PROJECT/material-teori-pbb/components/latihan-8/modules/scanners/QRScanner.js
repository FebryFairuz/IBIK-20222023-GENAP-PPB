import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import MyInvoice from "../orders/MyInvoice";

export default function QRScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const objdata = {type:"invoice",body:"TNX065009"}
  const [scannedData, setScannedData] = useState(objdata);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // console.log("Type",type);
    // console.log("Data",data);
    // setScanned(true);
    // setScannedData(JSON.parse(data));
  };

  const handleScanAgain = () => {
    // setScanned(false);
    // setScannedData("");
  };

  // if (hasPermission === null) {
  //   return <Text>Requesting camera permission...</Text>;
  // }

  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <View style={styles.container}>
      {scanned ? (
        (scannedData.type === "invoice") ? <MyInvoice code={scannedData.body} handleScanAgain={handleScanAgain} /> : (
          <View>
            <Text style={styles.scannedText}>QR Code doesn't recognition</Text>
            <Button title="Scan Again" onPress={handleScanAgain} />
          </View>
        )
      ) : (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scannedText: {
    fontSize: 20,
    marginBottom: 10,
  },
  scannedDataText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
