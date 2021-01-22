import { Pokemon } from '../interfaces/Pokemon';

export const GET_POKEMON = 'GET_POKEMON'

export interface GetPokemonsStateType {
  pokemons: Pokemon[]
}

interface GetPokemonsActionType {
  type: typeof GET_POKEMON
  payload: Pokemon[]
}

export type PokemonActionTypes = GetPokemonsActionType
