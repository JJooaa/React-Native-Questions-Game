import "react-native-gesture-handler";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
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
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeBackgroundColor: "none",
                    activeTintColor: "#46F8C1",
                    inactiveTintColor: "white",
                    inactiveBackgroundColor: "#011F4B",
                    labelStyle: { fontSize: 14 },
                    style: { backgroundColor: "#011F4B", borderTopWidth: 0 },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="home"
                                size={24}
                                color={focused ? "#46F8C1" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Play"
                    component={GameScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="play"
                                size={26}
                                color={focused ? "#46F8C1" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Leaderboards"
                    component={Leaderboards}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons
                                name="leaderboard"
                                size={26}
                                color={focused ? "#46F8C1" : "white"}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Submit"
                    component={SubmitScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <MaterialIcons
                                name="post-add"
                                size={26}
                                color={focused ? "#46F8C1" : "white"}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
