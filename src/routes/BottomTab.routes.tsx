import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screen/Home";
import Perfil from "../Screen/Perfil";
import Tables from "../Screen/Tables";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import TopTabs from "./TopTab.routes";
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  const icons = {
    HomeScreen: {
      lib: AntDesign,
      name: "home",
    },
    Profile: {
      lib: AntDesign,
      name: "user",
    },
    TableScreen: {
      lib: AntDesign,
      name: "table",
    },
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const screen = route.name;
          const { lib: Icon, name } = icons[screen];
          return <Icon name={name} size={40} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
          height: 60,
        },
        activeTintColor: "#32ff7e",
        inactiveTintColor: "#218c74",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: "Inicio",
        }}
      />

      <Tab.Screen
        name="TableScreen"
        component={TopTabs}
        options={{
          title: "Tabelas",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Perfil}
        options={{
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
