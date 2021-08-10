import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import GlicemiMounth from "../UX/Home/Components/GlicemiOfMounth/GlicemiMounth";
import GoalsMessues from "../UX/Home/Components/GoalsMessues/GoalsMessues";
import HeaderUser from "../UX/Home/Components/HeaderUser";
import MetasGhapic from "../UX/Home/Components/MetasGhrapic/MestasGhaphic";
import colors from "../styles/colors";
import CardSvg from "../UX/Home/Components/Cards/CardSvg";
export default function Home() {
  const data = [
    {
      id: 1,
      before: 123,
      after: 214,
      applied: 7,
      goals: [
        {
          id: 1,
          hour: "before",
          title: "manter glicemia abaixo de 180",
          goal: 180,
        },
      ],
      styled: "normal",
      carboidrats: [
        {
          id: 7,
          item: "arroz",
          details: 30,
          consumed: 2,
          detailsNamed: "fatia",
          icon: require("../assets/arroz.png"),
        },
      ],
    },
    {
      id: 2,
      before: 223,
      after: 114,
      applied: 9,
      goals: [],
      styled: "hipo",
      carboidrats: [
        {
          id: 2,
          item: "arroz",
          details: 30,
          consumed: 2,
          detailsNamed: "fatia",
          icon: require("../assets/arroz.png"),
        },
        {
          id: 4,
          item: "feijão",
          details: 50,
          consumed: 6,
          detailsNamed: "colhe d'sopa",
          icon: require("../assets/feijao.png"),
        },
      ],
    },
    {
      id: 3,
      before: 123,
      after: 345,
      applied: 6,
      goals: [],
      styled: "hiper",
      carboidrats: [
        {
          id: 2,
          item: "arroz",
          details: 30,
          consumed: 2,
          detailsNamed: "fatia",
          icon: require("../assets/arroz.png"),
        },
        {
          id: 4,
          item: "feijão",
          details: 50,
          consumed: 6,
          detailsNamed: "colhe d'sopa",
          icon: require("../assets/feijao.png"),
        },
        {
          id: 10,
          item: "hamburguer",
          details: 90,
          consumed: 2,
          detailsNamed: "colhe d'sopa",
          icon: require("../assets/hamburguer-de-queijo.png"),
        },
        {
          id: 14,
          item: "coca-cola",
          details: 130,
          consumed: 3,
          detailsNamed: "1 latinha",
          icon: require("../assets/cola.png"),
        },
      ],
    },
    {
      id: 4,
      before: 135,
      after: 114,
      applied: 6,
      goals: [],
      styled: "normal",
      carboidrats: [],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"dark"} />

      <HeaderUser />
      <ScrollView
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.containerContent}>
          <CardSvg />
          <GlicemiMounth data={data} />
        </View>

        <View style={styles.containerContent}>
          <CardSvg />

          <View style={styles.boxTitleImage}>
            <Text style={styles.textGoalsTitle}>Suas Metas Neste Mês</Text>
          </View>

          <View style={styles.BoxHeaderMetas}>
            <GoalsMessues goal={150} percent={14} />
            <GoalsMessues goal={180} percent={50} />
          </View>
        </View>

        <View style={styles.containerContent}>
          <CardSvg />
          <Image
            style={styles.imageGoals}
            source={require("../assets/gerenciamento-de-projetos.png")}
            resizeMode={"contain"}
          />
          <View style={styles.boxTitleImage}>
            <Text style={styles.textGoalsTitle}>
              Resumo Mensal das Medidas ate o momento
            </Text>
          </View>
          <View style={styles.BoxHeaderMetas}>
            <MetasGhapic />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  containerScroll: {
    width: "100%",
    overflow: "hidden",
    marginTop: 20,
    backgroundColor: colors.whiteGray,
  },
  BoxHeaderMetas: {
    padding: 10,
  },
  BtnMessuesMonth: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#32ff7e",
  },
  containersBtn: {
    width: "100%",
    height: 70,
  },
  linearGradient: {
    marginTop: 10,
    width: "100%",
    height: 50,
    justifyContent: "flex-start",
  },
  containerContent: {
    position: "relative",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.whiteGray,
    marginBottom: 20,
  },
  boxTitleImage: {
    position: "relative",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textMounth: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageGoals: {
    position: "absolute",
    top: 50,
    left: -130,
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  textGoalsTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 22,
    color: colors.gray,
    fontWeight: "bold",
    textShadowColor: colors.white,
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
