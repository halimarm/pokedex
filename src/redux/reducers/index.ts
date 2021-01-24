import { combineReducers } from 'redux';
import pokemonList from './PokemonList';
import pokemonInfo from './PokemonInfo';
import pokemonType from './PokemonType';
import pokemonCompare from './PokemonCompare';

const rootReducer = combineReducers({
  pokemonList,
  pokemonInfo,
  pokemonType,
  pokemonCompare,
});

export default rootReducer;