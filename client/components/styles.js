import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'black',
  },
    button: {
      backgroundColor: '#007bff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 5,
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
    },
    howToPlay: {
      marginVertical: 20,
      fontWeight: 'bold',
      fontSize: 18,
      textDecorationLine: 'underline', // Add underline to indicate it's clickable
    },

});
