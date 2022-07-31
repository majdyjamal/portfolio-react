import React from "react";

const Footer = () => {
    return (
        <footer className="container">
            <div className="row justify-content-center">
                <a className="col-1" href="https://github.com/majdyjamal" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a className="col-1" href="https://au.linkedin.com/in/majdy-jamal-b3624410" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                {/* This is not a real profile */}
                <a className="col-1" href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
