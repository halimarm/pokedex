import { PokemonInfo } from '../interfaces/PokemonInfo';
import { PokemonListActionTypes } from '../types/PokemonTypes';

interface DefaultState {
  data: PokemonInfo;
}

const defaultState: DefaultState = {
  data: {
    id: 0,
    name: "",
    types: [],
    height: 0,
    weight: 0,
    stats: [],
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: ""
    }
  }
};

const pokemonInfoReducer = (
  state = defaultState,
  action: PokemonListActionTypes
): DefaultState => {
  switch (action.type) {
    case "SET_POKEMON_INFO_DATA":
      return { ...state, data: action.pokemonInfo };
    default:
      return { ...state };
  }
};

export default pokemonInfoReducer;