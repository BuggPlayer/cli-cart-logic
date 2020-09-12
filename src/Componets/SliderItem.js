import React from "react";
import { View, TouchableOpacity, Image, StyleSheet ,FlatList} from "react-native";
import { banner } from "../data";
const SliderItem = (props) => {
  return (
    
    <View >
<FlatList
horizontal data={banner} renderItem={({item})=>{
  return(
    <TouchableOpacity style={{margin:10}}>
    <Image
      style={{height:200,width:300,borderRadius:20}}
      source={{
        uri:item.image
}}
    />
  </TouchableOpacity>
  )
}} />
     
    </View>
  );
};

export default SliderItem;
