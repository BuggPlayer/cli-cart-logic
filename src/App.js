import * as React from "react";

import { Provider } from "react-redux";
// import navigation from "./config/navigation";
import { Navigator } from "./navigation/navigator";
import { store } from "./Redux/store";

// import { LoginScreen } from "./Screens/LoginScreen";
//  import firebase from "@react-native-firebase/app";//get database from firebase
//  import Auth from "@react-native-firebase/auth";
// import { firebaseConfig } from "./Fire";

//   firebase.initializeApp(firebaseConfig);


//  export { firebase,Auth };


 const App=()=>{
 
  return (
    <Provider store={store}>
    <Navigator />
  </Provider>
  );
}

export default App
