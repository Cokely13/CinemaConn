
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameBoardScreen from './GameBoardScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Cinema Connection' }} />
        <Stack.Screen name="GameBoard" component={GameBoardScreen} options={{ title: 'Game Board' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
