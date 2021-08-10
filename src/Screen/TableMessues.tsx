import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import colors from "../styles/colors";
import CardTables from "../UX/Info-Messues/CardTables";
import Svg, { Path } from "react-native-svg";
export default function TablesMessues() {
  const Month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const data = [
    {
      id: 5,
      table2021: [
        {
          january: [
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
          ],
          goals: [],
        },
      ],
    },
  ];
  const tables = [
    {
      id: 1,
      title: "Tabela Cafe da Manha",
      Schema: "Coffe",
      image: require("../assets/tabelas/cafe.png"),
      progress: 0.9,
    },
    {
      id: 2,
      title: "Tabela Almoço",
      Schema: "Coffe",
      image: require("../assets/tabelas/almoco.png"),
      progress: 0.6,
    },
    {
      id: 3,
      title: "Tabela Lanche da Tarde",
      Schema: "Coffe",
      image: require("../assets/tabelas/lanches.png"),
      progress: 0.5,
    },
    {
      id: 4,
      title: "Tabela Janta",
      Schema: "Coffe",
      image: require("../assets/tabelas/jantar.png"),
      progress: 0.8,
    },
    {
      id: 5,
      title: "Tabelas do Mes",
      Schema: "Coffe",
      image: require("../assets/tabelas/calendarioMes.png"),
      progress: 0.4,
    },
    {
      id: 6,
      title: "Tabelas Completa",
      Schema: "Coffe",
      image: require("../assets/tabelas/calendario.png"),
      progress: 0.2,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.title}>Suas Tabelas</Text>
        </View>
        <View style={styles.containerTwo}>
          <View style={styles.boxSvg}>
            <Svg viewBox="0 0 960 540" width="100%" height="100%">
              <Path
                fill="#dfe4ea"
                d="M0 149L32 153.2C64 157.3 128 165.7 192 162.5C256 159.3 320 144.7 384 131.8C448 119 512 108 576 118.2C640 128.3 704 159.7 768 165.8C832 172 896 153 928 143.5L960 134L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
              ></Path>
              <Path
                d="M0 174L32 192C64 210 128 246 192 264.8C256 283.7 320 285.3 384 267C448 248.7 512 210.3 576 184.3C640 158.3 704 144.7 768 140.3C832 136 896 141 928 143.5L960 146L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
                fill="#e5e9ee"
              ></Path>
              <Path
                d="M0 242L32 267C64 292 128 342 192 344.3C256 346.7 320 301.3 384 301.8C448 302.3 512 348.7 576 353.7C640 358.7 704 322.3 768 317.7C832 313 896 340 928 353.5L960 367L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
                fill="#ebedf2"
              ></Path>
              <Path
                d="M0 354L32 368.5C64 383 128 412 192 421.8C256 431.7 320 422.3 384 423.2C448 424 512 435 576 427.7C640 420.3 704 394.7 768 388.3C832 382 896 395 928 401.5L960 408L960 541L928 541C896 541 832 541 768 541C704 541 640 541 576 541C512 541 448 541 384 541C320 541 256 541 192 541C128 541 64 541 32 541L0 541Z"
                fill="#f1f2f6"
              ></Path>
            </Svg>
          </View>
          {tables.map((item) => (
            <CardTables key={item.id} data={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  containerTwo: {
    position: "relative",
    backgroundColor: colors.whiteGray,
    width: "100%",
  },
  boxSvg: {
    position: "absolute",
    top: -130,
    left: 0,
    width: "100%",
    height: "50%",
  },
  box: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: colors.whiteGray,
    fontWeight: "bold",
  },
  progressBar: {
    width: "30%",
    height: 80,
  },
});
