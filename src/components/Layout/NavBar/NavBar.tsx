import React from "react";
import NavBarStyles from "./NavBarStyles";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../DrawerToggle/DrawerToggle";

interface NavBarProps {
  drawerToggleClicked?: () => void;
}

const NavBar = ({ drawerToggleClicked }: NavBarProps) => {
  return (
    <NavBarStyles>
      <div>
        {/*Display Logo top right */}
        <Logo className="nav-logo" />
        {/*When screen size is less than 767px then show Mobile toolbar with hamburger icon */}
        <nav>
          <DrawerToggle clicked={drawerToggleClicked} />
        </nav>
      </div>
      {/*When screen size is greater than 767px then show Desktop toolbar */}
      <div className="desktop-nav">
        <nav>
          {/*Display site's title*/}
          <h1>A.O'Toole</h1>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/routes">Routes</NavLink>
            </li>
            <li>
              <NavLink to="/cv">CV</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </NavBarStyles>
  );
};
export default NavBar;
