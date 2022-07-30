import React, {useState} from "react";
import Project from "../Project";

const Portfolio = () => {
    const [myProjects] = useState([
        {
            projectName: "Photo Gallary",
            projectDescription: "Portfolio site for my friend Lyza, built using React. Both links should work correctly. ",
            projectIamge: "photo-gallary.jpg",
            projectDeployedApplicationUrl:"https://majdyjamal.github.io/photo-port/",
            projectGithubRepoUrl: "https://github.com/majdyjamal/photo-port"
        },
        {
            projectName: "Demo Project",
            projectDescription: "Another site that I have created using React, this is just a place holder only. The links goes to my GitHub account.",
            projectIamge: "",
            projectDeployedApplicationUrl:"https://github.com/majdyjamal",
            projectGithubRepoUrl: "https://github.com/majdyjamal"
        },
        {
            projectName: "Test Project",
            projectDescription: "Another site that I have created using React, this is just a place holder only. The links goes to my GitHub account.",
            projectIamge: "",
            projectDeployedApplicationUrl:"https://github.com/majdyjamal",
            projectGithubRepoUrl: "https://github.com/majdyjamal"
        },
        {
            projectName: "Html and CSS Project",
            projectDescription: "Another site that I have created using React, this is just a place holder only. The links goes to my GitHub account.",
            projectIamge: "",
            projectDeployedApplicationUrl:"https://github.com/majdyjamal",
            projectGithubRepoUrl: "https://github.com/majdyjamal"
        },
        {
            projectName: "Node.JS API Project",
            projectDescription: "Another site that I have created using React, this is just a place holder only. The links goes to my GitHub account.",
            projectIamge: "",
            projectDeployedApplicationUrl:"https://github.com/majdyjamal",
            projectGithubRepoUrl: "https://github.com/majdyjamal"
        },
        {
            projectName: "The Final Project",
            projectDescription: "Another site that I have created using React, this is just a place holder only. The links goes to my GitHub account.",
            projectIamge: "",
            projectDeployedApplicationUrl:"https://github.com/majdyjamal",
            projectGithubRepoUrl: "https://github.com/majdyjamal"
        },
    ]);

    return (
        <section className="container">
            <h1  className="row" id="Portfolio">Portfolio</h1>
            <div className="row">
                {myProjects.map((project,index) => (<Project key={`project${index}`} project={project}/>))}
            </div>
        </section>
    );
}

export default Portfolio;