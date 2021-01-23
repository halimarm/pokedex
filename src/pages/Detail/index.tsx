import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { fetchPokemonInfo } from '../../redux/actions/PokemonActions'
import { AppState } from '../../redux/store'

type DetailParams = {
  name: string
}
type DetailProps = RouteComponentProps<DetailParams>
const Detail: FC<DetailProps> = ({ match }) => {
  const { name } = match.params
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.pokemonInfo);

  useEffect(() => {
    dispatch(fetchPokemonInfo(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (!data) return <p>loading</p>
  return (
    <>
      <h1>{name}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.data.id}.png`} alt={name} />
      <ol>
        {
          data.data.types.map((v, i) => {
            return (
              <li key={i}>{v.type.name}</li>
            )
          })
        }
      </ol>
    </>
  )
}

export default withRouter(Detail)