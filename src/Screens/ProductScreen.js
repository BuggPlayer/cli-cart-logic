import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Product from "../Componets/product";

const ProductScreen = (props) => {
  const product = useSelector((state) => state.reducer.items);
  console.log(product);

  const filter = product.filter((data) => {
    return data.category === props.route.params.category;
  });

  console.log(filter);
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        padding: 20
      }}
    >
      <FlatList
        data={filter}
        renderItem={({ item }) => {
          console.log("items", item);
          return <Product item={item} />;
        }}
        //Setting the number of column
        // numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductScreen;
