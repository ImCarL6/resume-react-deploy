import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);

  const _handleActiveSection = () => {
    setShow(!show);
  };

  return (
    <div>
      <nav className="nav bd-container">
        <div className={show ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list">
            {menu.map(({ label, section, className }) => (
              <li className="nav__item" key={label}>
                <HashLink
                  className="nav__link"
                  activeclasscame="active-link"
                  onClick={_handleActiveSection}
                  smooth
                  to={`/${section}`}
                >
                  <i className={`bx ${className} nav__icon`} /> {label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <span className="nav__logo">Menu</span>
      <div className="nav__toggle" id="nav-toggle" onClick={() => setShow(!show)}>
        <i className="bx bx-grid-alt" />
      </div>
      <Outlet /> {/* Add the Outlet here */}
    </div>
  );
};