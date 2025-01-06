import "./About.css";
import about_1 from "../../assets/about.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1} alt="about" />
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
