import { projects } from "../data/projects";
import learnMoreIcon from "../assets/share.png";

export const Hackathons = () => {
  return (
    <div className="hackathons-container">
      <h2>Your Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => {
          return (
            <div key={i} className="hackathon-container">
              <img className="hackathon-banner" src={project.image} />
              <h3>{project.title}</h3>
              <p>{project.theme}</p>
              <div className="date-view-more-container">
                <div className="date-container">
                  <p>{project.date}</p>
                </div>
                <div className="view-more-container">
                  <img src={learnMoreIcon} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
