import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="Onboarding" component={Onboarding}/> 
         <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

    </NavigationContainer>

  );
}

;
