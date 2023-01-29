import React , {useState}   from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {  onAuthStateChanged , signOut } from 'firebase/auth';
import './navbar.css';
import logo from '../../assets/images/logo.png';
import { auth  } from '../../config/fire';


function Navbar() {
  const logout = async () => {
    await signOut(auth);
    console.log("log out");
    window.location.reload()
  }
  const [currentUserstate, setcurrentUserstate] = useState('');
   onAuthStateChanged(auth, (currentUser) => {
     if(currentUser) {
   setcurrentUserstate(true)
      }
         }); 
   
  return (


    
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
            {currentUserstate === true &&
            <div>

 <li className="nav-item dropdown">
 <Link
   to="/login"
   className="nav-link dropdown-toggle btn-login d-flex align-items-center justify-content-center"
   data-bs-toggle="dropdown" id="navbar-login"
 >
   {currentUserstate? 'My Profile' : 'Login'}
 </Link>
 <div className="dropdown-menu dropdown-menu-end">
  
   <Link to="/view-profile" className="dropdown-item">
     View Profile
   </Link>
   <Link to="/edit-profile" className="dropdown-item">
     Edit Profile
   </Link>
   <div className="dropdown-divider">i</div>
   <Link to="/" className="dropdown-item" onClick={logout}>              
     Logout
   </Link>
 </div>
</li> 
</div>
  }
    {currentUserstate !== true &&
       <li className="nav-item">
 <Link to="/login"  className="nav-link  btn-login d-flex align-items-center justify-content-center">
 Log In
</Link></li>
}        
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
