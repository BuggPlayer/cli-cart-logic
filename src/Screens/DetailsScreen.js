import React from "react";
import { connect } from "react-redux";

import { subtractQuantity, removeItem, addQuantity } from "../Redux/actions";
import { View, Text, Image, TouchableOpacity } from "react-native";

const DetailsScreen = (props) => {
  return (
    <View>
      <Image
        style={{
          alignSelf: "center",
          height: 300,
          width: 400,
          border: "1px solid gray"
        }}
        source={{ uri: props.route.params.item.image }}
      />
      <Text style={{ alignSelf: "center" }}>
        {props.route.params.item.title}--Rs {props.route.params.item.price}
      </Text>
      <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
        <TouchableOpacity
          onPress={() => props.addQuantity(props.route.params.item.id)}
        >
          <View
            style={{
              backgroundColor: "blue",
              width: 20,
              margin: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            +
          </View>
        </TouchableOpacity>

        <Text style={{ margin: 10 }}>{props.route.params.item.quantity}</Text>
        <TouchableOpacity
          onPress={() => props.subtractQuantity(props.route.params.item.id)}
        >
          <View
            style={{
              backgroundColor: "blue",
              width: 20,
              margin: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            -
          </View>
        </TouchableOpacity>
        <Text>
          Total Price:
          {props.route.params.item.quantity * props.route.params.item.price}
        </Text>

        <TouchableOpacity
          onPress={() => props.subtractQuantity(props.route.params.item.id)}
        >
          <View
            style={{
              backgroundColor: "blue"
            }}
          >
            Add to Cart
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (data) => {
      return dispatch(addQuantity(data));
    },
    removeItem: (item_id) => {
      return dispatch(removeItem(item_id));
    },

    subtractQuantity: (item) => {
      return dispatch(subtractQuantity(item));
    }
  };
};
const mapSateToprops = (state) => {
  return state.reducer;
};

export default connect(mapSateToprops, mapDispatchToProps)(DetailsScreen);
