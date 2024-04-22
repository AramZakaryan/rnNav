import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {WithSafeAreaView} from "./components/WithSafeAreaView";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'home'>;

function HomeScreen({navigation}: HomeScreenProps) {
    return (
        <WithSafeAreaView>
            {/*<SafeAreaView*/}
            {/*    style={{flex: 1, alignItems: 'center', justifyContent: 'space-between',}}>*/}
            <Text style={{marginBottom: 30}}>
                Home Screen
            </Text>
            <Button title={"go to profile"}
                    onPress={() => navigation.navigate("profile")}/>
            <Button title={"go to user"}
                    onPress={() => navigation.navigate("user")}/>
            {/*</SafeAreaView>*/}
        </WithSafeAreaView>
    );
}

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'profile'>;

function ProfileScreen({navigation}: ProfileScreenProps) {
    return (
        <WithSafeAreaView>
            <Text style={{marginBottom: 30}}>Profile Screen</Text>
            <Button title={"go to home"} onPress={() => navigation.navigate("home")}/>
            <Button title={"go to user"} onPress={() => navigation.navigate("user")}/>
        </WithSafeAreaView>
    );
}

type UserScreenProps = NativeStackScreenProps<RootStackParamList, 'user'>;

function UserScreen({navigation}: UserScreenProps) {
    return (
        <WithSafeAreaView>
            <Text style={{marginBottom: 30}}>User Screen</Text>
            <Button title={"go to home"} onPress={() => navigation.navigate("home")}/>
            <Button title={"go to profile"} onPress={() => navigation.navigate("profile")}/>
        </WithSafeAreaView>
    );
}

type RootStackParamList = {
    home: undefined;
    profile: undefined;
    user: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={"home"} component={HomeScreen}/>
                    <Stack.Screen name={"profile"} component={ProfileScreen}/>
                    <Stack.Screen name={"user"} component={UserScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
