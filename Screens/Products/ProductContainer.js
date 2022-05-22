import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { ProductList } from "./ProductList";
import { Icon } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import SearchedProducts from "./SearchedProducts";
const data = require("../../assets/data/products.json");
const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [focus, setFocus] = useState();
  const [productsFiltered, setFilteredProducts] = useState([]);

  const renderIcon = (props) => <Icon {...props} name="search" />;
  const cancelIcon = (props) => <Icon {...props} name="backspace-outline" />;

  useEffect(() => {
    setProducts(data);
    setFocus(false);
    setFilteredProducts(data);
  }, []);

  const searchProduct = (text) => {
    setFilteredProducts(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const onList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View>
      <View>
        <Input
          style={styles.input}
          onFocus={onList}
          textStyle={{ paddingLeft: 10 }}
          placeholder="Search"
          accessoryLeft={renderIcon}
          accessoryRight={cancelIcon}
          onChangeText={(nextValue) => searchProduct(nextValue)}
        />
      </View>
      {focus == true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View style={{ marginTop: 30 }}>
          <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) => <ProductList item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },

  search: {
    flexDirection: "row",
  },

  input: {
    width: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
  },
});
export default ProductContainer;
