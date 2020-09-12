import React from "react";
import { categories, products } from "./../data";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import CategoryItem from "../Componets/CategoryItem";
import HorizontalProductItem from "../Componets/HorizontalProductItem";
import SliderItem from "../Componets/SliderItem";
import ProductItem from "../Componets/ProductItem";
import Products from "../Componets/product";

const HomeScreen = (props) => {
  console.log(props);
  return (
    <>
      <ScrollView>
        <CategoryItem navigation={props.navigation} />
        <SliderItem />
        <HorizontalProductItem />

        <ProductItem />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
