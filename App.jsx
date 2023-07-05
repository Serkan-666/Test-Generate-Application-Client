import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestSelectionScreen from './screens/TestSelectionScreen';
import DifficultySelectionScreen from './screens/DifficultySelectionScreen';
import TestScreen from './screens/TestScreen';
import store from "./store";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();

export default function App() {
  const options = {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: 'black', // Set the header background color to black
    },
    headerTintColor: 'white', // Set the header text color to white
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test App"
            component={TestSelectionScreen}
            options={options}
          />
          <Stack.Screen
            name="DifficultySelection"
            component={DifficultySelectionScreen}
            options={options}
          />

          <Stack.Screen
            name="Test"
            component={TestScreen}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}