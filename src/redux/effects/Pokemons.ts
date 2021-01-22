import { Dispatch } from 'redux';
import { getPokemonsAction } from '../actions/PokemonActions';
import { PokemonActionTypes } from '../types/PokemonTypes';

const BASE_API = 'https://pokeapi.co/api';

export const getDataPokemon = () => {
  return function (dispatch: Dispatch<PokemonActionTypes>) {
    fetch(`${BASE_API}/v2/pokemon?offset=1&limit=20`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        const { results } = data
        dispatch(getPokemonsAction(results));
        return results;
      });
  };
}