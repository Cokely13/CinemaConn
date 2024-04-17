import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Cinema Connection!</Text>
      <Text style={{ marginBottom: 10 }}>How To Play</Text>
      <Button title="Play!" onPress={handleStartGame} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Add padding for better spacing
  },
  howToPlay: {
    marginVertical: 20, // Add margin for better spacing
    fontWeight: 'bold',
    fontSize: 18,
  },
};


export default WelcomeScreen;
