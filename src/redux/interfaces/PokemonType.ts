import { PokemonInfo } from "./Pokemon";

export interface PokemonType {
  damage_relations: {
    double_damage_from: PokemonInfo[];
    double_damage_to: PokemonInfo[];
    half_damage_from: PokemonInfo[];
    half_damage_to: PokemonInfo[];
    no_damage_from: PokemonInfo[];
    no_damage_to: PokemonInfo[];
  }
  game_indicies: GameIndicies[];
  generation: {
    name: string;
    url: string;
  }
  id: number;
  move_damage_class: {
    name: string;
    url: string;
  }
  moves: PokemonInfo[];
  name: string;
  names: Names[];
  pokemon: PokemonDetail[]
}

export interface PokemonDetail {
  pokemon: {
    name: string;
    url: string;
  }
  slot: number
}

export interface Names {
  language: {
    name: string;
    url: string;
  }
  name: string;
}

export interface GameIndicies {
  game_index: number;
  generation: {
    name: string;
    url: string;
  }
}