import {
  GET_POKEMON,
  GetPokemonsStateType,
  PokemonActionTypes
} from '../types/PokemonTypes';

const initialStateGetPokemons: GetPokemonsStateType = {
  pokemons: []
};

export const getPokemonsReducer = (
  state = initialStateGetPokemons,
  action: PokemonActionTypes
): GetPokemonsStateType => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemons: action.payload
      };
    default:
      return state;
  }
};