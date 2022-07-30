import React from "react";

const Header = (props) => {
    return (
        <header className="App-header">
            <h1>Majdy Jamal</h1>
            {props.children}
        </header>
    );
}

export default Header;