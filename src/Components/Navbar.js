import React from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
  return (
    <nav
      style={{
        background: props.navbarStyle.backgroundColor,
        color: props.navbarStyle.textColor,
      }}
      className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul className="dropdown-menu">
                <li
                  onClick={() => {
                    props.setThemeColor("lightBlue");
                  }}
                >
                  <a className="dropdown-item" href="#">
                    Light Blue
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <button
            style={{
              background: props.navbarStyle.backgroundColor,
              color: props.navbarStyle.textColor,
              border: "none",
            }}
            className={`btn btn-${props.mode} mx-2`}
            onClick={props.changeMode}
          >
            <i className={props.className}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title",
};
