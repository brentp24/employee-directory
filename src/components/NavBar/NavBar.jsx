import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" to="/">
                Big Company
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                        >
                            Directory
                        </Link>
                    </li>
                </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                        >
                            Login
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;
