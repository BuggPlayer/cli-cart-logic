import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ArrowIcon from "../../Image/arrow_icon.png";
import { useNavigation } from "@react-navigation/native";

const ModelBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainemodel}>
      <TouchableOpacity
        onPress={() => {
          // console.log(props.id , "iddddddddd ");
          navigation.navigate("payment");
        }}
      >
        <View style={styles.options}>
          <Text style={styles.optionsText}>Select Payment Method</Text>
          <Image source={ArrowIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // console.log(props.id , "iddddddddd ");
          navigation.navigate("map");
        }}
      >
        <View style={styles.options}>
          <Text style={styles.optionsText}>Change Your Address</Text>
          <Image source={ArrowIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.options}>
          <Text style={styles.optionsText}>Select Delivery Type</Text>
          <Image source={ArrowIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainemodel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
  },
  options: {
    display: "flex",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    borderTopColor: "#DFDFDF",
    borderTopWidth: 0.5,
    borderBottomColor: "#DFDFDF",
    borderBottomWidth: 0.5,
  },
  optionsText: {
    fontSize: 18,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default ModelBtn;
