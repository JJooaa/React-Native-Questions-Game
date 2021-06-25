import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const Start = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>
                Please enter name below and press "Start"
            </Text>
            <TextInput
                style={styles.input}
                value={props.user}
                onChangeText={props.setUser}
                placeholder="name here"
            />
            <TouchableOpacity
                onPress={() => props.startGame()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    inputContainer: {
        width: "90%",
        backgroundColor: "#013074",
        flex: 0,
        height: 300,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 8,
    },
    input: {
        height: 50,
        width: "70%",
        borderWidth: 0,
        textAlign: "center",
        fontSize: 20,
        color: "black",
        backgroundColor: "gainsboro",
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
    },
    button: {
        height: 50,
        width: 125,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#46F8C1",
        borderRadius: 15,
    },
});

export default Start;
