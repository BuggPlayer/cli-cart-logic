import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { categories } from "../data";
const CategoryItem = (props) => {
  return (
    //   <View style={styles.root}>
    //     <FlatList
    //     horizontal
    //     showsHorizontalScrollIndicator={false}
    //       data={categories}
    //       renderItem={(itemData) => {
    //         return (
    //           <View>
    //             <TouchableOpacity
    //             style={{margin:10}}
    //               onPress={() => {
    //                 //   console.log(props.category, "iddddddddd ");
    //                 // navigation.navigate("homeCate");
    //                 //  navigation.navigate("homeCate", { source: props.category });
    //               }}
    //             >
    //               <Image
    //                 style={styles.foodImage}
    //                 source={{
    //                   uri:
    //                    itemData.item.image
    //                 }}
    //               />
    //             </TouchableOpacity>
    //               <Text style={styles.title}>{itemData.item.title}</Text>
    //           </View>
    //         );
    //       }}
    //     />
    //   </View>
    // );

    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("productlist", {
                    category: item.title,
                  })
                }
              >
                <Image
                  style={{
                    margin: 3,
                    borderRadius: 20,
                    height: 100,
                    width: 100,
                  }}
                  resizeMode="cover"
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
              <Text style={{ alignSelf: "center" }}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CategoryItem;
