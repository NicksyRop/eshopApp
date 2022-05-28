import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Text,
} from "react-native";
import { ProductList } from "./ProductList";
import { Card, Icon } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import SearchedProducts from "./SearchedProducts";
import Banner from "../../shared/Banner";
import CategoriesFilter from "./CategoriesFilter";
const data = require("../../assets/data/products.json");
const catdata = require("../../assets/data/categories.json");
const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [focus, setFocus] = useState();
  const [productsFiltered, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productCat, setProductCat] = useState([]);
  const [active, setActive] = useState();
  const [intialState, setInitialState] = useState([]);

  const renderIcon = (props) => <Icon {...props} name="search" />;
  const cancelIcon = (props) => <Icon {...props} name="backspace-outline" />;

  useEffect(() => {
    setProducts(data);
    setFocus(false);
    setFilteredProducts(data);
    setCategories(catdata);
    setActive(-1);
    setInitialState(data);
    setProductCat(intialState);
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

  const changeCategory = (ctg) => {
    ctg === "all"
      ? [setProductCat(intialState), setActive(true)]
      : [
          setProductCat(
            products.filter((i) => i.category.$oid === ctg),
            setActive(true)
          ),
        ];
  };

  console.log(productCat);

  return (
    <View style={{ flexWrap: "wrap" }}>
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

      <ScrollView>
        {focus == true ? (
          <SearchedProducts productsFiltered={productsFiltered} />
        ) : (
          <View>
            <View
              style={{
                height: Dimensions.get("window").width / 2,
                marginBottom: 5,
              }}
            >
              <Banner />
            </View>
            <View>
              <CategoriesFilter
                data={categories}
                productCat={productCat}
                active={active}
                changeCategory={changeCategory}
                setActive={setActive}
              />
            </View>

            {productCat.length > 0 ? (
              <View style={styles.listContainer}>
                {productCat.map((item) => {
                  return <ProductList key={item._id.$oid} item={item} />;
                })}
              </View>
            ) : (
              <View style={{ width: "80%", alignSelf: "center" }}>
                <Card>
                  <Text style={{ textAlign: "center" }}>
                    No product found !
                  </Text>
                </Card>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: "100%",
  },
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
