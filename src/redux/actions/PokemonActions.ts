import { Dispatch } from "redux";
import { PokemonList } from "../interfaces/Pokemon";
import { AppState } from "../store";
import { AppActions, SetPageNumber, SetPokemonListData, SetTypeFilter } from "../types/PokemonTypes";

const PAGINATION_LIMIT = 10
const REACT_APP_API_URL = 'https://pokeapi.co/api/v2'

export const setPokemonListData = (
  pokemonList: PokemonList
): SetPokemonListData => ({
  type: "SET_POKEMON_LIST_DATA",
  pokemonList
});

export const setPageNumber = (pageNumber: number): SetPageNumber => ({
  type: "SET_PAGE_NUMBER",
  pageNumber
});

export const setTypeFilter = (typeFilter: string | null): SetTypeFilter => ({
  type: "SET_TYPE_FILTER",
  typeFilter
});

export const fetchPokemonList = (pageNumber: number = 1) => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const offset = pageNumber * PAGINATION_LIMIT;
  dispatch(setPageNumber(pageNumber));
  dispatch(setTypeFilter(null));

  fetch(`${REACT_APP_API_URL}/pokemon?offset=${offset}&limit=${PAGINATION_LIMIT}`, {
    method: "GET"
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("HTTP Status " + res.status + ", " + res.statusText);
      }
    })
    .then((res: PokemonList) => {
      dispatch(setPokemonListData(res));
    })
    .catch(err => {
      console.warn(err);
    });
};