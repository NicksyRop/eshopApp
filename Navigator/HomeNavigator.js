import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductContainer}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Product Details"
        component={SingleProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
