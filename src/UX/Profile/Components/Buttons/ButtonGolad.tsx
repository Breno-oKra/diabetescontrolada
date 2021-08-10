import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../../../../styles/colors";

interface ButtonGoalsProps {
  icon: string;
  Bibliotec: any;
  title: string;
}
export default function ButtonGoals({
  title,
  icon,
  Bibliotec,
}: ButtonGoalsProps) {
  return (
    <TouchableOpacity style={styles.btns}>
      <View style={styles.images}>
        <Bibliotec name={icon} size={50} color={colors.white} />
      </View>
      <Text style={styles.textGoals}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btns: {
    width: "50%",
    height: 100,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textGoals: {
    width: "100%",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    color: colors.gray_Subtitle,
    fontWeight: "bold",
  },
  images: {
    width: "40%",
    height: "70%",
    backgroundColor: "#2ed573",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
