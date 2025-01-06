import "./About.css";
import about_1 from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1} alt="about" className="about_1" />
        <img src={play_icon} alt="play_icon" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nutritio</h2>
      </div>
    </div>
  );
};

export default About;
