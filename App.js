import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import Leaderboards from "./app/screens/Leaderboards";
import SubmitScreen from "./app/screens/SubmitScreen";
import GameScreen from "./app/screens/GameScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//import TabBar from "./app/components/TabBar";

const Tab = createBottomTabNavigator();

export default function App() {
    // Between main or welcome page
    const [display, setDisplay] = useState(1);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeBackgroundColor: "#46F8C1",
                    activeTintColor: "black",
                    inactiveTintColor: "black",
                    inactiveBackgroundColor: "white",
                    labelStyle: { fontSize: 14 },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name="home" size={24} />,
                    }}
                />
                <Tab.Screen
                    name="Play"
                    component={GameScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name="play" size={26} />,
                    }}
                />
                <Tab.Screen
                    name="Leaderboards"
                    component={Leaderboards}
                    options={{
                        tabBarIcon: () => (
                            <MaterialIcons name="leaderboard" size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Submit"
                    component={SubmitScreen}
                    options={{
                        tabBarIcon: () => (
                            <MaterialIcons name="post-add" size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
