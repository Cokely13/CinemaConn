

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
      <Text>Welcome to Cinema Connection!</Text>
      <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
      <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
    </View>
    </ImageBackground>
  //   <View style={styles.container}>
  //   <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background}>
  //     <Text style={styles.welcomeText}>Welcome to Cinema Connection!</Text>
  //     <TouchableOpacity style={styles.howToPlay} onPress={handleHowToPlay}>
  //       <Text style={styles.howToPlay}>How To Play</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity style={styles.playButton} onPress={handleStartGame}>
  //       <Text style={styles.buttonText}>Play!!</Text>
  //     </TouchableOpacity>
  //   </ImageBackground>
  // </View>
  );
};



export default WelcomeScreen;

// import React from 'react';
// import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'; // Import Alert component
// import { styles } from './styles';

// const WelcomeScreen = ({ navigation }) => {
//   const handleStartGame = () => {
//     navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
//   };

//   const handleHowToPlay = () => {
//     Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Cinema Connection!</Text>
//       <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
//       <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
//     </View>
//   );
// };



// export default WelcomeScreen;
