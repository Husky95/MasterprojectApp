import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CommonActions, useNavigation } from '@react-navigation/native' // <-- import useNavigation hook


import { THEME } from '../utils/theme.js'

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
var num = 10;


const patient = {
  name: "Luke Skywalker",
  condition: "Stable",
  species: "human",
};




const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentTime] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const navigation = useNavigation() // <-- add this line


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Detail", { item: patient })}
      >

      <MaterialCommunityIcons
        name="account"
        color={THEME.SECONDARY_COLOR}
        size={width * 0.1}
      />
        <Text style={styles.buttonText}>Patient: {patient.name}</Text>
      </TouchableOpacity>

      <View style={styles.box}>
        <View style={styles.inner}>

                <MaterialCommunityIcons
                      name="heart"
                      color={"#fe0055"}
                      size={height * 0.09}
                    />
          <View>
          <Text style = {styles.displaytext}>{seconds}</Text>
          <Text style = {styles.displaytext2}>Heart Rate</Text>

          </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>

        <MaterialCommunityIcons
              name="thermometer"
              color={"#fdbd1d"}
              size={width * 0.12}
              style={styles.icon}
            />
            <View>
            <Text style = {styles.displaytext}>90 °F</Text>
            <Text style = {styles.displaytext2}>Temperature</Text>

            </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>

        <MaterialCommunityIcons
              name="water"
              color={"#34bee5"}
              size={width * 0.12}
            />
            <View>
            <Text style = {styles.displaytext}>84 %</Text>
            <Text style = {styles.displaytext2}>Humidity</Text>

            </View>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>

        <MaterialCommunityIcons
              name="gauge"
              color={"#da512e"}
              size={width * 0.12}
            />
            <View>
            <Text style = {styles.displaytext}>115/80</Text>
            <Text style = {styles.displaytext2}>Blood Pressure</Text>

            </View>
        </View>
      </View>

      <View
        style={styles.buttonContainer2}
      >


        <Text style={styles.buttonText}>Status: {patient.condition}</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "48%",
    height: "30%",
    padding: 5,


  },
  inner: {
    flex: 1,
    backgroundColor:  THEME.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",


  },
  title: {
    fontSize: 32,
  },
  buttonContainer: {
    backgroundColor:  THEME.PRIMARY_COLOR,
    borderRadius: 10,
    width: "94%",
    height: "10%",
    padding: 10,
    marginBottom: height*.01,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 21,
    color: "#e2e2e2",
  },
  displaytext:{
    fontSize: width*.06,
    color: "#ffffff",
  },
  displaytext2:{
    fontSize: width*.035,
    color: "#ffffff",
  },

  buttonContainer2: {
    backgroundColor:  '#2d98da',
    borderRadius: 10,
    width: "94%",
    height: "24%",
    padding: 10,
    marginTop: height*.01,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "center",
  },

});
export default Home;
