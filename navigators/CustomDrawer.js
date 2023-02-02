import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { GlobalStyles } from "../constants/style";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import TestDropDown from "./TestDropDown";

const auctionScreens = [
    { name: "All Auctions", target: "AllAuctionsScreen" },
    { name: "My Auctions", target: "MyAuctionsScreen" },
    { name: "Proposal", target: "ProposalScreen" },
];

const ordersScreen = [
    { name: "Received Orders", target: "ReceivedOrdersScreen" },
    { name: "My Orders", target: "MyOrdersScreen" },
];

const CustomDrawer = (props) => {
    const [activeScreen, setActiveScreen] = useState(null);
    const [activeLabel, setActiveLabel] = useState(null);
    // console.log(activeParent);
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
                {/* <DrawerItem
                    label={"Orders"}
                    onPress={() => {
                        props.navigation.navigate("OrdersScreen");
                        setActiveScreen("Orders");
                        setActiveParent(null);
                    }}
                    focused={activeScreen === "Orders"}
                /> */}

                <TestDropDown
                    label={"Auction"}
                    screens={auctionScreens}
                    onPress={setActiveLabel}
                    activeLabel={activeLabel}
                    icon={
                        <FontAwesome
                            name="gavel"
                            size={18}
                            color={
                                activeLabel === "Auction" ? "#4CAF50" : "black"
                            }
                        />
                    }
                />
                <TestDropDown
                    label={"Orders"}
                    screens={ordersScreen}
                    onPress={setActiveLabel}
                    activeLabel={activeLabel}
                    icon={
                        <AntDesign
                            name="shoppingcart"
                            size={18}
                            color={
                                activeLabel === "Orders" ? "#4CAF50" : "black"
                            }
                        />
                    }
                />
                {/* <DrawerItem
                    label={"Orders"}
                    onPress={() => {
                        props.navigation.navigate("OrdersScreen");
                        setActiveScreen("Orders");
                        setActiveParent(null);
                    }}
                    focused={activeScreen === "Orders"}
                />
                <DrawerItem
                    label={"Orders"}
                    onPress={() => {
                        props.navigation.navigate("OrdersScreen");
                        setActiveScreen("Orders");
                        setActiveParent(null);
                    }}
                    focused={activeScreen === "Orders"}
                />
                <DrawerItem
                    label={"Orders"}
                    onPress={() => {
                        props.navigation.navigate("OrdersScreen");
                        setActiveScreen("Orders");
                        setActiveParent(null);
                    }}
                    focused={activeScreen === "Orders"}
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
