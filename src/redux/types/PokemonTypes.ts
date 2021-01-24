import { PokemonList } from "../interfaces/Pokemon";
import { PokemonInfo } from "../interfaces/PokemonInfo";
import { PokemonType } from "../interfaces/PokemonType";

export interface SetPokemonListData {
  type: "SET_POKEMON_LIST_DATA";
  pokemonList: PokemonList;
}

export interface SetPokemonInfoData {
  type: "SET_POKEMON_INFO_DATA";
  pokemonInfo: PokemonInfo;
}

export interface SetPokemonTypeData {
  type: "SET_POKEMON_TYPE_DATA";
  pokemonType: PokemonType;
}

export interface SetPageNumber {
  type: "SET_PAGE_NUMBER";
  pageNumber: number;
}

export interface SetTypeFilter {
  type: "SET_TYPE_FILTER";
  typeFilter: string | null;
}

export type PokemonListActionTypes =
  | SetPokemonListData
  | SetPokemonInfoData
  | SetPokemonTypeData
  | SetPageNumber
  | SetTypeFilter;


export type AppActions = PokemonListActionTypes