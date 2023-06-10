import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { MyFeeds } from "../../const-data/ObjDummies";

const FeedAccount = ({ item }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding:15 }}>
      <View>
        <Image style={styles.feed_ava} source={item.avatar} />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.feed_username}>{item.name}</Text>
      </View>
    </View>
  );
};

const FeedImgPost = ({ item }) => {
  return (
    <View>
      
      <Image
        style={styles.feed_img}
        source={item.images}
      />
      <Text style={{ color:"white", position:"absolute" }}>Love</Text>
    </View>
  );
};

const FeedActions = () =>{
    return(
        <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:15 }}>
            <View style={{ flexDirection:"row" }}>
                <View>
                    <FontAwesome5 name={"heart"} size={25} color="white" />
                </View>
                <View style={{ marginHorizontal:15 }}>
                    <FontAwesome5 name={"comment"} size={25} color="white" />
                </View>
                <View>
                    <FontAwesome5 name={"paper-plane"} size={25} color="white" />
                </View>
            </View>
            <View>
                <FontAwesome5 name={"bookmark"} size={25} color="white" />
            </View>
        </View>
    )
}

const FeedDescription = ({item}) =>{
    return (
        <View style={{ padding:15, paddingTop:0,  }}>
            <Text>
                <Text style={{ ...styles.feed_username, fontWeight:"bold"}}>{item.name} </Text>
                <Text style={{ color:"white" }}>{item.description}</Text>
            </Text>
        </View>
    )
}

const FeedItem = ({ item }) => {
  return (
    <View style={styles.feeds_container}>
      <FeedAccount item={item} />
      <FeedImgPost item={item} />
      <FeedActions />
      <FeedDescription item={item} />
    </View>
  );
};

const Feeds = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "grey",
        paddingTop: 15,
      }}
    >
      {MyFeeds.map((v, index) => (
        <FeedItem item={v} key={index} />
      ))}
    </View>
  );
};

export default Feeds;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 6);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  feeds_container: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    marginBottom: 20,
  },
  feed_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8ff",
    marginBottom: 2,
  },
  feed_username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  feed_img: {
    width: imageWidth,
    height: imageHeight,
  },
});
