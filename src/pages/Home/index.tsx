import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../../redux/actions/PokemonActions';
import { AppState } from '../../redux/store';
import Filtered from './Filtered';

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

  const btnPrevious = () => {
    if (data.data.previous !== null) {
      dispatch(fetchPokemonList(data.page - 1))
    }
  }

  const btnNext = () => {
    if (data.data.next !== null) {
      dispatch(fetchPokemonList(data.page + 1))
    }
  }

  if (!data) return <p>loading</p>
  return (
    <>
      {console.log(data)}
      <h1>Pokedex</h1>
      <Filtered />
      { renderPokemon() }
      <div className="pagination">
        <button className="pagination__item" onClick={() => btnPrevious()}>
          Previous
        </button>
        <button className="pagination__item" onClick={() => btnNext()}>
          Next
        </button>
      </div>
    </>
  )
}

export default Home