import { View, Text } from 'react-native'
import React from 'react'

const ScheduleToday = () => {
  return (
    <View style={{ marginTop:10 }}>
      <Text style={{ fontWeight:"bold", fontSize:16 }}>Schedule for today</Text>
      <View style={{ marginTop:15 }}>
      <Text style={{ fontSize:16 }}>No record found</Text>
      </View>
    </View>
  )
}

export default ScheduleToday