import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import { List, ListItem } from "@ui-kitten/components";

const CategoriesFilter = (props) => {
  // const { activeCat, changeCategory, setActive } = props;
  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <ListItem
        title={`${item.name}`}
        onPress={() => {
          props.changeCategory(item._id.$oid), props.setActive(index);
        }}
        style={[
          { borderRadius: 25 },
          { marginLeft: 10 },
          { color: "white" },
          props.active === index ? styles.activecat : styles.inactive,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView horizontal={true}>
      <ListItem
        title={`All`}
        style={[
          { borderRadius: 25 },
          { marginLeft: 10 },
          { color: "white" },
          props.active === -1 ? styles.activecat : styles.inactive,
        ]}
        onPress={() => {
          props.changeCategory("all"), props.setActive(-1);
        }}
      />

      <List
        bounces={true}
        style={styles.container}
        data={props.data}
        renderItem={renderItem}
        horizontal={true}
        props={props}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activecat: {
    backgroundColor: "#3276e3",
  },
  inactive: {
    backgroundColor: "#3d4a5e",
  },
});

export default CategoriesFilter;
