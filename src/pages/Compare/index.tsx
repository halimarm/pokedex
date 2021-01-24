import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Navbar from '../../components/Navbar'
import { AppState } from '../../redux/store'
import { replaceToString } from '../../utils/Utils'

const Compare: FC = () => {
  const data = useSelector((state: AppState) => state.pokemonCompare);
  
  if (!data.data) return <p>Loading...</p>

  const renderRow = () => {
    const result = data.data.map((v) => {
      return (
        <div key={v.id} className="list__item list__item--2">
          <Link to={`/pokemon/${v.name}`}>
            <Card
              id={v.id.toString()}
              name={v.name}
            />
            <section>
              <div className="stats">
                {
                  v.stats.map((d, index) => {
                    let colorBarClasses;
                    if (d.base_stat > 50) {
                      colorBarClasses = 'bar--primary'
                    } else {
                      colorBarClasses = 'bar--secondary'
                    }
                    return (
                      <div key={index} className="stats__list" style={{ marginBottom: 8 }}>
                        <label className="stats__label">{replaceToString(d.stat.name)}</label>
                        <div className="stats__progressbar">
                          <div className="progressbar">
                            <span className={`bar ${colorBarClasses}`} 
                              style={{ width: `${d.base_stat}%` }}>
                              {d.base_stat}%
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </section>
          </Link>
        </div>
      )
    })
    return result
  }
  
  return (
    <>
      <Navbar position="static" />
      <section>
        <h1 className="section__title">Comparation</h1>
        <div className="list">
          {
            data.data.length > 0 ?
            renderRow() :
            <p className="list__item">Tidak ada data</p>
          }
        </div>
      </section>
    </>
  )
}

export default Compare