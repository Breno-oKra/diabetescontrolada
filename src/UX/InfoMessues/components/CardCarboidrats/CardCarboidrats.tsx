import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { carboidratsProps } from "../../../../interface/interfaces";
import colors from "../../../../styles/colors";

interface CarboidratsProps {
  data: carboidratsProps[];
}
export default function Carboidrats({ data }: CarboidratsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {data.map((item) => (
          <Text key={item.id} style={styles.itemFood}>
            {item.item}
          </Text>
        ))}
      </View>
      <View style={styles.boxTwo}>
        {data.map((item) => (
          <View key={item.item} style={styles.rowItem}>
            <View>
              <Image style={styles.iconItem} source={item.icon} />
            </View>
            <View style={styles.containerTwo}>
              <Text style={styles.titleItem}>{item.item}</Text>
              <View style={styles.infoItems}>
                <Text style={styles.quantItemList}>
                  1 {item.detailsNamed} = {item.details}
                </Text>
                <Text style={styles.quant}>
                  consulmido {item.consumed} {item.detailsNamed}
                </Text>
                <Text style={styles.quant}>total 60g</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  containerTwo: {
    width: "60%",
    height: "100%",
  },
  boxMessuesInfos: {
    width: "97%",
    alignItems: "center",
    borderRadius: 10,
  },
  box: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  iconItem: {
    width: 100,
    height: 100,
  },
  boxTwo: {
    width: "100%",
  },
  title: {
    fontSize: 25,
    color: "#fff",
    marginVertical: 50,
  },
  itemFood: {
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#9980FA",
    borderRadius: 10,
    color: "#fff",
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  rowItem: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.whiteGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  titleItem: {
    fontSize: 19,
    color: "#5A5757",
    fontWeight: "bold",
  },
  quantItemList: {
    fontSize: 15,
    color: "#5A5757",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    fontWeight: "bold",
  },
  quant: {
    fontSize: 15,
    color: "#5A5757",
    borderRadius: 10,
    fontWeight: "bold",
  },
  infoItems: {
    width: "100%",
    height: 90,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
