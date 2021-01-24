import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import IconLeft from '../assets/icons/IconLeft.svg'
import { AppState } from '../redux/store';

type NavbarParams = {
  position?: string
}
type NavbarProps = NavbarParams;
const Navbar: FC<NavbarProps> = ({ position }) => {
  const history = useHistory()
  const state = useSelector((state: AppState) => state.pokemonCompare);
  let classes;
  if (position === 'absolute') {
    classes = 'navbar--absolute'
  } else if (position === 'static') {
    classes = 'navbar--static'
  } else {
    classes = 'navbar--default'
  }
  return (
    <>
      <nav className={`navbar ${classes}`}>
        {
          position && <button onClick={() => history.goBack()}
            className="navbar-brand"
            style={{ background: 'transparent', border: 0 }}>
            <img src={IconLeft} alt="Back"/>
          </button>
        }
        <Link to="/compare" className="navbar-menu">
          {state.data.length} Compare
        </Link>
      </nav>
    </>
  )
}

export default Navbar