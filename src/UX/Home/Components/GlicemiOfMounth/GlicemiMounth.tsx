import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PieChart } from "react-native-svg-charts";
import MessuresToday from "../MeasuresToday/MesssuresToday";
import { useNavigation } from "@react-navigation/core";
import { GlicemiMounthProps } from "../../../../interface/interfaces";
interface dataProps {
  data: GlicemiMounthProps[];
}
export default function GlicemiMounth({ data }: dataProps) {
  const navigation = useNavigation();
  const dataStyle = [
    { val: 23, color: "#32ff7e", situation: "normal" },
    { val: 13, color: "#18dcff", situation: "hipo" },
    { val: 3, color: "#f11010", situation: "hiper" },
  ];
  const [renderMissues, setMissues] = useState<string>("hipo");
  const pieData = dataStyle
    .filter((value) => value.val > 0)
    .map((value) => ({
      value: value.val,
      svg: {
        fill: value.color,
        onPress: () => {
          setMissues(value.situation);
          console.log(value.situation);
        },
      },
      key: `pie-${value.val}`,
    }));
  const messues = data;
  return (
    <View style={styles.container}>
      <PieChart
        style={{ width: 300, height: 200, marginVertical: 10 }}
        data={pieData}
      />
      <>
        <Text style={styles.texTitle}>
          {renderMissues == "normal"
            ? "glicemias normais"
            : renderMissues + "glicemias"}{" "}
          do Mês
        </Text>
        {messues.map((item) =>
          item.styled == renderMissues ? (
            <MessuresToday
              key={item.id}
              before={item.before}
              after={item.after}
              applied={item.applied}
              styled={item.styled}
              onPress={() => navigation.navigate("MessuesInfo", { item })}
            />
          ) : (
            <View key={item.id}></View>
          )
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 550,
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },
  texTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#747d8c",
  },
});
