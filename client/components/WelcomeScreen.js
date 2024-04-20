import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';


const WelcomeScreen = ({ navigation }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStartGame = () => {
    navigation.navigate('GameBoard');
  };

  const handleHowToPlay = () => {
    Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
  };



  return (
    <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto">
      <View style={styles.container}>
        <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
        <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;


