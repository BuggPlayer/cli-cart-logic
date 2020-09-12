import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import { CustomDrawerContent } from "./customDrawer";
import  AppBottomTab  from "./tab";
const Drawer = createDrawerNavigator();

export const AppSideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 30 }
      }}
    >
      <Drawer.Screen name="Home" component={AppBottomTab} />
    </Drawer.Navigator>
  );
};
