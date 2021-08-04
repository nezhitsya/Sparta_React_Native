import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage'

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "white",
                height: 100,
                borderBottomColor: "white",
                shadowColor: "white"
            },
            headerTitleAlign: 'left',
            headerTintColor: "black",
            headerBackTitleVisible: false
        }}>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
            <Stack.Screen name="AboutPage" component={AboutPage} />
            <Stack.Screen name="LikePage" component={LikePage} />
        </Stack.Navigator>
    )
}

export default StackNavigator