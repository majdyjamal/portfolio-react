import React from "react";
import profileImage from "../../assets/images/majdy-jamal.jpg";

const AboutMe = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <img className="profilePhoto" src={profileImage} alt="Majdy Jamal"  />
                </div>
                <div className="col-12 col-md-8">
                    <p>Hi,<br/>My Name is Majdy Jamal, I am a senior software engineer, AWS certified solution architect-associate, and a university boot camp instructor ...</p>
                    <p>I am looking forward for building your next project for you and ...</p>
                    <p>I like camping and spending time with my family...</p>
                    <p>Thank you</p>
                    <p>Majdy</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
