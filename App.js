


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './client/components/Index';
import GameBoardScreen from './client/components/GameBoardScreen';
import { Provider } from 'react-redux'; // Ensure Provider is imported from 'react-redux'
import store from './client/store';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!!</Text> */}
        <StatusBar style="auto" />
        <Index />
      </View>
      </Provider>

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

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import GameBoardScreen from '../CinemaConn/client/components/GameBoardScreen';
// import WelcomeScreen from '../CinemaConn/client/components/WelcomeScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Cinema Connection' }} />
//         <Stack.Screen name="GameBoard" component={GameBoardScreen} options={{ title: 'Game Board' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
