

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native'; // Import Alert component
// import { styles } from './styles';
// import Confetti from 'react-native-confetti';
// import { faL } from '@fortawesome/free-solid-svg-icons';

// const WelcomeScreen = ({ navigation }) => {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const handleStartGame = () => {
//     navigation.navigate('GameBoard'); // Navigate to the GameBoard screen
//   };

//   const handleHowToPlay = () => {
//     Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
//   };

//   const handleConfetti = () => {
//     console.log("Confetti pressed");
//     setShowConfetti(true);
//   };

//   const handleNo = () => {
//     setShowConfetti(false);
//   };

//   return (
//     <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto" >
//     <View style={styles.container}>
//       {/* <Text style={styles.welcomeText}>Welcome to Cinema Connection!</Text> */}
//       <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
//      {!showConfetti ? <Text style={styles.howToPlay} onPress={handleConfetti}>Confetti</Text> : <Text style={styles.howToPlay} onPress={handleNo}>No Confetti</Text>}
//       <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
//       {/* {showConfetti && <Text style={styles.howToPlay} >Hey!</Text>} */}
//       {showConfetti && <Confetti/>}
//     </View>
//     </ImageBackground>
//   );
// };



// export default WelcomeScreen;

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
// import { styles } from './styles';
// import LottieView from 'lottie-react-native'; // Import LottieView

// const WelcomeScreen = ({ navigation }) => {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleStartGame = () => {
//     navigation.navigate('GameBoard');
//   };

//   const handleHowToPlay = () => {
//     Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
//   };

//   const handleConfetti = () => {
//     setShowConfetti(true);
//   };

//   const handleNo = () => {
//     setShowConfetti(false);
//   };

//   return (
//     <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto">
//       <View style={styles.container}>
//         <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
//         {!showConfetti ? <Text style={styles.howToPlay} onPress={handleConfetti}>Confetti</Text> : <Text style={styles.howToPlay} onPress={handleNo}>No Confetti</Text>}
//         <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
//         {showConfetti ? (
//           <LottieView
//             source={require('../../assets/confetti.json')} // Path to your Lottie animation file
//             autoPlay
//             loop
//             style={styles.animation} // Style the LottieView as needed
//           />
//         ) : null}
//       </View>
//     </ImageBackground>
//   );
// };

// export default WelcomeScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native'; // Import LottieView

const WelcomeScreen = ({ navigation }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleStartGame = () => {
    navigation.navigate('GameBoard');
  };

  const handleHowToPlay = () => {
    Alert.alert('How To Play', 'Select 4 Movies from the Same Actor');
  };

  const handleConfetti = () => {
    setShowConfetti(true);
  };

  const handleNo = () => {
    setShowConfetti(false);
  };

  return (
    <ImageBackground source={require('../../assets/imax.jpg')} style={styles.background} pointerEvents="auto">
      <View style={styles.container}>
        <Text style={styles.howToPlay} onPress={handleHowToPlay}>How To Play</Text>
        {!showConfetti ? <Text style={styles.howToPlay} onPress={handleConfetti}>Confetti</Text> : <Text style={styles.howToPlay} onPress={handleNo}>No Confetti</Text>}
        <TouchableOpacity style={styles.button} onPress={handleStartGame}><Text style={styles.buttonText}>Play!!</Text></TouchableOpacity>
        {showConfetti && (
          <LottieView
            source={require('../../assets/confetti.json')} // Ensure this path is correct
            autoPlay
            loop
            style={{
              width: 200, // Adjust width as needed
              height: 200, // Adjust height as needed
              alignSelf: 'center', // Center the animation horizontally
              marginTop: 20, // Adjust margin top as needed
              // Add more styles as needed
            }}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;


