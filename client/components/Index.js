import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameBoardScreen from './GameBoardScreen';
import WelcomeScreen from './WelcomeScreen';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{ title: 'Cinema Connection',
              headerStyle: {
                backgroundColor: 'black',
                // Change the color to whatever you desire
              },
              headerTintColor: 'white' }} />
          <Stack.Screen name="GameBoard" component={GameBoardScreen} options={{ title: 'Game Board',
              headerStyle: {
                backgroundColor: 'black', // Change the color to whatever you desire
              },
              headerTintColor: 'white' }}  />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderColor: 'blue', // Border color
    borderWidth: 20, // Border width
    // Border radius (optional)
  },
});

export default Index;

