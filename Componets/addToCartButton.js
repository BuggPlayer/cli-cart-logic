import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import { subtractQuantity, addQuantity, removeItem } from "../Redux/actions";
import Colors from "../Constants/Colors";
const AddToCartButton = (props) => {
  return (
    <View
      style={{
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            backgroundColor: Colors.button,
            width: 100,
            height:30,
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
            borderRadius: 5,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "black"
          }}
        >
          <Text >Add to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCartButton;
