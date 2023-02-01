import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AuctionScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Auction Screen</Text>
        </View>
    );
};

export default AuctionScreen;

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
