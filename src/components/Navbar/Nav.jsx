import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx';
import imagen from './nobody_cares3.jpg'

export default function Navbar(props) {
  return (
    <>
      <nav className="navigation">
            <NavLink to="/home">
              <img src={imagen} alt="nobodyCares" />
            </NavLink>
            <SearchBar onSearch={props.onSearch}
                       inputText={props.inputText}
                       inputHandler={props.inputHandler}
            />
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
            <NavLink to="/favorites">
              <span>Favorites</span>
            </NavLink>
            
            <button title="logout"
                    onClick={props.logout}>
            Logout
            </button>
      </nav>
    </>
    )
}
