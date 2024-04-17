import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, Alert, Modal, ScrollView, Image, TouchableOpacity } from 'react-native'; // Import ScrollView
import { fetchActors } from '../store/allActorsStore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-native-confetti';
import { styles } from './styles';


const WordCard = ({ word, onSelect, isSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(word)} style={{ width: '40%', aspectRatio: 1, marginVertical: 5, marginRight: 10 }}>
      <View style={{ flex: 1, borderRadius: 10, borderWidth: 5, borderColor: 'red', backgroundColor: isSelected ? 'lightgrey' : 'transparent', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{word}</Text>
      </View>
    </TouchableOpacity>
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
  const [correctActor, setCorrectActor] = useState([]);
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


  const handleShuffleWords = () => {
    // Shuffle the order of the words while keeping the words the same
    const shuffledGameWords = [...gameWords].sort(() => 0.5 - Math.random());
    setGameWords(shuffledGameWords);
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

  const handlePlayAgain = () => {
    // Shuffle actors and movies again to start a new game
    shuffleActorsAndMovies();
    // Clear any submitted words and selections
    setSubmittedWords([]);
    setSelectedWords(new Set());
    // Reset UI state if needed
    setRow1(false);
    setRow2(false);
    setRow3(false);
    setRow4(false);
  };



  const handleSubmit = () => {
    if (selectedWords.size === 4) {
      const selectedWordArray = Array.from(selectedWords);

      const actorImages = [];
      const matchingActors = [];

      // Check if there is a quarterback that matches three out of four receivers
      const isSameActor = allActors.some((actor) => {
        const matchingMovies = selectedWordArray.filter((movieName) =>
        actor.movies.some((movie) => movie.name === movieName)
        );

        if (matchingMovies.length === 3) {
          matchingActors.push(actor.name);
        }

        const allMovieMatch = matchingMovies.length === 4;

        if (allMovieMatch) {
          actorImages.push(actor.imagePath); // Capture the QB's image path when a match is found
        }

        return allMovieMatch;
      });

      if (isSameActor) {
        // Correctly guessed all WRs from the same QB
        const newSubmittedWords = [...submittedWords, ...selectedWordArray.map((movieName, idx) => ({ name: movieName, actorImagePath: actorImages[idx] }))];
        setRow1(true)
        setSubmittedWords(newSubmittedWords);
        const images = [...picture]


        images.push(actorImages)
        setPicture(images)
        console.log("images!!!FIRST", picture)

        if (submittedWords.length === 4){
          setRow2(true)
          console.log("images", picture)
        }

        if (submittedWords.length === 8){
          console.log("images!!3", picture)
          setRow3(true)
        }

        if (submittedWords.length === 12){
          setRow4(true)
          console.log("images!!@4", picture)

          Alert.alert('YOU WON!!!!!');
        }

        // Remove correctly guessed WRs from the game board
        const remainingWords = gameWords.filter((movie) => !selectedWords.has(movie));

        setGameWords(remainingWords);

        setSelectedWords(new Set()); // Clear the selections
      } else {

        // setMistakes((prev) => prev + 1);
        if (matchingActors == 7) {
          Alert.alert('YOU LOST!!');
        } else {
          // Check if there is only one quarterback matching three out of four receivers
          if (matchingActors.length === 1) {
            Alert.alert('WRONG!', 'BUT ONLY ONE OFF!');
          } else {
            Alert.alert('WRONG!', 'Selected words are not from the same actor.');
          }
          setSelectedWords(new Set());
        }
      }
    } else {
      // Show a popup message if less than 4 words are selected
      Alert.alert('Error', 'Please select exactly 4 words.');

    }
  };


return (
  <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
    {row1 && (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Actor 1: </Text>
        <Image source={{ uri: picture[0][0] }}  style={styles.image} />
      </View>
    )}
    {row2 && (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Actor 2: </Text>
        <Image source={{ uri: picture[1][0] }}  style={styles.image}/>
      </View>
    )}
    {row3 && (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Actor 3: </Text>
        <Image source={{ uri: picture[2][0] }}  style={styles.image} />
      </View>
    )}
    {row4 && (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text>Actor 4: </Text>
        <Image source={{ uri: picture[3][0] }}  style={styles.image}/>
      </View>
    )}
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
      {gameWords.map((word, index) => (
        <WordCard
          key={index}
          word={word}
          onSelect={toggleSelectWord}
          isSelected={selectedWords.has(word)}
        />
      ))}
    </View>
    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 30  }}>
  {!row4 && (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  )}
  {row4 && (
    <TouchableOpacity style={styles.button} onPress={handlePlayAgain}>
      <Text style={styles.buttonText}>Play Again!!</Text>
    </TouchableOpacity>
  )}
 {!row4 && (
    <TouchableOpacity style={styles.shuffleButton} onPress={handleShuffleWords}>
      <Text style={styles.shuffleButtonText}>Shuffle</Text>
    </TouchableOpacity>
  )}
</View>

    {showConfetti && <Confetti />}
  </ScrollView>
);
};

export default GameBoardScreen;
