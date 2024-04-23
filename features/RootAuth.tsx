import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";


export const Login = () => {
    return (
        <View style={screensStyles.center}>
            <Text>Login</Text>
        </View>
    );
};

export const Registration = () => {
    return (
        <View style={screensStyles.center}>
            <Text>Registration</Text>
        </View>
    );
};

const Stack = createStackNavigator()

export const RootAuth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"login"} component={Login}/>
                <Stack.Screen name={"registration"} component={Registration}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const screensStyles = StyleSheet.create({
    border: {
        borderStyle: "solid",
        borderColor: "red",
        borderWidth: 2
    },
    center: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
    }
})

