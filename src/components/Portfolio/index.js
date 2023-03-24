import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'calculator',
      description: 'JATE',
      link: "https://floating-chamber-47388.herokuapp.com/",
      repo: "https://github.com/ZechB7/Text-editor"
    },
    {
      name: 'pastel-puzzels',
      description: 'Quik Recipe',
      link: "https://zechb7.github.io/QuikRecipe/",
      repo: "https://github.com/ZechB7/QuikRecipe"
    },
    {
      name: 'surf-report',
      description: 'Review-Spotify',
      link: "https://respot-uta.herokuapp.com/",
      repo: "https://github.com/ZechB7/Re-Spot"
    },
    {
      name: 'run-buddy',
      description: 'Employee Tracker',
      link: "https://github.com/ZechB7/Employer-Tracker-12",
      repo: "https://github.com/ZechB7/Employer-Tracker-12"
    },
    {
      name: 'led-wall',
      description: 'Weather Dashboard',
      link: "https://zechb7.github.io/Weather-Dashboard-6/",
      repo: "https://github.com/ZechB7/Weather-Dashboard-6"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
