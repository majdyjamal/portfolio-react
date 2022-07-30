import React from "react";
import profileImage from "../../assets/images/majdy-jamal.jpg";

const AboutMe = () => {
    return (
        <section className="container">
            <h1  className="row" id="about">About Me</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={profileImage} style={{ width: "100%" }} alt="Majdy Jamal photo"  />
                </div>
                <div className="col-12 col-md-6">
                    <p>Hi,<br/>My Name is Majdy Jamal, I am a senior software engineer and a Boot Camp Instructor for Adelaide University ...</p>
                    <p>I am looking forward for building yournext project for you and ...</p>
                    <p>I like camping and spending time with my family...</p>
                    <p>Thank you</p>
                    <p>Majdy</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;


