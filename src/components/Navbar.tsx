import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import IconLeft from '../assets/icons/IconLeft.svg'
import { AppState } from '../redux/store';

type NavbarParams = {
  position?: string
}
type NavbarProps = NavbarParams;
const Navbar: FC<NavbarProps> = ({ position }) => {
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
        <Link to="/" className="navbar-brand">
          {position && <img src={IconLeft} alt="Back"/>}
        </Link>
        <Link to="/compare" className="navbar-menu">
          {state.data.length} Compare
        </Link>
      </nav>
    </>
  )
}

export default Navbar