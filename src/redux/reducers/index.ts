import { combineReducers } from 'redux';
import pokemonList from './PokemonList';

const rootReducer = combineReducers({
  pokemonList,
});

export default rootReducer;