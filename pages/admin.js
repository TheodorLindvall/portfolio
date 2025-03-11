import { useState, useContext } from "react";
import PortfolioContext from "../contexts/PortfolioContext";

export default function Admin() {
  const { projects, setProjects, techSkills, setTechSkills } = useContext(PortfolioContext);
  const [newProject, setNewProject] = useState({ title: "", description: "", tech: "", link: "" });
  const [newSkill, setNewSkill] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "your password") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function addProject() {
    setProjects([...projects, newProject]);
    setNewProject({ title: "", description: "", tech: "", link: "" });
  }

  function addSkill() {
    setTechSkills([...techSkills, newSkill]);
    setNewSkill("");
  }

  return loggedIn ? (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      <section className="add-project mt-8">
        <h2 className="text-xl">Add Project</h2>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tech"
          value={newProject.tech}
          onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={newProject.link}
          onChange={(e) => setNewProject({ ...newProject, link: e.target.value })}
        />
        <button onClick={addProject}>Add Project</button>
      </section>

      <section className="add-skill mt-8">
        <h2 className="text-xl">Add Skill</h2>
        <input
          type="text"
          placeholder="Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </section>

      <section className="preview mt-8">
        <h2 className="text-xl">Preview</h2>
        <p><strong>Projects:</strong> {projects.map((p) => p.title).join(", ")}</p>
        <p><strong>Skills:</strong> {techSkills.join(", ")}</p>
      </section>
    </div>
  ) : (
    <div className="container mx-auto p-4">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
