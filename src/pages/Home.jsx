import "../styles/Home.css";
import { HomeNav } from "../components/HomeNav.jsx";
import { UserProjects} from "../components/UserProjects.jsx";
import { Hackathons} from "../components/Hackathons.jsx";


export const Home = () => {
  return (
    <>
      <HomeNav />
      <UserProjects />
      <Hackathons />
    </>
  );
};


