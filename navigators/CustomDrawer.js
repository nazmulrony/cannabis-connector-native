import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { GlobalStyles } from "../constants/style";
import AnimatedDropDownMenu from "./AnimatedDropDownMenu";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import TestDropDown from "./TestDropDown";

const auctionScreens = [
    { label: "All Auctions", target: "AllAuctionsScreen" },
    { label: "My Auctions", target: "MyAuctionsScreen" },
    { label: "Proposal", target: "ProposalScreen" },
];

const ordersScreen = [
    { label: "Received Orders", target: "ReceivedOrdersScreen" },
    { label: "My Orders", target: "MyOrdersScreen" },
];

const CustomDrawer = (props) => {
    const [activeScreen, setActiveScreen] = useState(null);
    const [activeParent, setActiveParent] = useState(null);
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
                {/* <DrawerItemList {...props} /> */}

                <DrawerItem
                    label={"Orders"}
                    onPress={() => {
                        props.navigation.navigate("OrdersScreen");
                        setActiveScreen("Orders");
                        setActiveParent(null);
                    }}
                    focused={activeScreen === "Orders"}
                />
                {/* <AnimatedDropDownMenu
                    label={"Auction"}
                    activeParent={activeParent}
                    icon={
                        <FontAwesome
                            name="gavel"
                            size={18}
                            color={
                                activeParent === "Auction"
                                    ? GlobalStyles.colors.primary500
                                    : "black"
                            }
                        />
                    }
                >
                    <DrawerItem
                        label={"All Auctions"}
                        onPress={() => {
                            props.navigation.navigate("AllAuctionsScreen");
                            setActiveScreen("All Auction");
                            setActiveParent("Auction");
                        }}
                        style={{
                            borderLeftWidth: 3,
                            borderLeftColor: "#4CAF50",
                        }}
                        focused={activeScreen === "All Auction"}
                    />
                    <DrawerItem
                        label={"My Auctions"}
                        onPress={() => {
                            props.navigation.navigate("MyAuctionsScreen");
                            setActiveScreen("My Auction");
                            setActiveParent("Auction");
                        }}
                        focused={activeScreen === "My Auction"}
                    />
                    <DrawerItem
                        label={"Proposal"}
                        onPress={() => {
                            props.navigation.navigate("ProposalScreen");
                            setActiveScreen("Proposal");
                            setActiveParent("Auction");
                        }}
                        focused={activeScreen === "Proposal"}
                    />
                </AnimatedDropDownMenu> */}
                <TestDropDown
                    label={"Auction"}
                    screens={auctionScreens}
                    onPress={setActiveParent}
                    activeParent={activeParent}
                    icon={
                        <FontAwesome
                            name="gavel"
                            size={18}
                            color={
                                activeParent === "Auction" ? "#4CAF50" : "black"
                            }
                        />
                    }
                />
                <TestDropDown
                    label={"Orders"}
                    screens={ordersScreen}
                    onPress={setActiveParent}
                    activeParent={activeParent}
                    icon={
                        <AntDesign
                            name="shoppingcart"
                            size={18}
                            color={
                                activeParent === "Orders" ? "#4CAF50" : "black"
                            }
                        />
                    }
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
