

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, Alert, Modal } from 'react-native';
import { fetchActors } from '../store/allActorsStore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-native-confetti';

// Individual word card component
const WordCard = ({ word, onSelect, isSelected }) => {
  return (
    <View style={{ borderWidth: 1, margin: 5, padding: 10, backgroundColor: isSelected ? 'lightgrey' : 'transparent' }}>
      <Button title={word} onPress={() => onSelect(word)} />
    </View>
  );
};

const GameBoardScreen = () => {
  const dispatch = useDispatch();
  const allActors = useSelector(state => state.allActors);
  const [selectedWords, setSelectedWords] = useState(new Set());
  const [submittedWords, setSubmittedWords] = useState([]);
  const [gameWords, setGameWords] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [picture, setPicture] = useState([]);
  const [row3, setRow3] = useState();
  const [row1, setRow1] = useState();
  const [row2, setRow2] = useState();
  const [row4, setRow4] = useState();

  useEffect(() => {
    dispatch(fetchActors());
  }, [dispatch]);

  useEffect(() => {
    const generateRandomWords = () => {
      const actors = allActors.map(actor => actor.name);
      setGameWords(actors.sort(() => 0.5 - Math.random()).slice(0, 16)); // Select 16 random words
    };
    if (allActors.length > 0) {
      generateRandomWords();
    }
  }, [allActors]);

  const toggleSelectWord = (word) => {
    const newSelection = new Set(selectedWords);
    if (newSelection.has(word)) {
      newSelection.delete(word);
    } else {
      if (newSelection.size < 4) {
        newSelection.add(word);
      } else {
        // Handle error or notification for selecting more than 4 words
      }
    }
    setSelectedWords(newSelection);
  };


  const shuffleActorsAndMovies = () => {
    // Use allActors from the redux store instead of the hardcoded qbs array
    const shuffledActors = [...allActors].sort(() => 0.5 - Math.random());

    // Select first 4 QBs
    const selectedActors = shuffledActors.slice(0, 4);

    // Extract and shuffle WRs from the selected QBs
    const selectedMovies = selectedActors.flatMap(actor =>
      actor.movies.sort(() => 0.5 - Math.random()).slice(0, 4)
    ).sort(() => 0.5 - Math.random());

    setGameWords(selectedMovies.map(movie => movie.name));
  };

  // Ensure this useEffect hook is called after your component is mounted and whenever allActors changes
  useEffect(() => {
    if (allActors.length > 0) {
      shuffleActorsAndMovies();
    }
  }, [allActors]);

 const handleSubmit = () => {
  if (selectedWords.size === 4) {
    const selectedWordArray = Array.from(selectedWords);
    // Implement your submission logic here

    // Example: Check if all selected words are from the same actor
    const actorNames = selectedWordArray.map(word => allActors.find(actor => actor.movies.some(movie => movie.name === word)).name);
    const isSameActor = actorNames.every((name, index, arr) => name === arr[0]);

    if (isSameActor) {
      // Handle correct submission
      // Example: Show success message
      Alert.alert('You Won!', 'Congratulations!');
    } else {
      // Handle incorrect submission
      // Example: Show error message
      Alert.alert('You LOST!', 'Selected words are not from the same actor.');
    }

    // Clear selected words after submission
    setSelectedWords(new Set());
  } else {
    // Handle error or notification for selecting less than 4 words
    Alert.alert('Error', 'Please select exactly 4 words.');
  }
};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Game Board</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        {gameWords.map((word, index) => (
          <WordCard
            key={index}
            word={word}
            onSelect={toggleSelectWord}
            isSelected={selectedWords.has(word)}
          />
        ))}
      </View>
      <Button title="Submit" onPress={handleSubmit} />
      {showConfetti && <Confetti />}
    </View>
  );
};

export default GameBoardScreen;
