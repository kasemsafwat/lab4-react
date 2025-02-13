
import { NavLink, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext';
import { useContext } from 'react';
import { TokenContext } from '../../Context/TokenContext';

export default function NavBar() {

  let {count} = useContext(CounterContext);
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();
  function logOut(){
    localStorage.removeItem("userToken")
    setToken(null)
    navigate("/login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink to={"/home"} className="nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link">
                      Contact {count}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/settings"} className="nav-link">
                      Settings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <p style={{cursor:'pointer'}} onClick={logOut} to={"/settings"} className="nav-link">
                      LogOut
                    </p>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to={"/login"} className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/register"} className="nav-link">
                      register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
