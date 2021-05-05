import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Dimensions } from 'react-native'
import { THEME } from '../utils/theme.js'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function Detail(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { name, home, species } = item
  const [patient, setPatient] = useState("No patient");
  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
          <Text style={styles.cardHeader}>Patient Information</Text>
          </View>

          <View style={styles.minicard}>
            <View style={styles.minicard2}>
              <Text style={styles.cardTitle}>FullName</Text>
              <Text style={styles.cardInfo}>{patient}</Text>
            </View>
            <View style={styles.minicard2}>
              <Text style={styles.cardTitle}>Age</Text>
              <Text style={styles.cardInfo}>40</Text>
            </View>
          </View>

          <View style={styles.minicard}>
            <View style={styles.minicard2}>
              <Text style={styles.cardTitle}>Gender</Text>
              <Text style={styles.cardInfo}>Male</Text>
            </View>
            <View style={styles.minicard2}>
              <Text style={styles.cardTitle}>Blood Type</Text>
              <Text style={styles.cardInfo}>AB</Text>
            </View>
          </View>

      </View>

      <View style={styles.cardCondtion}>
        <View style={styles.header2}>
        <Text style={styles.cardHeader}>Patient Condition</Text>
        <Text style={styles.cardText}>sfsdfsdffffffffffffffffsdfsd</Text>

        </View>
      </View>
      <View style={styles.cardTreatment}>
        <View style={styles.header3}>
        <Text style={styles.cardHeader}>Patient Treatment</Text>
        <Text style={styles.cardText}>sfsdfsdffffffffffffffffsdfsd</Text>

        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
    color: '#ffffff',
    marginTop: 10,
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

export default Detail
