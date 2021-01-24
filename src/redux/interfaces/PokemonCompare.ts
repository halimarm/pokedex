export interface PokemonCompare {
  id: number;
  name: string;
  types: Type[];
  height: number;
  weight: number;
  stats: Status[];
  sprites: Sprites;
}

export interface Status {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}