import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const placeHolderData = [
    {
        id: 1,
        title: "What is React Native",
        correct_answer: "Mobile App Development framework",
        incorrect_answer: [
            "Web App Development framework",
            "123nice",
            "asjldhasd123",
        ],
    },
    {
        id: 2,
        title: "What is poop",
        correct_answer: "Food after digestion",
        incorrect_answer: [
            "Web App Development framework",
            "poppop",
            "asdasdasdasd",
        ],
    },
    {
        id: 3,
        title: "What is pee",
        correct_answer: "asdasdasdasd",
        incorrect_answer: [
            "fdsgdfsgsdfgdsfg",
            "sdfgdsfgsdfg",
            "sdfgsdfgdsfgdsfg",
        ],
    },
];

const GameScreen = () => {
    const [display, setDisplay] = useState(false);
    const [user, setUser] = useState("");
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    // Here we will push the random question from the data array and then render it.
    const [currentQuestion, setCurrentQuestion] = useState({
        id: 2,
        title: "What is poop",
        correct_answer: "Food after digestion",
        incorrect_answer: [
            "Web App Development framework",
            "poppop",
            "asdasdasdasd",
        ],
    },);

    const formatQuestion = () => {
        let final = [];
        const q = [];
        q.push(currentQuestion.correct_answer);
        currentQuestion.incorrect_answer.forEach(item => q.push(item));
        console.log(q);
        return q;
    };

    const startGame = () => {
        if (user.length > 0) {
            setDisplay(true);
        }
    };

    return (
        <SafeAreaView style={styles.gameContainer}>
            {display ? (
                <View style={game.questionContainer}>
                    <View style={game.headerContainer}>
                        <Text style={game.headerP}>{user}</Text>
                        <Text style={game.headerP}>{`Score ${count}`}</Text>
                    </View>
                    <View style={game.questionCard}>
                        <Text style={game.questionCardP}>
                            Question {count + 1}
                        </Text>
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 26,
                            }}
                        >
                            What is React Native Used for?
                        </Text>
                    </View>
                    <View style={{flex: 0.55, justifyContent: "space-evenly", alignItems: "center"}}>
                        {formatQuestion().map((item) => (
                           <TouchableOpacity style={game.answerBox}>
                               <Text style={game.answerP}>{item}</Text>
                           </TouchableOpacity>
                        ))}
                    </View>
                    <Button onPress={() => formatQuestion()} title="Check"/>
                </View>
            ) : (
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>
                        Please enter name below and press "Start"
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={user}
                        onChangeText={setUser}
                        placeholder="name here"
                    />
                    <TouchableOpacity
                        onPress={() => startGame()}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>
            )}
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
        flex: 0.35,
        width: "92.5%",
        backgroundColor: "#013074",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 8,
    },
    questionCardP: {
        color: "gainsboro",
        fontSize: 26,
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
    answerP: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    }
});
export default GameScreen;
