import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";


export const CartButton = (props) => {
  return (
    
      <View style={styles.viewOne}>
  <Text>{props.title}</Text>
      </View>
      
  );
};
const styles = StyleSheet.create({
  viewOne: {
    borderRadius: 5,
    backgroundColor: "#7DCEA0",
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 10,
    width: 120,
    height: 40,
    marginRight: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
  
});

