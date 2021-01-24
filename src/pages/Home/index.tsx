import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../../redux/actions/PokemonActions';
import { AppState } from '../../redux/store';
import Filtered from '../../components/Filtered';
import Search from '../../components/Search';
import Logo from '../../assets/logo-pokemon.png'

const Home: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const renderPokemon = () => {
    const result = data.data.results.map((v, i) => {
      const id = i + 1
      return (
        <div className="list__item list__item--2">
          <Link key={i} to={`/pokemon/${v.name}`}>
            <div className="card">
              <div className="card__body">
                <div className="col">
                  <h1 className="card__title">{v.name}</h1>
                </div>
                <div className="col">
                  <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={v.name} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    })
    return result
  }
  
  if (!data.data.results) return <p>Loading...</p>

  return (
    <>
      <header className="header">
        <img className="logo" src={Logo} alt="Pokedex"/>
        <Search />
      </header>
      <section>
        <h1 className="section__title">Browse Type</h1>
        <div className="list list--scroll">
          <Filtered />
        </div>
      </section>
      <section>
        <h1 className="section__title">Show All Pokedex</h1>
        <div className="list">
          { renderPokemon() }
        </div>
      </section>
    </>
  )
}

export default Home