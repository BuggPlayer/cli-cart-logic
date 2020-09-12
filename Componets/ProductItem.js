import React from "react";
import { View, FlatList } from "react-native";

import { products } from "../data";

import Products from "./product";
const ProductItem = (props) => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return <Products item={item} />;
        }}
      />
    </View>
  );
};

export default ProductItem;
