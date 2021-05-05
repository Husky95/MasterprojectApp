import React, { useState, useEffect,useRef  } from "react";

import { StyleSheet, View, Text, Dimensions } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from "react-native-responsive-linechart";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import { THEME } from '../utils/theme.js';
import Amplify from 'aws-amplify';
import config from '../aws-exports';
Amplify.configure(config);

import { API, graphqlOperation } from 'aws-amplify';

//amplify API
const ListBooks = `
query {
  listBooks {
      nextToken
      items {
        id
        device_id
        device_data {
          temperature
        }
      }
    }
  }
`;

//dummy data

//phone screen
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
var heart = 120;
const xAxis = { textColor: "white" };


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


function Pulse(props) {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);
  const [data4, setData4] = useState(0);
  const [data5, setData5] = useState(0);
  const [data6, setData6] = useState(0);
  const [data7, setData7] = useState(0);
  const [data8, setData8] = useState(0);
  const [data9, setData9] = useState(0);
  const [data10, setData10] = useState(10);


  useInterval(() => {
     setData1(data2);
     setData2(data3);
     setData3(data4);
     setData4(data5);
     setData5(data6);
     setData6(data7);
     setData7(data8);
     setData8(data9);
     setData9(data10);
     setData10(Math.floor(Math.random() * 100) + 1);
     console.log(data10)
   }, 2000);


  async function getData() {
    try {
      const books = await API.graphql(graphqlOperation(ListBooks));
      console.log('books: ', books.data.listBooks.items);
      var item = books.data.listBooks.items;
      console.log(item[0].device_data.temperature);
      setData(item[0].device_data.temperature);
    } catch (err) {
      console.log('error fetching data..', err)
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.numText}>{data10}</Text>
        <View>
          <MaterialCommunityIcons
            name="heart"
            color={"#fe0055"}
            size={width * 0.1}
          />
          <Text style={styles.bpmText}>BPM</Text>
        </View>
      </View>

      <Chart
        style={{ height: height * 0.35, width: width * 1 }}
        data={[
          { x: 0, y: data1 },
          { x: 1, y: data2 },
          { x: 2, y: data3 },
          { x: 3, y: data4 },
          { x: 4, y: data5 },
          { x: 5, y: data6 },
          { x: 6, y: data7 },
          { x: 7, y: data8 },
          { x: 8, y: data9 },
          { x: 9, y: data10 },
        ]}
        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 0, max: 200 }}
      >
        <VerticalAxis
          tickCount={4}
          theme={{
            ticks: { visible: false },
            axis: { visible: false },
            grid: { stroke: { color: "#cbccce", opacity: 0.5 } },
            labels: {
              formatter: (v) => v.toFixed(0),
              label: { color: "#ffffff" },
            },
          }}
        />

        <HorizontalAxis
          tickCount={5}
          theme={{
            ticks: { visible: false },
            grid: { visible: false },
            labels: {
              formatter: (v) => v.toFixed(0),
              label: { color: "#ffffff", dx: 50, dy: -16 },
            },
          }}
        />
        <Line
          theme={{ stroke: { color: "#be4945", width: 2 } }}
          tooltipComponent={<Tooltip />}
        />
      </Chart>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  text: {
    color:  THEME.PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height *.08
  },
  Icon: {
    paddingTop: height * 0.02,
  },

  numText: {
    fontSize: height * 0.14,
    color: "#fff",
    paddingLeft: width * 0.02,
    fontFamily: "OpenSans-Light",
  },
  bpmText: {
    fontSize: 25,
    color: "#3e4b5c",
    paddingLeft: width * 0.01,
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
  },
  chartcontainer: {
    flex: 1,
    backgroundColor: "#263143",
  },
  chart: {
    flex: 1,
  },
});

export default Pulse;
