import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface MessuresTodayProps extends TouchableOpacityProps {
  before: number;
  after: number;
  applied: number;
  styled: string;
}
const MessuresToday: React.FC<MessuresTodayProps> = ({
  before,
  after,
  applied,
  styled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styled === "hipo"
          ? styles.hipo
          : styled === "hiper"
          ? styles.hiper
          : styles.normal,
      ]}
      {...rest}
    >
      <View>
        <Text>28/06/2021</Text>
        <Text>21:31</Text>
      </View>

      <>
        <View style={styles.boxCont}>
          <Text style={styles.text}>Antes</Text>
          <View style={styles.box}>
            <Text>{before}</Text>
          </View>
        </View>
        <View style={styles.boxCont}>
          <Text style={styles.text}>Aplicado</Text>
          <View style={styles.box}>
            <Text>{applied}</Text>
          </View>
        </View>
        <View style={styles.boxCont}>
          <Text style={styles.text}>Depois</Text>
          <View style={styles.box}>
            <Text>{after}</Text>
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 5,
    borderLeftWidth: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  boxCont: {
    width: 80,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  text: {
    fontSize: 15,
    color: "#dcdde1",
    fontWeight: "bold",
  },
  hipo: {
    borderLeftColor: "#18dcff",
  },
  hiper: {
    borderLeftColor: "#f11010",
  },
  normal: {
    borderLeftColor: "#32ff7e",
  },
});

export default MessuresToday;
