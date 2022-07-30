import React from "react";

const Footer = () => {
    return (
        <footer className="container">
            <div className="row w-100 justify-content-md-center">
                <a className="col-2" Stype href="https://github.com/majdyjamal" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a className="col-2" href="https://au.linkedin.com/in/majdy-jamal-b3624410" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                {/* This is not real profile */}
                <a className="col-2" href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;

