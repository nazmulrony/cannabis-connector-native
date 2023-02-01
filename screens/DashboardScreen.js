import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DashboardScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>DashboardScreen</Text>
        </View>
    );
};

export default DashboardScreen;

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
