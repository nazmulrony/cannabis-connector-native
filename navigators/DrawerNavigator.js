import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/DashboardScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomDrawer from "./CustomDrawer";
import AuctionScreen from "../screens/AuctionScreen";
import OrdersScreen from "../screens/OrdersScreen";
import AllAuctionScreen from "../screens/AllAuctionScreen";
import MyAuctionScreen from "../screens/MyAuctionScreen";
import ProposalScreen from "../screens/ProposalScreen";
import ReceivedOrdersScreen from "../screens/ReceivedOrdersScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <Pressable
                        onPress={() => navigation.openDrawer()}
                        style={({ pressed }) =>
                            pressed
                                ? [styles.profileImageContainer, styles.pressed]
                                : styles.profileImageContainer
                        }
                    >
                        <Image
                            source={require("../assets/images/person.jpg")}
                            style={styles.profileImage}
                        />
                    </Pressable>
                ),
            })}
        >
            <Drawer.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
            />
            <Drawer.Screen name="AuctionScreen" component={AuctionScreen} />
            <Drawer.Screen
                name="AllAuctionsScreen"
                component={AllAuctionScreen}
            />
            <Drawer.Screen
                name="MyAuctionsScreen"
                component={MyAuctionScreen}
            />
            <Drawer.Screen name="ProposalScreen" component={ProposalScreen} />
            <Drawer.Screen
                name="ReceivedOrdersScreen"
                component={ReceivedOrdersScreen}
            />
            <Drawer.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
    profileImageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: "hidden",
        marginLeft: 16,
    },
    pressed: {
        opacity: 0.7,
    },
    profileImage: {
        height: "100%",
        width: "100%",
    },
});
