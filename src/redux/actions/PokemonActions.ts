import { Dispatch } from "redux";
import { PAGINATION_LIMIT, REACT_APP_API_URL } from "../../utils/Env";
import { PokemonList } from "../interfaces/Pokemon";
import { PokemonInfo } from "../interfaces/PokemonInfo";
import { AppState } from "../store";
import { AppActions, SetPageNumber, SetPokemonListData, SetPokemonInfoData, SetTypeFilter } from "../types/PokemonTypes";

export const setPokemonListData = (
  pokemonList: PokemonList
): SetPokemonListData => ({
  type: "SET_POKEMON_LIST_DATA",
  pokemonList
});


export const setPokemonInfoData = (
  pokemonInfo: PokemonInfo
): SetPokemonInfoData => ({
  type: "SET_POKEMON_INFO_DATA",
  pokemonInfo
})

export const setPageNumber = (pageNumber: number): SetPageNumber => ({
  type: "SET_PAGE_NUMBER",
  pageNumber
});

export const setTypeFilter = (typeFilter: string | null): SetTypeFilter => ({
  type: "SET_TYPE_FILTER",
  typeFilter
});

export const fetchPokemonList = (pageNumber: number = 0) => (
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

export const fetchPokemonInfo = (name: string) => (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  fetch(`${REACT_APP_API_URL}/pokemon/${name}`, {
    method: "GET"
  })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("HTTP Status " + res.status + ", " + res.statusText);
      }
    })
    .then((res: PokemonInfo) => {
      dispatch(setPokemonInfoData(res));
    })
    .catch(err => {
      console.warn(err);
    });
};

// export const fetchPokemonListType = (type: string = '') => (
//   dispatch: Dispatch<AppActions>,
//   getState: () => AppState
// ) => {
//   dispatch(setTypeFilter(type));

//   fetch(`${REACT_APP_API_URL}/type/${type}`, {
//     method: "GET"
//   })
//     .then(res => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         throw new Error("HTTP Status " + res.status + ", " + res.statusText);
//       }
//     })
//     .then((res: PokemonType) => {
//       dispatch(setPokemonListData(res));
//     })
//     .catch(err => {
//       console.warn(err);
//     });
// };