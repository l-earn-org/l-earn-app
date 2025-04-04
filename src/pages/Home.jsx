import "../styles/Home.css";
import {HomeNav} from '../components/HomeNav.jsx'
// import { projects } from '../data/projects';

export const Home = () => {
  return (
    <>
      <HomeNav />
      {/* <UserProjects />
      <Hackathons /> */}
    </>
  );
};

{
  /* <h1>Hello</h1>
       {projects.map((item,i) => {
         return(
            <div key={i}>
                <img src={item.image}/>
                {item.title}
                {item.theme}
                {item.date}
            </div>
            
         )
       })}  */
}
