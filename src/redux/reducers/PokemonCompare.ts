import { PokemonCompare } from '../interfaces/PokemonCompare';
import { PokemonListActionTypes } from '../types/PokemonTypes';

interface DefaultState {
  data: PokemonCompare[];
}

const defaultState: DefaultState = {
  data: []
};

const pokemonCompareReducer = (
  state = defaultState,
  action: PokemonListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_POKEMON_COMPARE_DATA":
      return Object.assign({}, state, { data: [...state.data, action.pokemonCompare ] });
    default:
      return { ...state };
  }
};

export default pokemonCompareReducer;