import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";

const Input = ({ label, inputConfig }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...inputConfig} style={styles.input} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 10,
    },
    label: {
        color: GlobalStyles.colors.gray700,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray100,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
});
