import React from "react";
import logo from "../../icons/navbar-icon.png";
import styles from "./styles.module.scss";

function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} />
                <h2>My travel journal</h2>
            </nav>
        </header>
    );
}

export default Navbar;
