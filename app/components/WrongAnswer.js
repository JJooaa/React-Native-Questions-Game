import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const WrongAnswer = (props) => {
    return (
        <View
            style={{
                flex: 0.7,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={styles.text}>Game Over!</Text>
            <Text style={styles.text}>Joa</Text>
            <Text
                style={styles.text}
            >{`Score: ${props.playerValues.score}`}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.handleHardRestart()}
            >
                <Text style={{ color: "#46F8C1", fontSize: 25 }}>
                    Restart Game
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ color: "#46F8C1", fontSize: 25 }}>
                    Save Score to Leaderboards
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#46F8C1",
        fontSize: 30,
        flex: 0.15,
    },
    button: {
        flex: 0.2,
        backgroundColor: "#013074",
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
    },
});

export default WrongAnswer;
