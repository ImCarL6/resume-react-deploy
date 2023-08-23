import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Menu = ({ menu }) => {
  const [show, setShow] = useState(false);

  const _handleActiveSection = (e) => {
    window.location.hash = e.target.hash;
    setShow(!show);
  };

  return (
    <div>
      <nav className="nav bd-container">
        <div className={show ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list">
            {menu.map(({ label, section, className }) => (
              <li className="nav__item" key={label}>
                <NavLink
                  className="nav__link"
                  activeClassName="active-link"
                  onClick={_handleActiveSection}
                  to={{ pathname: "/", hash: section }}
                  isActive={(m, l) => (l.hash === section ? true : false)}
                >
                  <i className={`bx ${className} nav__icon`} /> {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <span className="nav__logo">Menu</span>
      <div className="nav__toggle" id="nav-toggle" onClick={() => setShow(!show)}>
        <i className="bx bx-grid-alt" />
      </div>
    </div>
  );
};