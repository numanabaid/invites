import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Scanner } from "./src/screens/Scanner";
import { Result } from "./src/screens/Result";

const Stack = createNativeStackNavigator();

export const App = () => {

    return (
        <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Scanner" component={Scanner} />
				<Stack.Screen name="Result" component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
    );
};
