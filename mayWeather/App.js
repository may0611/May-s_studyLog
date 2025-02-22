import * as Location from "expo-location";
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native'; //사용하기 위해서는 import 받아야 함
const { width: SCREEN_WIDTH } = Dimensions.get('window');
import {Fontisto} from '@expo/vector-icons';
const API_KEY = "2eac196eac95a330ab1ed2427f859f54"

const icons={
  "Clouds":"cloudy",
  "Clear" : "day-sunny",
  "Rain" : "rain",
  "Snow": "snow",
  "Drisslw": "rain",
  "Thunderstorm" : "lightning",
}
export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [location, setLocation] = useState();
  const [ok, setOK] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOK(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false })
    setCity(location[0].city);
    console.log(location);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const json = await response.json();

    setDays(
      json.list.filter((weather) => weather.dt_txt.includes("03:00:00"))
    );
  }
  useEffect(() => {
    ask();
  }, [])


  return (

    <View style={styles.container}>

      <StatusBar style="light" />

      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={{...styles.day, alignItems: "center"}}>
            <ActivityIndicator color="white" size="large" style={{ marginTop: 10 }}>

            </ActivityIndicator>
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
      
              <Text style={styles.date}>
                {new Date(day.dt * 1000).toDateString()}
              </Text>
              <View style={{
                flexDirection: "row",
                 alignItems:"center",
                 justifyContent: "space-between",
                 width:"90%"}}>
              <Text style={styles.tempStatus}>
                {parseFloat(day.main.temp).toFixed(1)}°C  
              </Text>
              <Fontisto name={icons[day.weather[0].main]} size={100} color="gray" />
              </View>
              <Text style={styles.weatherStatus}>
                {day.weather[0].main}
              </Text>
              <Text style={styles.weatherStatus2}>
                {day.weather[0].description}
              </Text>
            </View>
          ))
        )}


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
    fontSize: 60,
    fontWeight: "500",
  }, //도시이름 글자의 설정

  weather: {

  },
  date: {
    fontSize: 40,
    fontWeight: "400",
    color: "white",
    marginBottom: 5,
  },
  day: {

    width: SCREEN_WIDTH,
    backgroundColor: "hotpink",
    alignItems: "flex-start",
  },  //날씨 들어가는 부분의 설정

  tempStatus: {
    marginTop: 20,  //전체 화면 비율에서 조금 내려오기
    color: "gray",
    fontSize: 80,
    fontWeight: "500",
  },  //온도 글씨 설정

  weatherStatus: {
    marginTop: -20, //전체 화면 비율에서 조금 올라가기
    color: "gray",
    fontSize: 50,
    fontWeight: "300",
  }, //날씨 글
  weatherStatus2: {
    marginTop: -10, //전체 화면 비율에서 조금 올라가기
    color: "gray",
    fontSize: 30,
    fontWeight: "300",
  } //날씨 글


});
