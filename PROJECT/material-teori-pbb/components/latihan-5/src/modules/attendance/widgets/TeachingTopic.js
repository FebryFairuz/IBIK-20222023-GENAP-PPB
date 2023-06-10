import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import colors from "../../../const/ColorsData";
  
  const TeachingTopicArr = [
    { id: 1, title: "React Native Intro", status: "P" },
    { id: 2, title: "React Fundamental", status: "P" },
    { id: 3, title: "React Container", status: "P" },
    { id: 4, title: "React Typograpy & Image", status: "P" },
    { id: 5, title: "React Navigation Bar", status: "A" },
    { id: 6, title: "UTS", status: "P" },
    { id: 7, title: "TA Section 01", status: "P" },
    { id: 8, title: "React Listing", status: "P" },
  ];
  
  const RenderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => alert("Okay")}
      >
        <View style={((item.status === 'A') ? {...styles.itemContainer,backgroundColor:'red'} : styles.itemContainer )}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.items}>
                <Text>{item.id}</Text>
            </View>
            <View style={{...styles.items, flex:3}}>
              <Text>{item.title}</Text>
            </View>
            <View style={styles.items}>
              <Text
                style={{
                  color: "purple",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const TeachingTopicList = () => {
    return (
      <View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
              <Text style={{fontWeight:'bold',flex:1}}>Session</Text>
              <Text style={{fontWeight:'bold',flex:2}}>Teaching Topic</Text>
              <Text style={{fontWeight:'bold',flex:1}}>Absent</Text>
          </View>
        <FlatList
          data={TeachingTopicArr}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    itemContainer: {
      borderWidth: 1,
      borderColor: colors.grey,
      marginVertical: 5,
      padding: 15,
      backgroundColor: colors.white,
      borderRadius: 5,
    },
    items: {
      justifyContent: "center",
      flex: 1,
    },
    itemFooter: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
    },
    itemText: { color: colors.purple, fontSize: 14 },
  });
  
  export default TeachingTopicList;