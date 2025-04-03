import projectImage from "../assets/projects.png";
import rightIcon from "../assets/next.png";

export const Project = () => {
  return (
    <section className="project-container">
      <div className="left">
        <img src={projectImage} />
        <p>
          Pipeline Surveying and Designing for Kenyatta Market Sewerage flow{" "}
        </p>
        <span>by Geo Symmetry Surveyors </span>
        <div>
          <h2>
            To Students in:
            <ul>
              <li>BSC in Civil Engineering </li>
              <li>
                Field related to Surveying, GIS Mapping, Hydrology,
                Geotechnology and Water flow design
              </li>
            </ul>
          </h2>
        </div>
      </div>
      <div className="right">
        <h3>Project Details </h3>
        <p>
          Location:<span> Lower Gate KM</span>
        </p>
        <p>
          Period:<span> 2 months </span>
        </p>
        <p>
          Maximum teams:<span> 6 teams </span>
        </p>
        <p>
          Stipends: <span>KES 30,000 per qualified team </span>
        </p>
        <p>
          Instructors: <span>James Wainaina, Charles Njoroge</span>
        </p>
        <h2>
          Procedure
          <ol>
            <li>Route Selection & Mapping </li>
            <li>Hydrological & Geotechnical Analysis</li>
            <li>Flow Rate & Pressure Analysis </li>
          </ol>
        </h2>
        <h2>
          Tools offered
          <ol>
            <li>Total Station & GPS </li>
            <li>GIS Software</li>
            <li>Drones & LIDAR </li>
            <li>Hydraulic Modeling Software </li>
          </ol>
        </h2>
        <h2>
          Qualification criteria
          <ol>
            <li> The team must complete the project fully </li>
            <li>The team must follow instructions by the instructor</li>
            <li>The team must not interfere with other participating teams </li>
          </ol>
        </h2>
        <button>
          Go to Apply
          <img src={rightIcon} />
        </button>
      </div>
    </section>
  );
};
