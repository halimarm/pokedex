import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import IconLeft from '../assets/icons/IconLeft.svg'

type NavbarParams = {
  position?: string
}
type NavbarProps = NavbarParams;
const Navbar: FC<NavbarProps> = ({ position }) => {
  let classes;
  if (position === 'absolute') {
    classes = 'navbar--absolute'
  } else {
    classes = 'navbar--default'
  }
  return (
    <>
      <nav className={`navbar ${classes}`}>
        <Link to="/" className="navbar-brand">
          <img src={IconLeft} alt="Back"/>
        </Link>
      </nav>
    </>
  )
}

export default Navbar