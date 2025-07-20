import { useState } from "react";
import "./Navbar.css";

const items = ["Action", "Adventure", "RPG"];
const Navbar = () => {
  // State function for dropdown menu
  const [ifVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!ifVisible);
  };
  const [ifGlow, setIfGlow] = useState(false);

  const [itemSelected, setItemSelected] = useState(-1);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className={ifGlow ? "navbar-brand glow" : "navbar-brand"}
            onMouseEnter={() => setIfGlow(true)}
            onMouseLeave={() => setIfGlow(false)}
            href="#"
          >
            TODO <span>APPS</span>
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  onClick={() => handleClick()}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                {ifVisible && (
                  <ul className="dropdown-menu show">
                    {" "}
                    {items.map((item, index) => (
                      <li>
                        <a
                          className={
                            itemSelected === index
                              ? "dropdown-item active"
                              : "dropdown-item"
                          }
                          href="#"
                          onMouseEnter={() => setItemSelected(index)}
                        >
                          {item}{" "}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
