import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { goalsProps } from "../../../../interface/interfaces";
import colors from "../../../../styles/colors";

interface MessuesInfoProps {
  before: number;
  applied: number;
  after: number;
  goals?: goalsProps[];
}
export default function MessuesInfos({
  before,
  applied,
  after,
  goals,
}: MessuesInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxTwo}>
          <View style={styles.boxHeaderTwo}>
            <Text style={styles.dateHour}> 05/07/2021 As 14:30 </Text>
            <Text style={styles.labelHour}>Antes do Cafe</Text>
          </View>

          <View style={styles.boxQuant}>
            <Text>{before}</Text>
          </View>
        </View>
        {goals?.map((item) =>
          item.hour === "before" && before < item.goal ? (
            <LinearGradient
              key={item.id}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#f1f2f6", "#dfe4ea", "#f1f2f6"]}
              style={styles.boxTree}
            >
              <Text>meta atigida - {item.title}</Text>
            </LinearGradient>
          ) : (
            <View key={item.id}></View>
          )
        )}
      </View>
      <View style={styles.box}>
        <View style={styles.boxTwo}>
          <Text style={styles.labelHour}>aplicado</Text>
          <View style={styles.boxQuant}>
            <Text>{applied}</Text>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.boxTwo}>
          <View style={styles.boxHeaderTwo}>
            <Text style={styles.dateHour}> 05/07/2021 As 19:20 </Text>
            <Text style={styles.labelHour}>Depois do Cafe</Text>
          </View>
          <View style={styles.boxQuant}>
            <Text>{after}</Text>
          </View>
        </View>
        {goals?.map((item) =>
          item.hour === "after" && after < item.goal ? (
            <LinearGradient
              key={item.id}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#f1f2f6", "#dfe4ea", "#f1f2f6"]}
              style={styles.boxTree}
            >
              <Text>meta atigida - {item.title}</Text>
            </LinearGradient>
          ) : (
            <View key={item.id}></View>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  box: {
    width: "100%",
    flexDirection: "column",

    padding: 10,
    marginBottom: 2,
  },
  boxTwo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  boxHeaderTwo: {
    width: "60%",

    flexDirection: "column",
  },
  boxTree: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#f1f2f6",
    padding: 10,
    borderLeftColor: "#7d5fff",
    borderLeftWidth: 3,
  },
  dateHour: {
    color: "#fff",
    fontSize: 16,
    backgroundColor: "#d2dae2",
  },
  labelHour: {
    fontSize: 20,
    color: colors.gray_Subtitle,
  },
  boxQuant: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32ff7e",
    borderRadius: 20,
  },
});
