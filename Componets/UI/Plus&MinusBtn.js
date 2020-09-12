import React from "react";
import { Button,StyleSheet} from "react-native";

const PlusMinusBtn = (props) => {
  return (
    <Button
      type="outline"
      buttonStyle={[styles.button, { width: 32 }]}
      title={props.title}
      onPress={props.onPress}
      titleStyle={styles.titleStyle}
      disabled={props.disabled}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#f15b5d",
  },

  button: {
    width: 30,
    height: 30,
    borderColor: "#f15b5d",
    borderWidth: 0.3,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default PlusMinusBtn;
