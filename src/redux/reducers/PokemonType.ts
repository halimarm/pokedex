import { PokemonType } from '../interfaces/PokemonType';
import { PokemonListActionTypes } from '../types/PokemonTypes';

interface DefaultState {
  data: PokemonType;
}

const defaultState: DefaultState = {
  data: {
    damage_relations: {
      double_damage_from: [],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [],
      no_damage_from: [],
      no_damage_to: [],
    },
    game_indicies: [],
    generation: {
      name: '',
      url: ''
    },
    id: 9,
    move_damage_class: {
      name: '',
      url: ''
    },
    moves: [],
    name: '',
    names: [],
    pokemon: []
  }
};

const pokemonTypeReducer = (
  state = defaultState,
  action: PokemonListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_POKEMON_TYPE_DATA":
      return { ...state, data: action.pokemonType };
    default:
      return { ...state };
  }
};

export default pokemonTypeReducer;