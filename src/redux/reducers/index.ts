import { combineReducers } from 'redux';
import pokemonList from './PokemonList';
import pokemonInfo from './PokemonInfo';
import pokemonType from './PokemonType';

const rootReducer = combineReducers({
  pokemonList,
  pokemonInfo,
  pokemonType,
});

export default rootReducer;