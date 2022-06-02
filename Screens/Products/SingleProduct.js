import { Layout } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

const SingleProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [availabilty, setAvailability] = useState();
  return (
    <Layout style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            resizeMode="contain"
            source={{
              uri: item.image
                ? item.image
                : "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
            }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },

  image: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: 250,
  },
});
export default SingleProduct;
