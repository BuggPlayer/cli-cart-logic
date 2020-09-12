import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";

export const OtpInput = (props) => {
  return (
    
     
      <TextInput
      ref={props.ref}
      maxLength={1}
      value={props.value}
     onChangeText={props.onChangeText}
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "black",
          width: 45,
          height: 45,
          borderRadius: 8,
          marginLeft:10,
          fontSize:20,
         
          textAlign:'center'
        }}
      />
    
     
     
   
  );
};
