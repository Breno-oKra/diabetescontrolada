import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import colors from "../../../../styles/colors";

interface GoalsMessuesProps {
  goal: number;
  percent: number;
}
export default function GoalsMessues({ goal, percent }: GoalsMessuesProps) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textGoals}>Manter Glicemia Abaixo de : {goal}</Text>
        <ProgressCircle
          percent={percent}
          radius={40}
          borderWidth={10}
          color="#5352ed"
          shadowColor="#dfe6e9"
          bgColor="#fff"
        >
          <Text>{percent}%</Text>
        </ProgressCircle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 2,
  },
  box: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },

  textGoals: {
    fontSize: 15,
    color: colors.gray_Subtitle,
    fontWeight: "bold",
    marginRight: 10,
  },
});
