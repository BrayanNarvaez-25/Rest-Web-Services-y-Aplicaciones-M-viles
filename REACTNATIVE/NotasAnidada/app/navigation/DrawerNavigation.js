import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import StackNavigation from "./StackNavigation";
import TestScreen from "../screens/TestScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Productos"
        component={StackNavigation}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="product" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Test"
        component={TestScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="eye" size={size} color={color} />
          ),
        }}
      />
      {/* Cerrar sesión */}
      <Drawer.Screen
        name="Cerrar"
        component={View}
        listeners={{
          focus: () => navigation.replace("Home"),
        }}
        options={{
          drawerIcon: ({ color, size }) => (
            <Entypo name="log-out" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}