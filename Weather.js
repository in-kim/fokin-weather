import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
  Thunderstorm : {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle : {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay 🏳️‍🌈"
  },
  Rain : {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside"
  },
  Snow : {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Atmosphere : {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear : {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt"
  },
  Cluds : {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"]
  },
  Mist : {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on."
  },
  Dust : {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
}

export default function Weather({temp,condition="Haze"}){
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOption[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name={weatherOption[condition].iconName} color="white"/>
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOption[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOption[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes = {
  temp:PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Cluds",
    "Haze",
    "Dust"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  temp: {
    fontSize:42,
    color:'white',
  },
  halfContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:44,
    fontWeight:"300",
    color:"white",
    marginBottom:10,
    textAlign:'left'
  },
  subTitle:{
    fontSize:24,
    fontWeight:"600",
    color:"white",
    textAlign:'left'
  },
  textContainer:{
    flex:1,
    paddingHorizontal: 40,
    alignItems:"flex-start",
    justifyContent:"center"
  }
})