import React from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TextInput,  KeyboardAvoidingView
} from "react-native";
import OtpImage from "../Image/OtpImage.png";
import { CartButton } from "../Componets/UI/CartButton";
import { OtpNumber } from "../Componets/OtpNumber";

const PhoneOtp = (props) => {
 const [otpcompo,setotpcompo]=React.useState(false)
//  setTimeout(() => {
//    setotpcompo(true)
//  }, 4000);
  return (
   
    <View style={styles.container}>
      <ImageBackground source={OtpImage} style={styles.image}>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
     
     >
     {!otpcompo?(
       
       
       <View style={{ marginTop: 390, padding: 20 }}>
          <Text style={{fontSize:20,fontWeight:'500'}}>Let`s get your started</Text>
          <View
            style={{
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "black",
              paddingRight: 10,
              paddingLeft: 10,
              borderRadius:10,
              marginTop:5

            }}
          >
            <Text>
              +91|{" "}
              <TextInput
             
              style={{padding:9,width:250}}
                placeholder="Your phone number"
                keyboardType="phone-pad"
              />
            </Text>
          </View>
          <View>
           
            <Text style={{alignSelf:'center',fontWeight:'400'}}>we will send you OTP on this number</Text>
            <View style={{alignSelf:'center',marginTop:9}}>
            <CartButton title="Get OTP" />
            </View>
            
          </View>
        </View>
        
        ):(<OtpNumber />)}
      
        </KeyboardAvoidingView>
 
      </ImageBackground>
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    marginTop:20,
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default PhoneOtp;

//Let`s get your started
// Your phone number
// we will send you OTP on this number
