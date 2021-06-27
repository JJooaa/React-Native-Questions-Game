import axios from "axios";
import shuffle from "shuffle-array";

export const fetchQuestions = async () => {
    const response = await axios.get("http://87.92.228.33:5000/questions");
    return shuffle(response.data);
};
