import React from "react";
/* Sample
    {
        projectName: "Photo Gallary",
        projectDescription: "Portfolio site for my friend Lyza, built using React. ",
        projectIamge: "photo-gallary.jpg",
        projectDeployedApplicationUrl:"https://majdyjamal.github.io/photo-port/",
        projectGithubRepoUrl: "https://github.com/majdyjamal/photo-port"
    },
*/
const Project = (props) => {
    const {
        projectName, 
        projectDescription,
        projectIamge,
        projectDeployedApplicationUrl,
        projectGithubRepoUrl
    } = props.project;
    const defaultProjectIamge ="default-project-image.png";
console.log(projectIamge);
    return (
        <div className="card" style= {{width: 18 +'rem'}}> 
           {/* rem stands for “root em”, a unit of measurement that represents the font size of the root element */}
                {projectIamge 
                    ? <img className="card-img-top" src={require(`../../assets/images/${projectIamge}`)} alt={projectName}/> 
                    : <img className="card-img-top" src={require(`../../assets/images/${defaultProjectIamge}`)} alt={projectName}/>}
                <div className="card-body">
                    <h5 className="card-title">{projectName}</h5>
                    <p className="card-text">{projectDescription}</p>
                    <div className="card-body">
                        <a href={projectDeployedApplicationUrl} className="card-link">Application</a>
                        <a href={projectGithubRepoUrl} className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
    );
}

export default Project;


