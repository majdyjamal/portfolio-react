import React from "react";

const Project = (props) => {
    const {
        projectName, 
        projectDescription,
        projectIamge,
        projectDeployedApplicationUrl,
        projectGithubRepoUrl
    } = props.project;
    
    const defaultProjectIamge ="default-project-image.png";

    return (
        <div className="card m-3" style= {{width: 20 +'rem'}}> {/* rem stands for “root em”, a unit of measurement that represents the font size of the root element */}
                {projectIamge 
                    ? (<img className="card-img-top" src={require(`../../assets/images/${projectIamge}`)} alt={projectName}/>) 
                    : (<img className="card-img-top" src={require(`../../assets/images/${defaultProjectIamge}`)} alt={projectName}/>)
                }
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
