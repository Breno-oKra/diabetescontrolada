import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab.routes";
import InfoMessues from "../Screen/Info-Messues";
const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={"HomeInithial"}>
      <Stack.Screen name="HomeInithial" component={BottomTab} />
      <Stack.Screen name="MessuesInfo" component={InfoMessues} />
    </Stack.Navigator>
  );
}
export default AppStack;
