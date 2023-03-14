import React from 'react';
// [
//   {
//     "name": "team-profile-generator",
//     "repository": {
//       "type": "git",
//       "url": "git+https://github.com/anthonycroft/team-profile-generator"
//     },
//     "screenshots": [
//       "https://github.com/anthonycroft/react-portfolio/blob/main/assets/images/team-profile-generator.png"

//     ]
//   }
// ]

const ProjectCard = ({project}) => {

  return (
    <div className="project">
    <div>
      <p>{project.Name}</p>
    </div>

    <div>
      <img src={project.screenshot} alt={project.Title}/>
    </div>

    <div>
      <span>{project.Repository}</span>
      <h3>{project.Title}</h3>
    </div>
    </div>
  )
}

export default ProjectCard;