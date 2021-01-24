import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import { fetchPokemonType } from '../../redux/actions/PokemonActions';
import { AppState } from '../../redux/store';
import { getIdByUrl, replaceToString } from '../../utils/Utils';

type TypeParams = {
  name: string
}
type TypeProps = RouteComponentProps<TypeParams>
const Type: FC<TypeProps> = ({ match }) => {
  const { name } = match.params
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.pokemonType);

  useEffect(() => {
    dispatch(fetchPokemonType(name));
  }, [dispatch]);

  const renderPokemon = () => {
    const result = data.data.pokemon.map((v, i) => {
      return (
        <div key={i} className="list__item list__item--2">
          <Link to={`/pokemon/${v.pokemon.name}`}>
            <Card
              id={getIdByUrl(v.pokemon.url)}
              name={replaceToString(v.pokemon.name)}
            />
          </Link>
        </div>
      )
    })
    return result
  }

  
  if (!data.data.pokemon) return <p>Loading...</p>

  return (
    <>
      <Navbar />
      <section>
        <h1 className="section__title">Type : {name}</h1>
        <div className="list">
          {console.log(data.data)}
          { renderPokemon() }
        </div>
      </section>
    </>
  )
}

export default Type