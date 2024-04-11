import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import singleMovieReducer from './singleMovieStore';
import singleActorReducer from './singleActorStore';
import actorsReducer from './allActorsStore';
import moviesReducer from './allMoviesStore';

const reducer = {
  singleActor: singleActorReducer,
  allActors: actorsReducer,
  allMovies: moviesReducer,
  singleMovie: singleMovieReducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export default store;
