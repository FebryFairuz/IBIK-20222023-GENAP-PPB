import { Text, SectionList } from "react-native";
import React from "react";
import { Users } from "../../const-data/ObjDummies";
import UserItem from "./UserItem";

const ExpSectionList = () => {
  const data = [{ title: "Recomended Friends", data: Users },
                { title: "Similiar Contact", data: Users }];
  return (
    <SectionList sections={data} 
                 renderItem={({item}) => <UserItem item={item} /> } 
                 renderSectionHeader={({section: {title}}) => (
                                        <Text style={{ color:"white", fontSize:16, fontWeight:"bold", backgroundColor:"black", padding:5 }}>{title}</Text>
                )} />
  );
};

export default ExpSectionList;
