import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import PlusMinusBtn from "./UI/Plus&MinusBtn";

import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../Screens/addtocart";
import AddToCartButton from "./addToCartButton";

const Products = (props) => {
  console.log("items product", props.item);
  // const Cart = useSelector((state) => state.reducer.addedItems);
  const [isViable, setViable] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  const dispatch = useDispatch();
  const addtocart = (id) => {
    console.log(id);
    dispatch({
      type: "ADD_TO_CART",
      id: id,
    });

    dispatch({
      type: "IF_ADDED",
      id: id,
    });
    setViable(true);
    setQuantity(props.item.quantity);
  };
  function _onAdd(id) {
    dispatch({
      type: "ADD_QUANTITY",
      id: id,
    });
    setQuantity(props.item.quantity);
  }
  function _onSub(id) {
    dispatch({
      type: "SUB_QUANTITY",
      id: id,
    });
    setQuantity(props.item.quantity);
    if (quantity === 1) {
      setViable(false);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "#E5E5E5",
        borderWidth: 1,
      
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        margin: 5,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 150,
          borderRadius: 10,
        }}
        source={{ uri: props.item.image }}
      />
      <View style={{ marginHorizontal: 10, marginTop: 8 }}>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 22 }}>
            {props.item.title}
          </Text>
        </View>
        <View>
          <Text sstyle={null}>
            {"Saved " + props.item.saved}
          </Text>
          <Text style={null}>
            {"Mrp " + props.item.mrp}
          </Text>
          <Text style={null}>
            {"Rs " + props.item.price}
          </Text>

          <Text style={null}>
            {"Unit " + props.item.kg}
          </Text>
        </View>
      </View>
      {!isViable ? (
        <AddToCartButton onPress={() => addtocart(props.item.id)} />
      ) : null}
      {isViable ? (
        <AddToCart
          onPress={(id) => _onAdd(props.item.id)}
          onSub={(id) => _onSub(props.item.id)}
          quantity={quantity}
        />
      ) : null}
    </View>
  );
};

export default Products;
// kiya  haikarra ??
