/*
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Leaderboards from "../screens/Leaderboards";

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Leaderboards" component={Leaderboards} />
        </Tab.Navigator>
    );
};

export default TabBar;
