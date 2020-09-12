import React from "react";
import { View, TouchableOpacity, Text ,Button} from "react-native";
;
import {firebase,Auth} from '../App'
const LoginScreen = (props) => {
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
    );
  }
 
  return (
    <View>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
};

export default LoginScreen;
