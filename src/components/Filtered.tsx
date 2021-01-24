import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { REACT_APP_API_URL } from '../utils/Env';

const Filtered: FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getPokemonType()
  }, []);

  const getPokemonType = () => {
    fetch(`${REACT_APP_API_URL}/type`, {
      method: "GET"
    }).then(res => res.json())
      .then((res) => {
        setData(res.results);
      })
      .catch(err => {
        console.warn(err);
      });
  }

  return (
    <>
      {
        data.map((v: { name: string }, i) => {
          return (
            <Link to={`/type/${v.name}`} key={i}>
              <div className="list__item list__item--3">
                <div className="card bg-secondary">
                  <div className="card__body">
                    <h1 className="card__subtitle">{v.name}</h1>
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Filtered