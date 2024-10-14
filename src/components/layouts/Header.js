import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase";
export default function Header() {
  const nav = useNavigate();
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  const logout = async () => {
    if (window.confirm("Do you really want to logout?")) {
      auth.signOut();
      sessionStorage.clear();
      toast.success("Logout successfully");
      nav("/login");
    }
  };
  const clickEnq = () => {
    const email = sessionStorage.getItem("email");
    if (!email) {
      toast.error("Please login");
      nav("/login");
    } else {
      nav("/enquiry");
    }
  };
  const userId = sessionStorage.getItem("email");
  return (
    <>
      {/* Navbar start */}
      <div className="container-fluid fixed-top px-0">
        <div className="topbar">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8">
              <div className="topbar-info d-flex flex-wrap">
                <a href="#" className="text-light me-4">
                  <i className="fas fa-envelope text-white me-2" />
                  purerivers033@gmail.com
                </a>
                <a href="#" className="text-light">
                  <i className="fas fa-phone-alt text-white me-2" />
                  9625667561
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="topbar-icon d-flex align-items-center justify-content-end">
                <a href="#" className="btn-square text-white me-2">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="btn-square text-white me-2">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="btn-square text-white me-2">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="btn-square text-white me-2">
                  <i className="fab fa-pinterest" />
                </a>
                <a href="#" className="btn-square text-white me-0">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light navbar-expand-xl">
          <div className="navbar-brand ms-3 d-flex justify-content-center align-items-center">
            <img src="/assets/img/logo.png" width="50px" alt="logo" />
            <h1
              className="text-primary fw-bold ps-1"
              style={{ fontFamily: "Gabriola", fontSize: "35px" }}
            >
              PureRivers
            </h1>
          </div>
          <button
            className="navbar-toggler py-2 px-3 me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div
            className="collapse navbar-collapse bg-light"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-item nav-link " onClick={scroll}>
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link" onClick={scroll}>
                About
              </Link>
              <Link to="/causes" className="nav-item nav-link" onClick={scroll}>
                Causes
              </Link>
               <div className="nav-item dropdown">
                <button
                  className="btn btn-light dropdown-toggle nav-link"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cleaning Drives
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" style={{width:"100px",backgroundColor:"rgb(7, 137, 177)"}}>
                <li>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/upcomingdrives">
                      Upcoming Drives
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pastdrives" >
                      Past Drives
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="/posts" className="nav-item nav-link" onClick={scroll}>
                Posts
              </Link>
              <a
                className="nav-item nav-link "
                onClick={clickEnq}
                style={{ cursor: "pointer" }}
              >
                Enquiry
              </a>
               <div className="nav-item dropdown">
               {!userId ? (
                <Link
                  to="/login"
                  className="nav-item nav-link d-flex justify-content-center text-align-center"
                >
                 <img
                    src={"/assets/img/profile.png"}
                    width="30px"
                    height="30px"
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      borderRadius: "100px",
                    }}
                  />
                  Login
                </Link>
              ) : (
                <div>
                <Link
                  to="/profile"
                  className="nav-item nav-link d-flex justify-content-center text-align-center"
                >
                  <img
                    src={sessionStorage.getItem('image') ? sessionStorage.getItem('image') : "/assets/img/profile.png"}
                    width="30px"
                    height="30px"
                    style={{
                      fontSize: "25px",
                      marginRight: "5px",
                      borderRadius: "100px",
                    }}
                    onError={(e) => { e.target.src = "/assets/img/profile.png"; }}
                  />
                  Account
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" style={{width:"100px",backgroundColor:"rgb(7, 137, 177)"}}>
                  <li>
                    <Link className="dropdown-item" to="/history">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </ul>
                </div>
              )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
}
