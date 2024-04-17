import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Cinema Connection!</Text>
      <Text style={{ marginBottom: 10 }}>How To Play</Text>
      <Button title="Play!" onPress={handleStartGame} />
    </View>
  );
};

export default WelcomeScreen;
