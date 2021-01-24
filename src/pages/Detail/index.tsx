import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { comparePokemon, fetchPokemonInfo } from '../../redux/actions/PokemonActions'
import { AppState } from '../../redux/store'
import { replaceToString } from '../../utils/Utils'

type DetailParams = {
  name: string
}
type DetailProps = RouteComponentProps<DetailParams>
const Detail: FC<DetailProps> = ({ match }) => {
  const { name } = match.params
  const dispatch = useDispatch();
  const [isCompare, setIsCompare] = useState(false)
  const data = useSelector((state: AppState) => state.pokemonInfo);

  useEffect(() => {
    dispatch(fetchPokemonInfo(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const btnCompare = () => {
    dispatch(comparePokemon(data.data))
    setIsCompare(true)
  }

  if (!data.data.types) return <p>Loading...</p>

  return (
    <>
      <Navbar position="absolute" />
      <header className="header-detail">
        <div className="header-detail__block">
          <div className="header-detail__figure">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.data.id}.png`}
              alt={name} />
          </div>
          <div className="header-detail__heading">
            <span>#{data.data.id}</span>
            <h2 className="header-detail__title">{name}</h2>
            {
              data.data.types.map((v, i) => {
                return (
                  <label className="label" key={i}>{v.type.name} </label>
                )
              })
            }
          </div>
        </div>
      </header>

      <section>
        <h1 className="section__title">Base Stats</h1>
        <div className="stats">
          {
            data.data.stats.map((v, i) => {
              let colorBarClasses;
              if (v.base_stat > 50) {
                colorBarClasses = 'bar--primary'
              } else {
                colorBarClasses = 'bar--secondary'
              }
              return (
                <div key={i} className="stats__list">
                  <label className="stats__label">{replaceToString(v.stat.name)}</label>
                  <div className="stats__progressbar">
                    <div className="progressbar">
                      <span className={`bar ${colorBarClasses}`} 
                        style={{ width: `${(v.base_stat / 252) * 100}%` }}>
                        {v.base_stat}%
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      
      <br/>
      {
        !isCompare ? <button
          onClick={() => btnCompare() }
          className="btn bg-secondary">
          COMPARE
        </button> : ''
      }
    </>
  )
}

export default withRouter(Detail)