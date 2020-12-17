import React from 'react';
import {Alert} from 'react-native'
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather'

const API_KEY = "81ec71e6525a6f078feef4a1fdb76f3b";

export default class extends React.Component{
  state = {
    isLoading: true,
  }

  getWeather = async(latitude, longitude) => {
    // ` 백틱으로 작성해야지 ${} 먹힘
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    const { 
      data: {
        main : {temp},
        weather
      } 
    } = await axios.get(API_URL);

    this.setState({
      isLoading:false, 
      condition:weather[0].main,
      temp
    })
    console.log(data);
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const { 
        coords: {latitude, longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading:false})
    }catch(error){
      Alert.alert("Can't find you.", "So sad")
    }
  }
  componentDidMount(){
    this.getLocation()

  }
  render(){
    const { isLoading, temp, condition } = this.state;
    console.log(isLoading);
    console.log(temp);
    console.log(condition);
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}
