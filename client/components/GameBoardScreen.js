// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { View, Text, Button, Alert, StyleSheet } from 'react-native';
// import { fetchActors } from '../store/allActorsStore';




// const GameBoardScreen = () => {
//   const dispatch = useDispatch();
//   // State variables
//   const [selectedWords, setSelectedWords] = useState(new Set());
//   const [submittedWords, setSubmittedWords] = useState([]);
//   const [words, setWords] = useState([]);
//   const allActors = useSelector(state => state.allActors);

//   useEffect(() => {
//     dispatch(fetchActors());
//   }, [dispatch]);

//   // Add more state variables as needed

//   // Generate an array of random words
//   useEffect(() => {
//     const generateRandomWords = () => {
//       const actors = allActors.map(actor => actor.name);

//       console.log("actor", actors)
//       setWords(actors.sort(() => 0.5 - Math.random()).slice(0, 16)); // Select 16 random words
//     };
//     generateRandomWords();
//   }, []);

//   // Function to handle word selection
//   const toggleSelectWord = (word) => {
//     // Logic to handle word selection
//     const newSelectedWords = new Set(selectedWords);
//     if (newSelectedWords.has(word)) {
//       // Deselect the word
//       newSelectedWords.delete(word);
//     } else {
//       // Select the word
//       newSelectedWords.add(word);
//     }
//     setSelectedWords(newSelectedWords);
//   };

//   // Function to handle submission of selected words
//   const handleSubmit = () => {
//     // Logic to handle word submission
//     if (selectedWords.size === 4) {
//       // User has selected 4 words
//       Alert.alert('You Won!', 'Congratulations!');
//     } else {
//       // User has not selected 4 words
//       Alert.alert('You Lost!', 'Please select exactly 4 words.');
//       console.log("check!!!", selectedWords)
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       {/* Render game board UI here */}
//       <Text>Game Board</Text>
//       {/* Add game board UI components */}
//       {/* Render the 4x4 grid of word cards */}
//       <View style={styles.wordGrid}>
//         {words.map((word, index) => (
//           <View key={index} style={[styles.wordContainer, selectedWords.has(word) && styles.selectedWord]}>
//             <Button
//               title={word}
//               onPress={() => toggleSelectWord(word)}
//               style={styles.wordButton}
//             />
//           </View>
//         ))}
//       </View>
//       {/* Button to submit selected words */}
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   wordGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   wordContainer: {
//     width: '25%',
//     height: 50,
//     margin: 5,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: 'transparent',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   selectedWord: {
//     backgroundColor: 'lightgrey',
//   },
//   wordButton: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default GameBoardScreen;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, Modal } from 'react-native';
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

  const handleSubmit = () => {
    if (selectedWords.size === 4) {
      // Handle submission logic
    } else {
      // Handle error or notification for selecting less than 4 words
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
