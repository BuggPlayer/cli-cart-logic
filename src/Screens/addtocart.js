import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../Constants/Colors";

const AddToCart = (props) => {
  console.log("quantitytyt", props.item);
  const isAdded = useSelector((state) => state.reducer.isAdded);
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            backgroundColor: Colors.button,
            width: 25,
            height:25,
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius:5
          }}
        >
          <Text > + </Text>
        </View>
      </TouchableOpacity>

      <Text style={{ margin: 8 }}>{props.quantity}</Text>
      <TouchableOpacity onPress={props.onSub}>
        <View
          style={{
            backgroundColor: Colors.button,
            width: 25,
            height:25,
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius:5
          }}
        >
          <Text> - </Text>
        </View>
      </TouchableOpacity>

      {isAdded && (
        <Text
          style={{
            color: "green",
            margin: 5
          }}
        >
           ✓
        </Text>
      )}
    </View>
  );
};

export default AddToCart;
