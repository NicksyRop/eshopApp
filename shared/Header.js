import React from "react";

import { SafeAreaView, Image, StyleSheet, View } from "react-native";

export const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require("../assets/data/logo.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
