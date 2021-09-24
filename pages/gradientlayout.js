import React from "react";
import { useRouter } from "next/router";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function gradientapp({navigation}) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 10 }}>
        <View
          style={{
            backgroundImage: `linear-gradient(180deg, #FF0021  0%, #FFFFFF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 12, fontFamily: "'Days One'" }}>
            Heading Gradient
          </Text>
        </View>
        <View
          style={{
            backgroundImage: `linear-gradient(180deg, #7E5AC9  0%, #FFFFFF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "'Days One'" }}>
            Heading Gradient
          </Text>
        </View>
        <View
          style={{
            backgroundImage: `linear-gradient(180deg, #00E2EF  0%, #FFFFFF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 36, fontFamily: "'Days One'" }}>
            Heading Gradient
          </Text>
        </View>
        <View
          style={{
            backgroundImage: `linear-gradient(180deg, #00A4AC  0%, #FFFFFF 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Text style={{ fontSize: 48, fontFamily: "DaysOne" }}>
            Heading Gradient
          </Text>
        </View>
        <Button
          title="FLEXBOX LAYOUT"
          onPress={() => navigation.navigate("FlexboxLayout")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  link: {
    color: "blue",
  },
});
