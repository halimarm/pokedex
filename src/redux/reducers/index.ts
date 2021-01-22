import { combineReducers } from 'redux';
import { getPokemonsReducer } from './PokemonReducer';

const rootReducer = combineReducers({
  pokemons: getPokemonsReducer
});

export default rootReducer;