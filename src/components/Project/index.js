import React from "react";
import profileImage from "../../assets/images/majdy-jamal.jpg";

const Project = () => {
    return (
        <section className="container">
           {/* rem stands for “root em”, a unit of measurement that represents the font size of the root element */}
           <div className="card" style= {{width: 18 +'rem'}}> 
                <img className="card-img-top" src={profileImage} alt="Project Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Project 1</h5>
                    <p className="card-text">Project 1 ........Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="card-body">
                        <a href="#" className="card-link">Application</a>
                        <a href="#" className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;


