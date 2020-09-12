import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CartButton } from "./UI/CartButton";
import PlusMinusBtn from "./UI/Plus&MinusBtn";

const CartItem = (props) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{
          uri:
            "https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg",
        }}
      />
      <View style={styles.smallcontainer}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.rs}>Rs:</Text>
        <Text style={styles.rs}>QTY:</Text>
        <Text style={styles.save}>TOTal:</Text>
        <Text style={{ color: "red", fontSize: 16 }}>data</Text>
      </View>
     
      <View>
        <PlusMinusBtn title="+" />
        <PlusMinusBtn title="-" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    // flex: 1,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },

  image: {
    borderRadius: 10,
    height: 120,
    width: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
    margin: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  smallcontainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  quantity: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 130,
  },
  title: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
  },

  quantitytext: {
    margin: 5,
  },
});

export default CartItem;
