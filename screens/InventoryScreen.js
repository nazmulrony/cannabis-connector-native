import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InventoryScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Inventory Screen</Text>
        </View>
    );
};

export default InventoryScreen;

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
