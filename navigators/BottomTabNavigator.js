import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import InventoryScreen from "../screens/InventoryScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";
import SettingsScreen from "../screens/SettingsScreen";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
            <BottomTab.Screen
                name="InventoryScreen"
                component={InventoryScreen}
            />
            <BottomTab.Screen
                name="MarketPlaceScreen"
                component={MarketPlaceScreen}
            />
            <BottomTab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
