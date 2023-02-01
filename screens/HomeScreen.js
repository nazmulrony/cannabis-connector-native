import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
    },
});
