import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { OtpInput } from "./OtpInput";
import { CartButton } from "../Componets/UI/CartButton";
export const OtpNumber = (props) => {
  const [fi, sfi] = React.useState("");
  const [si, ssi] = React.useState("");
  const [ti, sti] = React.useState("");

  const [fthi, sfthi] = React.useState("");
 var firstInput=React.useRef(null)
 const SecondInput=React.useRef(null)
 const thirdInput=React.useRef(null)

//  React.useEffect(()=>{
//   firstInput.current.focus();
//  },[])

  function changeInput(type,value) {
    switch (type) {
       
      case "firstInput":
       console.log(value);
       
            sfi(value);
            // if(firstInput != ''){
            //   SecondInput.current.focus();
            // }
       
        break;
      case "SecondInput":
       
        ssi(value);
        break;
      case "thirdInput":
       
        sti(value);
        break;
      case "fouthInput":
      
        sfthi(value);
        break;
        default :
        break;
    }
  }

  return (
    <View style={{ marginTop: 400 }}>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <OtpInput value={fi} ref={(x)=>firstInput=x} onChangeText={(value)=>changeInput('firstInput',value)} />
        <OtpInput value={si} ref={SecondInput} onChangeText={(value)=>changeInput('SecondInput',value)}/>
        <OtpInput value={ti} ref={thirdInput} onChangeText={(value)=>changeInput('thirdInput',value)}/>
        <OtpInput value={fthi} onChangeText={(value)=>changeInput('fouthInput',value)}/>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <CartButton title="Let's Start" />
      </View>
    </View>
  );
};
