import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Image , ScrollView} from "react-native";
import axios from "axios";

const Lunch = () => {
  const [products, setProduct] = useState([]);

  const FetchProduct = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/product",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    FetchProduct();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
      {Object.values(products).length > 0 ? (
        products.map((v, index) =>(
          <View key={index} style={styles.CardProduct}>
            <Image source={{
              uri: "http://localhost:8000/assets/media/uploads/products/" + v.images
            }} style={{  width: "100%", height: 256, }} />

            <View style={styles.container}>
                <View style={{flexDirection:"column"}}>
                  <Text style={styles.name}>
                      {index + 1}. {v.name}
                  </Text>
                  <Text style={styles.desc}>
                      {v.description}
                  </Text>
                </View>
                
              <Text style={styles.price}>
                  Rp. {v.price}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text>No record found</Text>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    CardProduct:{
        padding:10,
        flexDirection:"column",
        borderWidth:1,
        marginBottom:15,
        marginHorizontal:10,
    },
    name:{
        fontSize:20,
    },
    desc :{
        fontSize:15,
        color:'grey'
    },
    price:{
      fontSize:20,
      fontWeight:"bold",
      padding: 10,
      color:"green"
    },

    container: {
        flexDirection:"row",
        justifyContent:"space-between"
    }

});

export default Lunch;
