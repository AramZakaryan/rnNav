import {SafeAreaView} from "react-native-safe-area-context";
import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function WithSafeAreaView ({children}:Props){
    return(
        <SafeAreaView
            style={{flex:1, alignItems:"center", justifyContent: "space-between"}}>
            {children}
        </SafeAreaView>
    )
}