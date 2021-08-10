import React from "react";
import { StyleSheet, View } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
import { Dimensions } from "react-native";
export default function ActivityOfMounth() {
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#32ff7e",
    backgroundGradientTo: "#218c74",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(30,39,46, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
    style: {
      borderRadius: 0,
    },
  };
  const commitsData = [
    { date: "2021-06-01", count: 0 },
    { date: "2021-06-01", count: 2 },
    { date: "2021-06-02", count: 1 },
    { date: "2021-06-03", count: 3 },
    { date: "2021-07-01", count: 1 },
  ];
  return (
    <View style={styles.container}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2021-08-01")}
        numDays={92}
        width={screenWidth}
        height={230}
        chartConfig={chartConfig}
        squareSize={24}
        gutterSize={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
