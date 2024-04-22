import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';


const WelcomeScreen = ({ navigation }) => {

  const handleStartGame = () => {
    navigation.navigate('GameBoard');
  };

  const handleHowToPlay = () => {
    Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
  };



  return (
    <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto">
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play</Text></TouchableOpacity>

        <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>

      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;


