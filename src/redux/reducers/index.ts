import { combineReducers } from 'redux';
import pokemonList from './PokemonList';
import pokemonInfo from './PokemonInfo';

const rootReducer = combineReducers({
  pokemonList,
  pokemonInfo,
});

export default rootReducer;