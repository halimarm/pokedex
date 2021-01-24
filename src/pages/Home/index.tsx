import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemonList } from '../../redux/actions/PokemonActions';
import { AppState } from '../../redux/store';
import Filtered from '../../components/Filtered';
import Search from '../../components/Search';
import Logo from '../../assets/logo-pokemon.png'
import Card from '../../components/Card';
import { getIdByUrl } from '../../utils/Utils';

const Home: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.pokemonList);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const renderPokemon = () => {
    const result = data.data.results.map((v, i) => {
      return (
        <div key={i} className="list__item list__item--2">
          <Link to={`/pokemon/${v.name}`}>
            <Card
              id={getIdByUrl(v.url)}
              name={v.name}
            />
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