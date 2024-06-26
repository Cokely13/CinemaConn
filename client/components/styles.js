import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'gray',
    padding: 5
  },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 5,
      marginTop: 20, // Add marginTop to push the button below the text
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    shuffleButton: {
      backgroundColor: '#28a745', // Different color for the shuffle button
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 5,
      marginTop: 20,
      marginBottom: 20,
    },
    shuffleButtonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      width: '100%',
    },
    howToPlay: {
      marginVertical: 20,
      fontWeight: 'bold',
      fontSize: 18,
      textDecorationLine: 'underline', // Add underline to indicate it's clickable
      color: 'yellow', // Add color to make the text visible
    },
    background: {
      flex: 1,
      resizeMode: 'cover', // Ensure the background image covers the entire screen
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff', // Text color
      marginBottom: 20, // Add some margin at the bottom
    },
    playButton: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
});

