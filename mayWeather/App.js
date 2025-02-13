import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'; //사용하기 위해서는 import 받아야 함
const{width:SCREEN_WIDTH}=Dimensions.get('window');
const API_KEY="2eac196eac95a330ab1ed2427f859f54"

export default function App() {
    const [city,setCity] = useState("Loding...");
    const [days, setDays] = useState("Loding...");
    const [location, setLocation] = useState();
    const [ok, setOK] = useState(true);
    const ask = async()=>{
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if(!granted){
        setOK(false);
      }
      const {coords:{latitude,longitude }} = await Location.getCurrentPositionAsync({accuracy: 5});
      const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false})
      setCity(location[0].city);

      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&exclude={alerts}&appid={API_KEY}');
      const json = await response. json();
      console.log("hello");
      console.log(json);
    }
    useEffect(()=>{
      ask();
    }, [])


  return (
    
    <View style={styles.container}>

      <StatusBar style= "light" /> 

      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>

      <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       pagingEnabled
      contentContainerStyle={styles.weather}>
        <View style={styles.day}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
        </View>
        <View style={styles.day}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
        </View>
        <View style={styles.day}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
        </View>
        <View style={styles.day}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
        </View>
        <View style={styles.day}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },  //전체 화면의 기본 설정 

  city: {
    flex: 1,
   // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  }, // 도시 이름이 들어가는 부분의 설정

  cityName: {
    color: "hotpink",
    fontSize:60,
    fontWeight: "500",
  }, //도시이름 글자의 설정

  weather: {
   
  },
  day:{
     width: SCREEN_WIDTH,
     backgroundColor: "hotpink",
     alignItems: "left",
  },  //날씨 들어가는 부분의 설정

  tempStatus: {
    marginTop: 20,  //전체 화면 비율에서 조금 내려오기
    color: "gray",
    fontSize:200,
    fontWeight: "500",
  },  //온도 글씨 설정

  weatherStatus: {
    marginTop: -20, //전체 화면 비율에서 조금 올라가기
    color: "gray",
    fontSize:60,
    fontWeight: "300",
  } //날씨 글

  
});
