import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../../redux/actions/PokemonActions';
import { AppState } from '../../redux/store';

const Home: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const renderPokemon = () => {
    const result = data.data.results.map((v, i) => {
      return (
        <div key={i} >
          <Link to={`/${v.name}`}>{v.name}</Link>
        </div>
      )
    })
    return result
  }

  if (!data) return <p>loading</p>
  return (
    <>
      <h1>Pokedex</h1>
      {console.log(data)}
      { renderPokemon() }
    </>
  )
}

export default Home