import React from "react";

const Header = (props) => {
    return (
        <header className="App-header">
            <div className="jumbotron">
                <h1 className="display-4">Majdy Jamal</h1>
                
                <div className="lead">
                    {props.children}
                </div>
                <hr className="my-4" />
            </div>
        </header>
    );
}

export default Header;