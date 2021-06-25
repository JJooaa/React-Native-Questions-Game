import React from "react";
import { Text, View, } from "react-native";

const WrongAnswer = () => {
    return (
        <View style={{flex: 0.5, width: "95%", height: "40%", backgroundColor: "tomato"  }}>
            <Text style={{color: "white", fontSize: 20}}>Wrong Answer</Text>
        </View>
    )
};

export default WrongAnswer