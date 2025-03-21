import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable} from 'react-native';
import { theme } from './colors';
export default function App() {
  const [working, setWorking] =useState(true);
  const travel=()=> setWorking(false);
  const work=() => setWorking(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg, 
    paddingHorizontal: 20,
  },
  header:{
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop: 100,
  },
  btnText:{
    fontSize: 50,
    fontWeight: "600", //두께
    color: theme.lightGreen,
  },

});
