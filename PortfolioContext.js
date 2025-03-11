import React, { createContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const storedTechSkills = JSON.parse(localStorage.getItem("techSkills")) || [];
    setProjects(storedProjects);
    setTechSkills(storedTechSkills);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  return (
    <PortfolioContext.Provider value={{ projects, setProjects, techSkills, setTechSkills }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
