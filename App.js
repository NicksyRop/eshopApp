import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Dimensions } from "react-native";

import ProductContainer from "./Screens/Products/ProductContainer";
import { Header } from "./shared/Header";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Banner from "./shared/Banner";
import Main from "./Navigator/Main";

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Header />
        <Main />
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
