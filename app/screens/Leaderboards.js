import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar, } from "react-native";

export default function Leaderboards() {
    return (
        <SafeAreaView style={styles.leaderboards}>
            <Text style={styles.text}>Leaderboards</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    leaderboards: {
        backgroundColor: "#011f4b",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
});
