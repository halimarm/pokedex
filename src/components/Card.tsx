import React, { FC } from 'react'

type CardParams = {
  id: string
  name: string
}
type CardProps = CardParams;
const Card: FC<CardProps> = ({ name, id }) => {
  return (
    <>
      <div className="card">
        <div className="card__body">
          <div className="col">
            <h1 className="card__title">{name}</h1>
          </div>
          <div className="col">
            <img
              className="card__img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt={name} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card