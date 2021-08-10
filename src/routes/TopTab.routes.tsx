import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TablesMessues from "../Screen/TableMessues";
import TablesCarboidracts from "../Screen/TableCarboidracts";
import { View, StyleSheet, Platform } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  const icons = {
    TablesMessues: {
      lib: AntDesign,
      name: "home",
    },
    TablesCarboidracts: {
      lib: AntDesign,
      name: "user",
    },
  };
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "#fff",
            height: 60,
          },
          activeTintColor: "#32ff7e",
          inactiveTintColor: "rgb(128, 142, 155)",
          pressColor: "rgba(123, 237, 159,0.5)",
          indicatorStyle: {
            borderBottomWidth: 5,
            borderBottomColor: "rgba(108, 92, 231,1.0)",
          },
        }}
      >
        <Tab.Screen
          name="TablesMessues"
          component={TablesMessues}
          options={{
            title: "Tabela de Medidas",
          }}
        />
        <Tab.Screen
          name="TablesCarboidracts"
          component={TablesCarboidracts}
          options={{
            title: "Tabela de Carboidratos",
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 20,
  },
});
