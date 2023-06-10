import { FlatList } from 'react-native'
import React from 'react'
import { Users } from '../../const-data/ObjDummies'
import UserItem from './UserItem'

const ExpFlatList = () => {
  return (
    <FlatList data={Users} renderItem={({item}) => <UserItem item={item} />} />
  )
}

export default ExpFlatList