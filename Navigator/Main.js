import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeNavigator from "./HomeNavigator";
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
        activeColor: "#3276e3",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              size={30}
              color={color}
              style={{ position: "relative" }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="cog" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
