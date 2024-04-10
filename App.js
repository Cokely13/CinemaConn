// // import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './client/components/HomeScreen'; // Import the Home screen component
// import GameBoardScreen from './client/components/GameBoardScreen'; // Import the GameBoard screen component


// const Stack = createStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="Home">
// //         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Cinema Connection' }} />
// //         <Stack.Screen name="GameBoard" component={GameBoardScreen} options={{ title: 'Game Board' }} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameBoardScreen from './client/components/GameBoardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!!</Text> */}
      <StatusBar style="auto" />
      <GameBoardScreen/>

    </View>

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
