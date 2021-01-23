import React, { FC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type DetailParams = {
  name: string
}
type DetailProps = RouteComponentProps<DetailParams>
const Detail: FC<DetailProps> = ({ match }) => {
  return (
    <>
      <h1>{match.params.name}</h1>
    </>
  )
}

export default withRouter(Detail)