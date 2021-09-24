import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useRouter } from "next/router";

export default function exampleapp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Example App</Text>
      <Button
        title="Gradient App"
        onPress={() => navigation.navigate("GradientLayout")}
      />
      <Button title="back to" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});
