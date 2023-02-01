import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MarketPlaceScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Market PlaceScreen</Text>
        </View>
    );
};

export default MarketPlaceScreen;

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
