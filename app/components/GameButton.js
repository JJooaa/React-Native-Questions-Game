import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GameButton = (props) => {
    const nextButton = () => {
        if (props.nextButton === true) {
            return (
                <View style={{ flex: 0.14 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: "center",
                            color: "#46F8C1",
                        }}
                    >
                        Correct Answer!
                    </Text>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            height: "90%",
                            width: "50%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "#46F8C1",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 10,
                        }}
                        onPress={() => {
                            props.handleQuestion();
                            props.handleNextButton();
                        }}
                    >
                        <Text style={{ color: "black", fontSize: 20 }}>
                            Next Question
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    const restartButton = () => {
        if (props.restartButton === true) {
            return (
                <View style={{ flex: 0.14 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: "center",
                            color: "tomato",
                        }}
                    >
                        Wrong Answer!
                    </Text>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            height: "90%",
                            width: "40%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "tomato",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            marginTop: 10,
                        }}
                        onPress={() => props.handleRestart()}
                    >
                        <Text style={{ color: "black", fontSize: 20 }}>
                            Restart Game
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    };

    return (
        <>
            {restartButton()}
            {nextButton()}
        </>
    );
};

export default GameButton;
