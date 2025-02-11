import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; //사용하기 위해서는 import 받아야 함

export default function App() {
  return (
    
    <View style={styles.container}>

      <StatusBar style= "light" /> 

      <View style={styles.city}>
        <Text style={styles.cityName}>SEOUL</Text>
      </View>

      <View style={styles.weather}>
        <Text style={styles.tempStatus}>27</Text>
        <Text style={styles.weatherStatus}>Hot</Text>
      </View>

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
    flex: 3,
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
  } //날씨 글씨 설정

  
});
