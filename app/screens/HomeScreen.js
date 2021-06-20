import React from "react";
import {
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <Text style={styles.header}>Coders Q&A Game</Text>
            <Text style={styles.para}>
                Compete against others or just your- self in this multiple
                answer coding questions game. {"\n"}
                {"\n"}You will be given questions and if you answer incorrectly,
                you lose. {"\n"}
                {"\n"}No need for registering an account. When pressing play,
                add your name to the prompt and continue, so you can be listed
                in the leaderboards.
            </Text>
            <Text style={styles.helper}>Click "Play" to start a game!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Play")}
                style={styles.button}
            >
                <Text style={{ color: "black", fontSize: 20 }}>PLAY</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: "#011f4b",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    header: {
        color: "#46F8C1",
        fontSize: 30,
        textDecorationLine: "underline",
    },
    para: {
        color: "white",
        fontSize: 20,
        margin: 20,
        textAlign: "center",
    },
    helper: {
        color: "white",
        fontSize: 18,
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
