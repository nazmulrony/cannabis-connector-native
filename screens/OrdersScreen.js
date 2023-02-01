import { View, Text, StyleSheet } from "react-native";
import React from "react";

const OrdersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Orders Screen</Text>
        </View>
    );
};

export default OrdersScreen;

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
