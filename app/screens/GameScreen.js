import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Game from "../components/Game";
import Start from "../components/Start";
import WrongAnswer from "../components/WrongAnswer";
import shuffle from "shuffle-array";

const GameScreen = () => {
    const [display, setDisplay] = useState(0);
    const [playerValues, setPlayerValues] = useState({
        user: "",
        score: 0,
    });
    const [data, setData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [nextButton, setNextButton] = useState(false);
    const [restartButton, setRestartButton] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [currentAnswers, setCurrentAnswers] = useState([]);

    const startGame = () => {
        if (playerValues.user.match(/^[a-zA-Z0-9]/)) {
            handleQuestion();
            setDisplay(1);
        }
    };

    const handleQuestion = () => {
        let currQ = data.pop();
        setCurrentQuestion(currQ);
        setCurrentAnswers(
            shuffle([...currQ.incorrectAnswer, currQ.correctAnswer])
        );
    };

    const handleCorrectAnswer = (item) => {
        if (!clicked) {
            for (let i = 0; i < currentQuestion.incorrectAnswer.length; i++) {
                if (item === currentQuestion.incorrectAnswer[i]) {
                    setRestartButton(true);
                    setClicked(true);
                }
            }
        }
        if (!clicked) {
            if (item === currentQuestion.correctAnswer) {
                setPlayerValues((prevState) => ({
                    ...prevState,
                    score: (prevState.score += 1),
                }));
                setNextButton(true);
                setClicked(true);
            }
        }
    };

    const handleNextButton = () => {
        setNextButton(false);
        setClicked(false);
    };

    const handleRestart = () => {
        setDisplay(2);
        setClicked(false);
        setRestartButton(false);
    };

    const handleHardRestart = () => {
        setDisplay(0);
        setPlayerValues((prevState) => ({
            ...prevState,
            score: 0,
        }));
    };

    return (
        <SafeAreaView style={styles.gameContainer}>
            {display === 0 ? (
                <Start
                    playerValues={playerValues}
                    setPlayerValues={setPlayerValues}
                    startGame={startGame}
                    setData={setData}
                    data={data}
                    currentQuestion={currentQuestion}
                    currentAnswers={currentAnswers}
                />
            ) : null}
            {display === 1 ? (
                <Game
                    playerValues={playerValues}
                    currentQuestion={currentQuestion}
                    handleQuestion={handleQuestion}
                    handleCorrectAnswer={handleCorrectAnswer}
                    nextButton={nextButton}
                    handleNextButton={handleNextButton}
                    restartButton={restartButton}
                    clicked={clicked}
                    handleRestart={handleRestart}
                    currentAnswers={currentAnswers}
                />
            ) : null}
            {display === 2 ? (
                <WrongAnswer
                    handleHardRestart={handleHardRestart}
                    playerValues={playerValues}
                />
            ) : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        backgroundColor: "#011f4b",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GameScreen;
