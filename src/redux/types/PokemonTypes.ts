import { PokemonList } from "../interfaces/Pokemon";
import { PokemonInfo } from "../interfaces/PokemonInfo";
import { PokemonType } from "../interfaces/PokemonType";
import { PokemonCompare } from "../interfaces/PokemonCompare";

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

export interface SetPokemonCompareData {
  type: "SET_POKEMON_COMPARE_DATA";
  pokemonCompare: PokemonCompare;
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
  | SetPokemonCompareData
  | SetPageNumber
  | SetTypeFilter;


export type AppActions = PokemonListActionTypes