import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import Svg, { Path } from "react-native-svg";
export default function HeaderUser() {
  return (
    <View style={styles.container}>
      <View style={styles.boxSvg}>
        <Svg viewBox="0 0 1440 320">
          <Path
            fill="#2ed573"
            fill-opacity="1"
            d="M0,128L30,122.7C60,117,120,107,180,133.3C240,160,300,224,360,250.7C420,277,480,267,540,240C600,213,660,171,720,170.7C780,171,840,213,900,202.7C960,192,1020,128,1080,133.3C1140,139,1200,213,1260,229.3C1320,245,1380,203,1410,181.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></Path>
        </Svg>
      </View>

      <View style={styles.boxImage}>
        <ProgressCircle
          percent={30}
          radius={50}
          borderWidth={8}
          color="#ED4C67"
          shadowColor="#dfe6e9"
          bgColor="#fff"
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/280x280_RS/b9/a5/aa/b9a5aae3057b91b7ace843bd20dd4112.jpg",
            }}
          />
        </ProgressCircle>
      </View>
      <Text style={styles.textUser}>Bem Vindo Breno 😊</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 30 : 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
    fontSize: 21,
    color: "#fff",
    fontWeight: "bold",
  },
  boxSvg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});