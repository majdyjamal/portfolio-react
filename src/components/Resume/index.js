import React from "react";

const Resume = () => {
    return (
        <section className="container">
            <h1 className="row" id="Resume">Resume</h1>
            <div className="row">
                <div className="my-2">
                    <p>Download my <a href="https://au.linkedin.com/in/majdy-jamal-b3624410">resume.</a></p>
                    <h3>Front-end</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h3>Back-end</h3>
                    <ul>
                        <li>C#</li>
                        <li>.Net Framework</li>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>SQL Server and MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <h3>Cloud</h3>
                    <ul>
                        <li>AWS Certified Solution Architect - Associate</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Resume;


