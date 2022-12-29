import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';

function Navbar() {
  const [state, setState] = useState({
    menu: false,
    isOpen: false,
    homeLinkClass: 'nav-item nav-link',
    aboutLinkClass: 'nav-item nav-link',
    menuClass: '',
  });

  const toggleMenu = () => {
    setState({
      ...state,
      menu: !state.menu,
    });
  };

  const toggleOpen = () => setState({ ...state, isOpen: !state.isOpen });

  const show = state.menu ? 'show' : '';
  const menuClass = `dropdown-menu${state.isOpen ? ' show' : ''}`;
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-navbar width-height">
      <Link className="navbar-brand" to="/">
        Vitality
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`collapse navbar-collapse ${show}`}>
        <div className="navbar-nav">
          <Link
            className={state.homeLinkClass}
            to="/"
            onClick={() =>
              state.homeLinkClass === 'nav-item nav-link'
                ? 'nav-item nav-link active'
                : 'nav-item nav-link'
            }
          >
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link
            className={state.aboutLinkClass}
            to="/blogs"
            onClick={() =>
              state.aboutLinkClass === 'nav-item nav-link'
                ? 'nav-item nav-link active'
                : 'nav-item nav-link'
            }
          >
            Blogs
          </Link>
          <button type="button" className="dropdown" onClick={toggleOpen}>
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
           About
          </div>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/about">
              About{' '}
            </Link>
            <Link className="dropdown-item" to="/team">
              Team
            </Link>
          </div>
        </button>

        <Link
            className={state.aboutLinkClass}
            to="/contact"
            onClick={() =>
              state.aboutLinkClass === 'nav-item nav-link'
                ? 'nav-item nav-link active'
                : 'nav-item nav-link'
            }
          >
            
            Contact Us
          </Link>

          <Link
            className={`${state.aboutLinkClass} btn-login d-flex align-items-center justify-content-center`}
            to="/login"
            onClick={() =>
              state.aboutLinkClass === 'nav-item nav-link'
                ? 'nav-item nav-link active'
                : 'nav-item nav-link'
            }
          >
            Log In
          </Link>
        </div>


      </div>
    </nav>
  );
}

export default Navbar;
