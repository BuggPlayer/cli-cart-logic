import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Text } from "react-native";

const Model = (props) => {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        height: "60%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View>
          <Text>hello</Text>
        </View>
      </RBSheet>
    </View>
  );
};

export default Model;
