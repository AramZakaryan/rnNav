import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}:any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{marginBottom:30}}>Home Screen</Text>
            <Button title={"go to profile"} onPress={()=>navigation.navigate("profile")}/>
            <Button title={"go to user"} onPress={()=>navigation.navigate("user")}/>
        </View>
    );
}

function ProfileScreen({navigation}:any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginBottom:30}}>Profile Screen</Text>
            <Button title={"go to home"} onPress={()=>navigation.navigate("home")}/>
            <Button title={"go to user"} onPress={()=>navigation.navigate("user")}/>

        </View>
    );
}

function UserScreen({navigation}:any) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginBottom:30}}>User Screen</Text>
            <Button title={"go to home"} onPress={()=>navigation.navigate("home")}/>
            <Button title={"go to profile"} onPress={()=>navigation.navigate("profile")}/>

        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"home"} component={HomeScreen}/>
                <Stack.Screen name={"profile"} component={ProfileScreen}/>
                <Stack.Screen name={"user"} component={UserScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
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
