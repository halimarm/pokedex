import { PokemonActionTypes, GET_POKEMON } from '../types/PokemonTypes'
import { Pokemon } from '../interfaces/Pokemon';

export const getPokemonsAction = (pokemons: Pokemon[]): PokemonActionTypes => {
  return {
    type: GET_POKEMON,
    payload: pokemons
  };
};