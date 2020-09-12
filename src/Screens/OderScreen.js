import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.viewOne}>
      <View>
        <Image
          source={{
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/81wZygNFkpL._SX425_.jpg",
          }}
          style={{ height: 154, width: 114, borderRadius: 20, margin: 10 }}
        />
      </View>
      <View style={styles.viewthree}>
        <Text>Title</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewOne: {
    //  flex:1,
    flexDirection: "column",
    backgroundColor: "gray",
    height: 200,
    width: "95%",
    borderRadius: 30,
    marginLeft: 10,
  },
  viewthree: {
    flexDirection:"row"
  },
});
export default LoginScreen;
