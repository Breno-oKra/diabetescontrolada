import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart, YAxis, Grid } from "react-native-svg-charts";
import { Dimensions } from "react-native";
export default function MetasGhapic() {
  const screenWidth = Dimensions.get("window").width;
  const data = [
    140, 156, 234, 239, 193, 147, 290, 390, 190, 140, 256, 234, 139, 133, 147,
    130, 390, 230, 140, 156, 274, 239, 123, 147, 290, 390, 490,
  ];

  const contentInset = { top: 0, bottom: 0 };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: "grey",
            fontSize: 16,
          }}
          numberOfTicks={11}
          formatLabel={(value: any) => `${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: "#32ff7e", strokeWidth: 3 }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 10,
    borderRadius: 20,
  },
  box: {
    width: "100%",
    height: 210,
    flexDirection: "row",
    padding: 2,
  },
});
