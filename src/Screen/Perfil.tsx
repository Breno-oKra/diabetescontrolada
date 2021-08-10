import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ActivityOfMounth from "../UX/Profile/Components/ActivityOfMounth/ActivityOdMounth";
import ButtonGoals from "../UX/Profile/Components/Buttons/ButtonGolad";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.boxHeader}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/280x280_RS/b9/a5/aa/b9a5aae3057b91b7ace843bd20dd4112.jpg",
            }}
          />
        </View>
        <Text style={styles.textUser}>Breno Oliveira</Text>
      </View>
      <View>
        <Text>glicemia media: 230</Text>
        <Text>metas concluidas:2</Text>
      </View>
      <Text style={styles.titles}>Registro de Atividade</Text>
      <ActivityOfMounth />
      <ScrollView>
        <View style={styles.containerCard}>
          <ButtonGoals
            title={"Suas Metas"}
            icon={"flag"}
            Bibliotec={MaterialIcons}
          />
          <ButtonGoals
            title={"Configurar Tabela"}
            icon={"table"}
            Bibliotec={AntDesign}
          />
          <ButtonGoals
            title={"Alarmes"}
            icon={"alarm"}
            Bibliotec={MaterialIcons}
          />
          <ButtonGoals
            title={"Cartão de Consultas"}
            icon={"article"}
            Bibliotec={MaterialIcons}
          />
          <ButtonGoals
            title={"Consultar Tabela De Carboidratos"}
            icon={"local-pizza"}
            Bibliotec={MaterialIcons}
          />
          <ButtonGoals
            title={"Configurar sua Dieta"}
            icon={"restaurant"}
            Bibliotec={MaterialIcons}
          />
          <ButtonGoals
            title={"Configurar Receita"}
            icon={"wysiwyg"}
            Bibliotec={MaterialIcons}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 30 : 10,
  },
  containerCard: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    borderRadius: 20,
  },
  containerHeader: {
    width: "100%",
    height: 320,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  boxHeader: {
    width: "100%",
    height: 100,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  boxImage: {
    width: 100,
    height: 80,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  textUser: {
    flex: 1,
    fontSize: 19,
    color: "rgb(116, 125, 140)",
  },
  titles: {
    fontSize: 20,
    color: "rgb(128, 142, 155)",
    fontWeight: "bold",
  },
});
