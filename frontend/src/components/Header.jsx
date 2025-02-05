import React from "react";
import { useAuth } from "../context/auth";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    // toast.success("Logout Successfully");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" className="hover">
                <Link class="nav-link active" aria-current="page" to="/" style={{fontSize:"1.3rem"}}>
                  Home
                </Link>
              </li>
              <li class="nav-item" className="hover">
                <Link class="nav-link active" to="/about" style={{fontSize:"1.3rem"}}>
                  About Us
                </Link>
              </li>
              <li class="nav-item" className="hover">
                <Link class="nav-link active" to="/con" style={{fontSize:"1.3rem"}}>
                  Contact Us
                </Link>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item" class="hover">
                    <Link to="http://localhost:5173/register" className="nav-link" style={{fontSize:"1.3rem"}}>
                      Register
                    </Link>
                  </li>
                  <li className="nav-item" class="hover">
                    <NavLink to="http://localhost:5173/login" className="nav-link" style={{fontSize:"1.3rem"}}>
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown ">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" ,fontSize:'1.3rem'}}
                      
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              <li class="nav-item" className="hover">
                <Link class="nav-link active" to="/worker" style={{fontSize:"1.3rem"}}>
                  Skilled Workers Registration
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
