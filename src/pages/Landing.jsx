import '../styles/landing.css'
import { Header } from "../components/Header.jsx";
import { Hero } from "../components/Hero.jsx";
import { Projects } from "../components/Projects.jsx";
import { Edu } from "../components/Edu.jsx";
import { Testimonial } from "../components/Testimonial.jsx";
import { Footer } from "../components/Footer.jsx";
export const Landing = () => {
  return (
    <section className="landing-page">
      <Header />
      <Hero />
      <Projects />
      <Edu />
      <Testimonial />
      <Footer />
    </section>
  );
};
