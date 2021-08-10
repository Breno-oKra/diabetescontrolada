import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";

interface CardTablesProps {
  id: number;
  title: string;
  Schema: string;
  image: any;
  progress: number;
}
interface props {
  data: CardTablesProps;
}
export default function CardTables({ data }: props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={data.image}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.boxTwo}>
          <Text style={styles.textTitle}>{data.title}</Text>
          <ProgressBar
            style={styles.progressBar}
            progress={data.progress}
            color={"#9980FA"}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
  },
  box: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  boxImage: {
    width: "20%",
    height: "80%",

    borderRadius: 40,
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
    borderRadius: 40,
  },
  boxTwo: {
    position: "relative",
    width: "70%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  textTitle: {
    width: "100%",
    textAlign: "left",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "90%",
    height: 15,
  },
});
