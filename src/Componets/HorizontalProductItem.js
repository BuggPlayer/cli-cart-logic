import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import { CartButton } from "./UI/CartButton";
import Colors from "../Constants/Colors";
import { products } from "../data";
const HorizontalProductItem = (props) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({ item }) => {
          return (
            <View style={styles.product}>
              <TouchableOpacity>
                <Image
                  style={styles.foodImage}
                  source={{
                    uri: item.image,
                  }}
                />

                <View style={styles.actions}>
                  <Text>kg/gm</Text>
                  <Text style={{ textDecorationLine: "line-through" }}>
                    MRP: 200
                  </Text>
                  <Text>₹:{item.price}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    height: "auto",
    width: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },

  choiceView: {
    height: 40,
    marginLeft: 10,
    marginRight: 30,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.2,
    justifyContent: "flex-start",
  },

  foodImage: {
    borderRadius: 10,
    height: 150,
    width: 145,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 5,
  },
  actions: {
    //flex: 1,
    padding: 5,
    justifyContent: "center",
  },

  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    borderRadius: 10,
    height: "80%",
    width: 125,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#581845",
    marginTop: 15,
    marginLeft: 10,
  },
  details: {
    flex: 1,
    padding: 5,
    justifyContent: "space-around",
  },

  title: {
    fontSize: 14,
    fontWeight: "500",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 5,
    color: Colors.button,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  btnaddtocart: {
    width: 80,
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginLeft: 100,
    marginTop: 120,

    position: "absolute",
    borderRadius: 20,
  },
  text: {
    marginBottom: 10,
  },
  kg: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 30,
    textAlign: "center",
    borderColor: "#20232a",
  },
});

export default HorizontalProductItem;
