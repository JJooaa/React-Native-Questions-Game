import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import GameButton from "./GameButton";

const Game = (props) => {
    let i;
    for (i = 0; i < props.currentQuestion.incorrect_answer.length; i++);
    return (
        <View style={game.questionContainer}>
            <View style={game.headerContainer}>
                <Text style={game.headerP}>{props.user}</Text>
                <Text style={game.headerP}>{`Score ${props.count}`}</Text>
            </View>

            <View style={game.questionCard}>
                <Text
                    style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 26,
                    }}
                >
                    {props.currentQuestion.title}
                </Text>
            </View>

            <View
                style={{
                    flex: 0.55,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                {props.handleNewQuestion().map((item) => (
                    <TouchableOpacity
                        disabled={props.clicked ? true : false}
                        style={
                            props.clicked &&
                            props.currentQuestion.correct_answer === item
                                ? game.answerBox2
                                : game.answerBox
                        }
                        key={item}
                        onPress={() => props.handleCorrectAnswer(item)}
                    >
                        <Text style={game.answerP}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <GameButton
                handleNextButton={props.handleNextButton}
                nextButton={props.nextButton}
                restartButton={props.restartButton}
                handleRestart={props.handleRestart}
            />
        </View>
    );
};

const game = StyleSheet.create({
    questionContainer: {
        flex: 1,
        backgroundColor: "#011F4B",
        width: "100%",
    },
    headerContainer: {
        width: "100%",
        backgroundColor: "#011F4B",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
    },
    headerP: {
        fontSize: 20,
        color: "#46F8C1",
        paddingRight: 20,
        paddingLeft: 20,
        letterSpacing: 1,
    },
    questionCard: {
        flex: 0.27,
        width: "92.5%",
        backgroundColor: "#013074",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        borderRadius: 8,
    },
    questionCardP: {
        color: "gainsboro",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        textDecorationLine: "underline",
    },
    answerBox: {
        width: "92.5%",
        backgroundColor: "#013074",
        flex: 0.175,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    answerBox2: {
        width: "92.5%",
        backgroundColor: "green",
        flex: 0.175,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    answerBox3: {
        width: "92.5%",
        backgroundColor: "red",
        flex: 0.175,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    answerP: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
});

export default Game;
