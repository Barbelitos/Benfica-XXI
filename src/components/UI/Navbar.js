import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import navItems from "./NavItems";

import styles from "./Navbar.module.css";

import eusebio from "../../assets/eusebio.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleOpenMenu = () => {
    setClicked(!clicked);
  };

  const handleCloseMenu = () => {
    setClicked(false);
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "rgb(196, 26, 26)" : "",
    };
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.nav_image} src={eusebio} alt="Eusébio" />
      <div className={styles.nav_center}>
        <h2 className={styles.nav_title}>Benfica XXI</h2>
        <p className={styles.nav_subtitle}>
          O mais interessante e diversificado fórum de discussão benfiquista
        </p>
      </div>
      <ul
        className={
          clicked ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
        }
      >
        {navItems.map((item) => {
          return (
            <li key={item.key} className={styles.nav_item}>
              <NavLink
                style={navLinkStyle}
                className={styles.nav_link}
                to={item.url}
                onClick={handleCloseMenu}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={styles.nav_menu_icon} onClick={handleOpenMenu}>
        <i
          className={
            clicked
              ? `fas fa-times ${styles.open_menu}`
              : `fas fa-bars ${styles.open_menu}`
          }
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
