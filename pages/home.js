// @generated: @expo/next-adapter@2.1.52
import router from "next/router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Button title="camera layout" onPress={()=>navigation.navigate('CameraLayout')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
