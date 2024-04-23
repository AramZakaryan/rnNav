// ///////// NativeStackNavigator
//
// import 'react-native-gesture-handler';
// import {Button, StyleSheet, Text} from 'react-native';
// import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
// import {NavigationContainer} from "@react-navigation/native";
// import {SafeAreaProvider} from "react-native-safe-area-context";
// import {WithSafeAreaView} from "./components/WithSafeAreaView";
//
// type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;
//
// function HomeScreen({navigation}: HomeScreenProps) {
//     return (
//         <WithSafeAreaView>
//             {/*<SafeAreaView*/}
//             {/*    style={{flex: 1, alignItems: 'center', justifyContent: 'space-between',}}>*/}
//             <Text style={{marginBottom: 30}}>
//                 Home Screen
//             </Text>
//             <Button title={"go to profile"}
//                     onPress={() => navigation.navigate("profile")}/>
//             <Button title={"go to user"}
//                     onPress={() => navigation.navigate("user")}/>
//             {/*</SafeAreaView>*/}
//         </WithSafeAreaView>
//     );
// }
//
// type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'profile'>;
//
// function ProfileScreen({navigation}: ProfileScreenProps) {
//     return (
//         <WithSafeAreaView>
//             <Text style={{marginBottom: 30}}>Profile Screen</Text>
//             <Button title={"go to home"} onPress={() => navigation.navigate("home")}/>
//             <Button title={"go to user"} onPress={() => navigation.navigate("user")}/>
//         </WithSafeAreaView>
//     );
// }
//
// type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'user'>;
//
// function UserScreen({navigation}: UserScreenProps) {
//     return (
//         <WithSafeAreaView>
//             <Text style={{marginBottom: 30}}>User Screen</Text>
//             <Button title={"go to home"} onPress={() => navigation.navigate("home")}/>
//             <Button title={"go to profile"} onPress={() => navigation.navigate("profile")}/>
//         </WithSafeAreaView>
//     );
// }
//
// type RootStackParamList = {
//     home: undefined;
//     profile: undefined;
//     user: undefined;
// };
//
// const Stack = createNativeStackNavigator<RootStackParamList>();
//
// export default function App() {
//     return (
//         <SafeAreaProvider>
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen name={"home"} component={HomeScreen}/>
//                     <Stack.Screen name={"profile"} component={ProfileScreen}/>
//                     <Stack.Screen name={"user"} component={UserScreen}/>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </SafeAreaProvider>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });


// ///////// BottomTabNavigator
//
// import * as React from 'react';
// import {Button, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//
// type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Home'>;
//
// function HomeScreen({navigation}: HomeScreenProps) {
//     return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>Home!</Text>
//             <Button title={"go to Profile"}
//                     onPress={() => navigation.navigate("Profile", {name: "Gago", age: 56})}
//             />
//             <Button title={"go to Settings"} onPress={() => navigation.navigate("Settings")}/>
//         </View>
//     );
// }
//
// type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;
//
// function ProfileScreen({route,navigation}:ProfileScreenProps) {
//     return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>Profile!</Text>
//             <Text>Hello, I am {route.params?.name}
//                 and I am {route.params?.age} old.</Text>
//             <Button title={"go to Home"}
//                     onPress={() => navigation.navigate("Home")}
//             />
//             <Button title={"go to Settings"} onPress={() => navigation.navigate("Settings")}/>
//         </View>
//     );
// }
//
// function SettingsScreen() {
//     return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }
//
// type TabParamList = {
//     Home: undefined
//     Profile: undefined | { name: String, age: number }
//     Settings: undefined
// };
//
// const Tab = createBottomTabNavigator<TabParamList>();
//
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen}/>
//                 <Tab.Screen name="Profile" component={ProfileScreen}/>
//                 <Tab.Screen name="Settings" component={SettingsScreen}/>
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }


// /////////  Nesting Navigators


import * as React from 'react';
import {Button, Image, Text, View, StyleSheet, ImageSourcePropType, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import {fakeDataUser, fakeDataUserType} from "./assets/FakeDataUser";


type HomeScreenProps = BottomTabScreenProps<TabParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
    return (
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center'}}>
            <Text>Home!</Text>
            {/*<View>*/}
            {/*    {fakeDataUser.map(u =>*/}
            {/*        <View style={styles.avatarBox}*/}
            {/*              onTouchStart={() => navigation.navigate(*/}
            {/*                  "Profile",*/}
            {/*                  u)}*/}
            {/*        >*/}
            {/*            <Image*/}
            {/*                style={{width: 50, height: 50}}*/}
            {/*                src={u.avatar as string}*/}
            {/*            />*/}
            {/*            <Text style={styles.avatarText}>{u.firstName} {u.lastName}</Text>*/}
            {/*        </View>)}*/}
            {/*</View>*/}
            <FlatList data={fakeDataUser} renderItem={u => {
                return (<View>
                    {fakeDataUser.map(u =>
                        <View style={styles.avatarBox}
                              onTouchStart={() => navigation.navigate(
                                  "Profile",
                                  u)}
                        >
                            <Image
                                style={{width: 50, height: 50}}
                                src={u.avatar as string}
                            />
                            <Text style={styles.avatarText}>{u.firstName} {u.lastName}</Text>
                        </View>)}
                </View>)
            }}
            />

            <Button title={"go to Settings"} onPress={() => navigation.navigate("Settings")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 300,
        borderStyle: "solid",
        borderColor: "blue",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10
    },
    avatarText: {
        // width:100,
        alignSelf: "center",

    }
})


type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>;

function ProfileScreen({route, navigation}: ProfileScreenProps) {


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile!</Text>
            <View style={{display: "flex", alignContent: "center"}}>
                <Image
                    style={{width: 150, height: 150}}
                    src={route.params?.avatar as string}
                />
                <Text style={{textAlign: "center"}}>{route.params?.firstName}</Text>
                <Text style={{textAlign: "center"}}>{route.params?.lastName}</Text>
                <Text style={{textAlign: "center"}}>{route.params?.role}</Text>
                <Text style={{textAlign: "center"}}>{route.params?.location.country}</Text>
                <Text style={{textAlign: "center"}}>{route.params?.location.city}</Text>
                {route.params?.skills.map(s => <Text style={{textAlign: "center"}}>{s}</Text>)}

                <Button title={"go to Home"} onPress={() => navigation.navigate("Home")}/>
            </View>
            <Button title={"go to Settings"} onPress={() => navigation.navigate("Settings")}/>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

type TabParamList = {
    Home: undefined
    Profile: undefined | Omit<fakeDataUserType, "id">
    User: undefined
    Settings: undefined
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="User" component={UserScreenStack}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function UserHome({navigation}: any) {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User Home!</Text>
            <Button title={"go to UserNotifications"} onPress={() => navigation.navigate("UserNotifications")}/>
        </View>
    );
}

function UserNotifications({navigation}: any) {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>User Notifications!</Text>

            <Button title={"go to UserHome"} onPress={() => navigation.navigate("UserHome")}/>
        </View>
    );
}

type TabTabParamList = {
    UserHome: undefined
    UserNotifications: undefined
}

const TabTab = createBottomTabNavigator<TabTabParamList>()


function UserScreenStack() {
    return (
        <TabTab.Navigator>
            <TabTab.Screen name="UserHome" component={UserHome}/>
            <TabTab.Screen name="UserNotifications" component={UserNotifications}/>
        </TabTab.Navigator>
    );
}