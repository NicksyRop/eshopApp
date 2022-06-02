import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ProductCard } from "./ProductCard";

var { width } = Dimensions.get("window").width;

export const ProductList = ({ item, navigation }) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={{ width: Dimensions.get("window").width / 2 - 4 }}
        onPress={() => {
          navigation.navigate("Product Details", { item: item });
        }}
      >
        <ProductCard {...item} />
      </TouchableOpacity>
    </ScrollView>
  );
};
