import * as React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import ProductScreen from "../Screens/ProductScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import { useSelector } from "react-redux";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
//import SearchIcon from "@material-ui/icons/Search";//
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./../Screens/CartScreen";
import {
  MaterialCommunityIcons,
  Octicons,
  Feather,
  AntDesign,
  MaterialIcons,
} from "react-native-vector-icons";
const Stack = createStackNavigator();
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        {/* <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png"
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        /> */}
        <View style={{ marginLeft: 10 }}>
          {/* <Octicons name="list-unordered" color={"black"} size={26} /> */}
          <Text>DrawerIcon</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export const HomeStackScreen = (props) => {
  const Cart = useSelector((state) => state.reducer.addedItems);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomWidth: 0,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ route }) => ({
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={props.navigation} />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 20 }}>
              <TouchableOpacity
                style={{ marginRight: 10, position: "relative" }}
              >
                {/* <MaterialIcons
                  name="notifications-none"
                  color={"black"}
                  size={30}
                /> */}
                <Text>Icon</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 11,
                  position: "absolute",
                  left: 7,
                  width: 15,
                  height: 15,
                  marginTop: 20,
                  backgroundColor: "orange",
                  borderRadius: 100,
                  textAlign: "center",
                }}
              >
                2
              </Text>

              <TouchableOpacity
                onPress={()=>  props.navigation.navigate("order")}
                style={{ position: "relative" }}
              >
                {/* <Feather name="shopping-cart" color={"black"} size={26} /> */}
                <Text>Icon</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 11,
                  position: "absolute",
                  right: -8,
                  width: 17,
                  height: 17,
                  marginTop: -4,
                  backgroundColor: "orange",
                  borderRadius: 100,
                  textAlign: "center",
                }}
              >
                {Cart.length || 0}
              </Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        options={({ route }) => {
          return {
            title: route.params.category,
          };
        }}
        name="productlist"
        component={ProductScreen}
      />
       <Stack.Screen
        name="order"
        component={CartScreen}
      />
      <Stack.Screen
        options={({ route }) => {
          return {
            title: route.params.item.title,
          };
        }}
        name="Detail"
        component={DetailsScreen}
      />
    </Stack.Navigator>
    
  );
};

export const DetailStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="lDetai"
        component={HomeScreen}
        options={{
          headerTitle: "etail",
        }}
      />
     
    </Stack.Navigator>
  );
};

export const CartStackScreen = (props) => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={props.navigation} />
        ),

        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      })}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: "Cart",
        }}
      />
    </Stack.Navigator>
  );
};
