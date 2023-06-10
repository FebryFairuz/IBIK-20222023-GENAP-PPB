import { ScrollView } from 'react-native'
import React from 'react'
import { Users } from '../../const-data/ObjDummies'
import UserItem from './UserItem'

const ExpScrollView = () => {
  return (
    <ScrollView >
      {Users.map((v,index)=>(
        <UserItem item={v} key={index} />
      ))}
    </ScrollView>
  )
}

export default ExpScrollView



