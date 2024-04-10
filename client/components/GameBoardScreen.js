import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const GameBoardScreen = () => {
  // State variables
  const [selectedWords, setSelectedWords] = useState(new Set());
  const [submittedWords, setSubmittedWords] = useState([]);
  const [words, setWords] = useState([]);
  // Add more state variables as needed

  // Generate an array of random words
  useEffect(() => {
    const generateRandomWords = () => {
      const randomWords = [
        'Apple', 'Banana', 'Cherry!!', 'Grape', 'Lemon!!', 'Orange', 'Peach', 'Pear',
        'Strawberry', 'Watermelon', 'Pineapple', 'Blueberry', 'Mango', 'Kiwi', 'Pomegranate', 'Coconut',
        'Tomato', 'Avocado', 'Raspberry', 'Blackberry', 'Cranberry', 'Fig', 'Guava', 'Lychee'
      ];
      setWords(randomWords.sort(() => 0.5 - Math.random()).slice(0, 16)); // Select 16 random words
    };
    generateRandomWords();
  }, []);

  // Function to handle word selection
  const toggleSelectWord = (word) => {
    // Logic to handle word selection
    const newSelectedWords = new Set(selectedWords);
    if (newSelectedWords.has(word)) {
      // Deselect the word
      newSelectedWords.delete(word);
    } else {
      // Select the word
      newSelectedWords.add(word);
    }
    setSelectedWords(newSelectedWords);
  };

  // Function to handle submission of selected words
  const handleSubmit = () => {
    // Logic to handle word submission
    if (selectedWords.size === 4) {
      // User has selected 4 words
      Alert.alert('You Won!', 'Congratulations!');
    } else {
      // User has not selected 4 words
      Alert.alert('You Lost!', 'Please select exactly 4 words.');
      console.log("check!!!", selectedWords)
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Render game board UI here */}
      <Text>Game Board</Text>
      {/* Add game board UI components */}
      {/* Render the 4x4 grid of word cards */}
      <View style={styles.wordGrid}>
        {words.map((word, index) => (
          <View key={index} style={[styles.wordContainer, selectedWords.has(word) && styles.selectedWord]}>
            <Button
              title={word}
              onPress={() => toggleSelectWord(word)}
              style={styles.wordButton}
            />
          </View>
        ))}
      </View>
      {/* Button to submit selected words */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  wordGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  wordContainer: {
    width: '25%',
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedWord: {
    backgroundColor: 'lightgrey',
  },
  wordButton: {
    width: '100%',
    height: '100%',
  },
});

export default GameBoardScreen;
