import React, { Component } from "react";
import RazorpayCheckout from "react-native-razorpay";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const Razorpay = (props) => {
  console.log('from razorpay',props)
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {
        var options = {
          description: "Credits towards consultation", // description
          image: "https://i.imgur.com/3g7nmJC.png", // image
          currency: "INR",
          key: 'rzp_test_R35cwM2Z5iHjvb', // rzp_test_lpoFU3fTbYZDu3 Something of this type!
          amount: props.amount,
          name: props.name,
          order_id: props.orderId, //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
          prefill: {
            email: props.email,
            contact: props.contact,
            name: props.contact_name
          },
          theme: { color: "#e23737" }
        };
        RazorpayCheckout.open(options)
          .then((data) => {
            // handle success
            console.warn(`Success: ${data.razorpay_payment_id}`);
          })
          .catch((error) => {
            // handle failure
            console.warn(`Error: ${error.code} | ${error.description}`);
          });
      }}
    >
      <Text style={styles.button_text_small}>
        Checkout
    <Text style={styles.button_text}> ₹ {props.amount}</Text>
      </Text>
    </TouchableHighlight>
  );
};

export default Razorpay;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(249,194,1)",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5
  },
  button_text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold"
  },
  button_text_small: {
    fontFamily: "Poppins-Light",
    color: "white",
    fontSize: 16
  }
});
