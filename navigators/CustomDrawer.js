import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { GlobalStyles } from "../constants/style";

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.userSection}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={require("../assets/images/person.jpg")}
                        style={styles.profileImage}
                    />
                </View>
                <View>
                    <Text style={styles.userName}>Shahadat Robin</Text>
                    <Text style={styles.userRole}>Grower</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                {/* <DrawerItem
                    label={"Auction"}
                    onPress={() => props.navigation.navigate("AuctionScreen")}
                />
                <DrawerItem
                    label={"Orders"}
                    onPress={() => props.navigation.navigate("OrdersScreen")}
                /> */}
            </DrawerContentScrollView>
        </View>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },
    userSection: {
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    profileImageContainer: {
        marginRight: 8,
        height: 44,
        width: 44,
        borderRadius: 22,
        overflow: "hidden",
    },
    profileImage: {
        height: "100%",
        width: "100%",
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
    },
    userRole: {
        fontSize: 12,
        color: GlobalStyles.colors.gray300,
    },
});
