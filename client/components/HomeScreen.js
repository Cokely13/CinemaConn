import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to CinemaConnection!</Text>
      <Button title="Start Game" onPress={handleStartGame} />
    </View>
  );
};

export default HomeScreen;
