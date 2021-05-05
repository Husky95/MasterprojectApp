import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Dimensions,ScrollView } from 'react-native'
import { THEME } from '../utils/theme.js'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Patient(props) {

  const [patient, setPatient] = useState("No patient");
  return (
    <ScrollView style={styles.container}>


      <View style={styles.cardCondtion}>
        <View style={styles.header2}>
        <Text style={styles.cardHeader}>Anna Maylor</Text>
        <Text style={styles.cardText}>Ward 1 ,Room 22</Text>
        </View>
      </View>

      <View style={styles.cardCondtion}>
        <View style={styles.header2}>
        <Text style={styles.cardHeader}>Jonh Smith</Text>
        <Text style={styles.cardText}>Ward 1 ,Room 12, </Text>
        </View>
      </View>

      <View style={styles.cardCondtion}>
        <View style={styles.header2}>
        <Text style={styles.cardHeader}>Adam Tyler</Text>
        <Text style={styles.cardText}>Ward 2 ,Room 3 </Text>
        </View>
      </View>

      <View style={styles.cardCondtion}>
        <View style={styles.header2}>
        <Text style={styles.cardHeader}>Adam Tyler</Text>
        <Text style={styles.cardText}>Ward 2 ,Room 3 </Text>
        </View>
      </View>





    </ ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: "90%",
    height: "40%",
    borderRadius: 10,
    backgroundColor: THEME.PRIMARY_COLOR,
    marginBottom: 10,

  },
  minicard: {
    width: width*.4,
    height: "32%",
    backgroundColor: THEME.PRIMARY_COLOR,
    flexDirection:'row',

  },
  minicard2: {
    width: width*.4,
    height: "100%",
    backgroundColor: THEME.PRIMARY_COLOR,
  },


  cardCondtion: {
    width:  width*.9,
    height:  height*.2,
    borderRadius: 10,
    backgroundColor: THEME.PRIMARY_COLOR,
    marginBottom: 10,
    marginLeft: 18,
  },

  cardTreatment: {
    width: "90%",
    height: "30%",
    borderRadius: 10,
    backgroundColor: THEME.PRIMARY_COLOR,
    marginBottom: 10,
  },

  header: {
    width: "100%",
    height: "25%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: THEME.SECONDARY_COLOR,
  },
  header2: {
    width: "100%",
    height: "40%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: THEME.SECONDARY_COLOR,
  },
  header3: {
    width: "100%",
    height: "31%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: THEME.SECONDARY_COLOR,
  },
  cardHeader: {
    fontSize: 23,
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 15,
    fontWeight: 'bold'


  },
  cardTitle: {
    fontSize: 16,
    color: '#a7a7a7',
    marginTop: 10,
    marginLeft: 15
  },
  cardInfo: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 5,
    marginLeft: 15
  },

  cardText: {
    fontSize: 22,
    color: '#ffffff',
    marginTop: 20,
    marginLeft: 15
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Patient
