import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "red" }}><Text>dfgdfgdgd</Text></View>

        <View style={{ flex: 2, backgroundColor: "green" }}><Text>dfgdfgdgd</Text></View>
      </View>
    </DrawerContentScrollView>
  );
};
