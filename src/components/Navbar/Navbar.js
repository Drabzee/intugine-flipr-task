import React from 'react';
import logo from '../../assets/logo.svg';
import profile from '../../assets/profile.svg';
import Avatar from '../Avatar/Avatar';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.brand}>
        <img style={style.logo} width={50} src={logo} alt="logo"/>
        <h2>Intugine</h2>
      </div>
      <ul className={style.menu}>
        <li className={style.active}>Home</li>
        <li>Brand</li>
        <li>Transporters</li>
      </ul>
      <div className={style.dropdown}>
        <Avatar bgColor="#c0c2ca" width="20" img={profile} alt="profile" margin="45% 50%" />
        <span className={style.icon}><i class="fa fa-chevron-down" aria-hidden="true"></i></span>
      </div>
    </div>
  )
}

export default Navbar;