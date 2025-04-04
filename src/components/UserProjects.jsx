import userImg from "../assets/user34.jpg";

export const UserProjects = () => {
  return (
    <div className="user-projects-container">
      <div className="left">
        <h2>Welcome Alvin,</h2>
        <img src={userImg} />
      </div>
      <div className="right">
        <div className="done-container">
          <h3>12</h3>
          <h4>Projects Done</h4>
        </div>
        <div className="current-container">
          <h3>4</h3>
          <h4>Current Projects</h4>
        </div>
      </div>
    </div>
  );
};
