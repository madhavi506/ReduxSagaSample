import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Text, View, ActivityIndicator, FlatList } from 'react-native';

function WeatherList(props) {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.data)

  useEffect(()=>{
    dispatch({type: 'FETCH_WEATHER_DATA'})
  },[])
  return (
    (!data.loading ?
      <View style={{ flex: 1, marginTop: 50 }}>
        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#0000ff' }}>Wether Data</Text>
          <Text>temperature: {data.weatherData.temperature}</Text>
          <Text>Wind {data.weatherData.wind}</Text>
          <Text>description {data.weatherData.description}</Text>
        </View>
        <FlatList
          data={data.weatherData.forecast}
          renderItem={({item, index}) =>{ 
            return(
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000000', margin: 10 }}>
                <Text> Day: {item.day} </Text>
                <Text> Temperature: {item.temperature} </Text>
                <Text> Wind: {item.wind} </Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index}
        />
      </View>
    :
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    )
  )
}

export default WeatherList

