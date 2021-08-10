import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import MessuesInfos from "../UX/InfoMessues/components/Messues-Components/MessuesInfos";
import Carboidrats from "../UX/InfoMessues/components/CardCarboidrats/CardCarboidrats";
import { useRoute } from "@react-navigation/core";
import { GlicemiMounthProps } from "../interface/interfaces";
import colors from "../styles/colors";
interface MessuesRouteProps {
  item: GlicemiMounthProps;
}

export default function InfoMessues() {
  const routes = useRoute();
  const { item } = routes.params as MessuesRouteProps;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafe da Manha</Text>
      <ScrollView
        style={styles.containerTwo}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.boxMessuesInfos}>
          <MessuesInfos
            before={item.before}
            applied={item.applied}
            after={item.after}
            goals={item.goals}
          />
        </View>
        <Text style={styles.titleInCard}>Contagem de Carboidratos</Text>
        <View style={styles.box}>
          <Carboidrats data={item.carboidrats} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0be881",
    paddingTop: Platform.OS === "android" ? 30 : 10,
  },
  containerTwo: {
    width: "100%",
    backgroundColor: colors.whiteGray,
  },
  boxMessuesInfos: {
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  box: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    color: "#fff",
    marginVertical: 20,
    alignSelf: "center",
  },
  titleInCard: {
    fontSize: 25,
    color: "#2f3542",
    marginVertical: 20,
    alignSelf: "center",
  },
});
