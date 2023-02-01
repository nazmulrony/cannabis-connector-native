import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../constants/style";
import Input from "../ui/Input";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../ui/PrimaryButton";
import axios from "axios";
import TextButton from "../ui/TextButton";

const SignInScreen = ({ navigation }) => {
    const [inputs, setInputs] = useState({ email: null, password: null });

    const inputChangeHandler = (identifier, enteredText) => {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [identifier]: enteredText,
            };
        });
    };

    const signInHandler = () => {
        axios
            .post("http://65.108.85.46:8001/api/v1/auth/login", {
                email: inputs.email,
                password: inputs.password,
            })
            .then((response) => {
                console.log(response.data.company.license_type);
                // console.log(response.data);
                if (response?.data?.role) {
                    navigation.navigate("DrawerNavigator");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.image}
                />
            </View>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subTitle}>
                Welcome Back to Cannabis Connecter
            </Text>
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                // behavior="padding"
                style={styles.inputContainer}
            >
                <Input
                    label="Email"
                    inputConfig={{
                        placeholder: "Enter your email",
                        onChangeText: inputChangeHandler.bind(this, "email"),
                    }}
                />
                <Input
                    label="Password"
                    inputConfig={{
                        placeholder: "Enter your password",
                        secureTextEntry: true,
                        onChangeText: inputChangeHandler.bind(this, "password"),
                    }}
                />
            </KeyboardAvoidingView>
            <PrimaryButton
                onPress={signInHandler}
                style={{ marginVertical: 16 }}
            >
                Sign In
            </PrimaryButton>
            <View style={styles.signUpTextContainer}>
                <Text>Don't have an account? </Text>
                <TextButton>Sign Up</TextButton>
            </View>
        </ScrollView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        // paddingBottom: 50,
    },
    imageContainer: {
        marginTop: 115,
        alignItems: "center",
    },
    image: {
        height: 107,
        width: 144,
    },
    title: {
        marginTop: 56,
        fontSize: 22,
        fontWeight: "600",
        color: GlobalStyles.colors.gray700,
    },
    subTitle: {
        fontSizeL: 16,
        color: GlobalStyles.colors.gray300,
        marginTop: 4,
        marginBottom: 32,
    },
    inputContainer: {
        flex: 1,
    },
    signUpTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
    },
});
