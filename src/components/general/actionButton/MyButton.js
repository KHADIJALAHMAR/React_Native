import { View, Text } from "react-native";
import React from "react";
import { Button, withTheme } from "react-native-paper";

const MyButton = (props) => {
  return (
    <View>
      <Button onPress={props.onPress} name={props.name} style={props.style}>
        {props.title}
      </Button>
    </View>
  );
};

export default withTheme(MyButton);
