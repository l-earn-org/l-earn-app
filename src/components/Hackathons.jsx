import { projects } from "../data/projects";
import { recommendedProjects } from "../data/recommendedProjects";
import learnMoreIcon from "../assets/share.png";
import rightIcon from "../assets/rightButton.png";

export const Hackathons = () => {
  return (
    <div className="hackathons-container">
      <h2>Your Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => {
          return (
            <div key={i} className="hackathon-container">
              <div className="banner-theme-container">
                <img className="hackathon-banner" src={project.image} />
                <section>
                  <h3>{project.title}</h3>
                  <p>{project.theme}</p>
                </section>
              </div>
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
      <button className="view-more-button">
        View More<img src={rightIcon}/>
      </button>
      <h2>Recommended</h2>
      <div className="projects-grid">
        {recommendedProjects.map((project, i) => {
          return (
            <div key={i} className="hackathon-container">
              <div className="banner-theme-container">
                <img className="hackathon-banner" src={project.image} />
                <section>
                  <h3>{project.title}</h3>
                  <p>{project.theme}</p>
                </section>
              </div>
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
      <button className="view-more-button">
        View More<img src={rightIcon}/>
      </button>
    </div>
  );
};
