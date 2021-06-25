import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Game from "../components/Game";
import Start from "../components/Start";
import WrongAnswer from "../components/WrongAnswer";

const placeHolderData = [
    {
        id: 1,
        title: "What is React Native?",
        correct_answer: "Mobile App Development framework",
        incorrect_answer: [
            "Web App Development framework",
            "123nice",
            "asjldhasd123",
        ],
    },
    {
        id: 2,
        title: "What is Question 2?",
        correct_answer: "Answer1",
        incorrect_answer: ["Answer2", "Answer3", "Answer4"],
    },
];

const GameScreen = () => {
    const [display, setDisplay] = useState(0);
    const [user, setUser] = useState("");
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    // Here we will push the random question from the data array and then render it.
    const [currentQuestion, setCurrentQuestion] = useState();
    const [nextButton, setNextButton] = useState(false);
    const [restartButton, setRestartButton] = useState(false);
    const [clicked, setClicked] = useState(false);

    // Checks user name and starts game
    const startGame = () => {
        if (user.match(/^[a-zA-Z0-9]/)) {
            setDisplay(1);
        }
    };

    // Fetch new question
    useEffect(() => {
        setCurrentQuestion(placeHolderData[count]);
    }, [count]);

    // Handles a new question
    const handleNewQuestion = () => {
        let answers = [];
        answers.push(currentQuestion.correct_answer);
        currentQuestion.incorrect_answer.map((item) => answers.push(item));
        return answers;
    };

    //Handles answer, checks if correct or incorrect answer
    const handleCorrectAnswer = (item) => {
        if (!clicked) {
            for (let i = 0; i < currentQuestion.incorrect_answer.length; i++) {
                if (item === currentQuestion.incorrect_answer[i]) {
                    setRestartButton(true);
                    setClicked(true);
                }
            }
        }
        if (!clicked) {
            if (item === currentQuestion.correct_answer) {
                setNextButton(true);
                setClicked(true);
            }
        }
    };

    const handleNextButton = () => {
        setCount(count + 1);
        setNextButton(false);
        setClicked(false);
    };

    const handleRestart = () => {
        setDisplay(2);
    };

    return (
        <SafeAreaView style={styles.gameContainer}>
            {display === 0 ? (
                <Start user={user} setUser={setUser} startGame={startGame} />
            ) : null}
            {display === 1 ? (
                <Game
                    user={user}
                    count={count}
                    currentQuestion={currentQuestion}
                    handleNewQuestion={handleNewQuestion}
                    handleCorrectAnswer={handleCorrectAnswer}
                    nextButton={nextButton}
                    handleNextButton={handleNextButton}
                    restartButton={restartButton}
                    clicked={clicked}
                    handleRestart={handleRestart}
                />
            ) : null}
            {display === 2 ? <WrongAnswer /> : null}
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
