import React from "react";
import {
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    Button,
} from "react-native";

export default function SubmitScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.welcomeContainer}>
            <Text style={styles.text}>Add a question.</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        backgroundColor: "#011f4b",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    text: {
        color: "white",
    },
});
