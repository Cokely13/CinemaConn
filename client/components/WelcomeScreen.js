

import React from 'react';
import { View, Text, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native'; // Import Alert component
import { styles } from './styles';

const WelcomeScreen = ({ navigation }) => {
  const handleStartGame = () => {
    navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
  };

  const handleHowToPlay = () => {
    Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
  };

  return (
    <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto" >
    <View style={styles.container}>
      {/* <Text style={styles.welcomeText}>Welcome to Cinema Connection!</Text> */}
      <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
    </View>
    </ImageBackground>
  );
};



export default WelcomeScreen;

