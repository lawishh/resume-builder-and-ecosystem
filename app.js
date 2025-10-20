import { useState } from "react";
import "./App.css";
import { FaUser, FaGraduationCap, FaBriefcase, FaProjectDiagram, FaCertificate, FaAward, FaTools, FaEnvelope, FaGlobe } from "react-icons/fa";

function App() {
  // All the form states
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [internship, setInternship] = useState("");
  const [certifications, setCertifications] = useState("");
  const [achievements, setAchievements] = useState("");
  const [skills, setSkills] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");

  return (
    <div className="app-container">
      <header className="app-header">
        <h2>Dynamic Resume Builder</h2>
      </header>

      <div className="main-section">
        {/* Left glassy form */}
        <div className="form-glass">
          <h3 className="form-title">Enter Details</h3>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaBriefcase className="input-icon" />
            <input
              type="text"
              placeholder="Job Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Professional Summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />

          <div className="input-group">
            <FaGraduationCap className="input-icon" />
            <input
              type="text"
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <textarea
            placeholder="Projects"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
          />
          <textarea
            placeholder="Internship"
            value={internship}
            onChange={(e) => setInternship(e.target.value)}
          />
          <textarea
            placeholder="Certifications"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
          />
          <textarea
            placeholder="Achievements"
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
          />

          <div className="input-group">
            <FaTools className="input-icon" />
            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaGlobe className="input-icon" />
            <input
              type="text"
              placeholder="Portfolio or LinkedIn"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
        </div>

        {/* Right preview */}
        <div className="preview-glass">
          <div className="resume-card">
            <div className="resume-header">
              <h2>{name || "Your Name"}</h2>
              <h4>{title || "Your Job Title"}</h4>
            </div>

            <div className="resume-body">
              <h3>Summary</h3>
              <p>{summary || "Write a short professional summary here."}</p>

              <h3>Education</h3>
              <p>{education || "Add your education details here."}</p>

              <h3>Experience</h3>
              <p>{experience || "Add your work or internship experience."}</p>

              <h3>Projects</h3>
              <p>{projects || "List your projects or key works."}</p>

              <h3>Internship</h3>
              <p>{internship || "Mention internship details."}</p>

              <h3>Certifications</h3>
              <p>{certifications || "Add your certificates or courses."}</p>

              <h3>Achievements</h3>
              <p>{achievements || "Mention your achievements or awards."}</p>

              <h3>Skills</h3>
              <p>{skills || "List your skills here."}</p>

              <h3>Contact</h3>
              <p>Email: {email || "your.email@example.com"}</p>
              <p>Portfolio: {portfolio || "www.linkedin.com/in/yourname"}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">Built by A — Creative Resume UI</footer>
    </div>
  );
}

export default App;
