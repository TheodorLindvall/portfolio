import { useContext } from "react";
import PortfolioContext from "../contexts/PortfolioContext";

export default function Home() {
  const { projects, techSkills } = useContext(PortfolioContext);

  return (
    <div className="container mx-auto p-4">
      <section className="hero">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-2">I'm [Your Name], a [Your Role]</p>
      </section>

      <section className="tech-skills mt-8">
        <h2 className="text-2xl font-semibold">Tech Skills</h2>
        <ul className="mt-4">
          {techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="projects mt-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {projects.map((project, index) => (
            <div key={index} className="card p-4 shadow-md">
              <h3 className="font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p>Tech: {project.tech}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">View More</a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
