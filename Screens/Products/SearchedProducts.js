import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { Card, List, ListItem, Avatar } from "@ui-kitten/components";

const SearchedProducts = (props) => {
  const { productsFiltered } = props;

  const image = (item) => {
    return item.image;
  };
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.name} ${index + 1}`}
      description={`${item.price} ${index + 1}`}
      accessoryRight={() => (
        <Image
          resizeMode="contain"
          source={{
            uri: item.image
              ? item.image
              : "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
          }}
          style={styles.image}
        />
      )}
    />
  );

  return (
    <View>
      {productsFiltered.length > 0 ? (
        <List
          style={styles.container}
          data={productsFiltered}
          renderItem={renderItem}
        />
      ) : (
        <View>
          <Card style={{ marginTop: 15 }}>
            <Text style={{ alignSelf: "center" }}>
              No products match selected creteria
            </Text>
          </Card>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: Dimensions.get("window").height - 50,
  },
  avatar: {
    margin: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default SearchedProducts;
