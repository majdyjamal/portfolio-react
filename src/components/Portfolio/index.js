import React from "react";
import Project from "../Project";

const myProjects = [
    {
        projectName: "Photo Gallary",
        projectDescription: "Portfolio site for my friend Lyza, built using React. ",
        projectIamge: "photo-gallary.jpg",
        projectDeployedApplicationUrl:"https://majdyjamal.github.io/photo-port/",
        projectGithubRepoUrl: "https://github.com/majdyjamal/photo-port"
    },
    {
        projectName: "",
        projectDescription: "",
        projectIamge: "",
        projectDeployedApplicationUrl:"",
        projectGithubRepoUrl: ""
    },
    {
        projectName: "",
        projectDescription: "",
        projectIamge: "",
        projectDeployedApplicationUrl:"",
        projectGithubRepoUrl: ""
    },
    {
        projectName: "",
        projectDescription: "",
        projectIamge: "",
        projectDeployedApplicationUrl:"",
        projectGithubRepoUrl: ""
    },
    {
        projectName: "",
        projectDescription: "",
        projectIamge: "",
        projectDeployedApplicationUrl:"",
        projectGithubRepoUrl: ""
    },
    {
        projectName: "",
        projectDescription: "",
        projectIamge: "",
        projectDeployedApplicationUrl:"",
        projectGithubRepoUrl: ""
    },
]
const Portfolio = () => {
    return (
        <section className="row">
            {myProjects.map((project,index) => (<Project key={`project${index}`} project={project}/>))}
        </section>
    );
}

export default Portfolio; 