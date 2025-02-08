// src/components/Projects/Projects.jsx

import React, { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard"; 

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, id) => <ProjectCard key={id} project={project} />)
        )}
      </div>
    </section>
  );
};
