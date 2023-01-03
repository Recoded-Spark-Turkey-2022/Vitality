import { React } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  // const [state, setState] = useState({
  //   menu: false,
  //   isOpen: false,
  //   homeLinkClass: 'nav-item nav-link',
  //   aboutLinkClass: 'nav-item nav-link',
  //   menuClass: '',
  // });

  // const toggleMenu = () => {
  //   setState({
  //     ...state,
  //     menu: !state.menu,
  //   });
  // };

  // const toggleOpen = () => setState({ ...state, isOpen: !state.isOpen });

  // const show = state.menu ? 'show' : '';
  // const menuClass = `dropdown-menu${state.isOpen ? ' show' : ''}`;
  return (
    // <div className="bg-navbar sticky-top margin-bottom" >

    // <nav className="navbar navbar-expand-xl navbar-light bg-navbar sticky-top container margin-bottom">
    //   <Link className="navbar-brand" to="/">
    //     <img src={logo} alt="" width="30" height="24" />
    //   </Link>
    //   <Link className="navbar-brand" to="/">
    //     Vitality
    //   </Link>
    //   <button className="navbar-toggler" type="button" onClick={toggleMenu}>
    //     <span className="navbar-toggler-icon" />
    //   </button>
    //   <div className={`collapse navbar-collapse justify-content-end ${show}`}>
    //     <div className="navbar-nav gap-4">
    //       <Link
    //         className={state.homeLinkClass}
    //         to="/"
    //         onClick={() =>
    //           state.homeLinkClass === 'nav-item nav-link'
    //             ? 'nav-item nav-link active'
    //             : 'nav-item nav-link'
    //         }
    //       >
    //         Home <span className="sr-only">(current)</span>
    //       </Link>
    //       <Link
    //         className={state.aboutLinkClass}
    //         to="/blogs"
    //         onClick={() =>
    //           state.aboutLinkClass === 'nav-item nav-link'
    //             ? 'nav-item nav-link active'
    //             : 'nav-item nav-link'
    //         }
    //       >
    //         Blogs
    //       </Link>
    //       <button type="button" className="dropdown" onClick={toggleOpen}>
    //         <div
    //           className="dropdown-toggle"
    //           id="dropdownMenuButton"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //         >
    //           About
    //         </div>
    //         <div className={menuClass} aria-labelledby="dropdownMenuButton">
    //           <Link className="dropdown-item" to="/about">
    //             About{' '}
    //           </Link>
    //           <Link className="dropdown-item" to="/team">
    //             Team
    //           </Link>
    //           <Link className="dropdown-item" to="/requirements">
    //             Requirements
    //           </Link>
    //         </div>
    //       </button>

    //       <Link
    //         className={state.aboutLinkClass}
    //         to="/contact"
    //         onClick={() =>
    //           state.aboutLinkClass === 'nav-item nav-link'
    //             ? 'nav-item nav-link active'
    //             : 'nav-item nav-link'
    //         }
    //       >
    //         Contact Us
    //       </Link>

    //       <button type="button" className="dropdown " onClick={toggleOpen}>
    //         <div
    //           className="btn-login d-flex align-items-center justify-content-center"
    //           id="dropdownMenuButton"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //         >
    //           Log In
    //         </div>
    //         <div className={menuClass} aria-labelledby="dropdownMenuButton">
    //           <Link className="dropdown-item" to="/login">
    //             Log In{' '}
    //           </Link>
    //           <Link className="dropdown-item" to="/edit-profile">
    //             Edit Profile
    //           </Link>
    //           <Link className="dropdown-item" to="/requirements">
    //             Logout
    //           </Link>
    //         </div>
    //       </button>

    //     </div>
    //   </div>
    // </nav>
    // </div>

    // jquery navbar
    <div className="bg-navbar fixed-top margin-bottom">
      <nav
        className="navbar navbar-expand-sm  
 bg-navbar fixed-top container margin-bottom
      "
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="30" height="24" />
          </Link>
          <Link className="navbar-brand" to="/">
            Vitality
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav ms-auto gap-md-4">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/about"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  About
                </Link>
                <div className="dropdown-menu">
                  <Link to="/about" className="dropdown-item">
                    About
                  </Link>
                  <Link to="/team" className="dropdown-item">
                    Team
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-4">
              <li className="nav-item dropdown">
                <Link
                  to="/login"
                  className="nav-link dropdown-toggle btn-login d-flex align-items-center justify-content-center"
                  data-bs-toggle="dropdown"
                >
                  Log In
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link to="/login" className="dropdown-item">
                    Log In
                  </Link>
                  <Link to="/view-profile" className="dropdown-item">
                    View Profile
                  </Link>
                  <Link to="/edit-profile" className="dropdown-item">
                    Edit Profile
                  </Link>
                  <div className="dropdown-divider">i</div>
                  <Link to="/" className="dropdown-item">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
