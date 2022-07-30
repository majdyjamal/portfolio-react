import React from "react";

const Nav = () => {
    return (
        <nav className="container">
            <ul className="row">
                <li className="col"><span>About Me</span></li>
                <li className="col"><span>Portfolio</span></li>
                <li className="col"><span>Contact</span></li>
                <li className="col"><span>Resume</span></li>
            </ul>

            <p className="row">The title corresponding to the current section is highlighted.

                WHEN I click on a navigation title
                THEN I am presented with the corresponding section below the navigation
                without the page reloading

                and that title is highlighted
            </p>
        </nav>
    );
}

export default Nav;