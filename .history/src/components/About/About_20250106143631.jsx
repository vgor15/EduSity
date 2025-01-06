import "./About.css";
import about_1 from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1} alt="about" className=""/>
        <img src={play_icon} alt="play_icon" className="play_icon"/>
      </div>
      <div className="about-right"></div>
    </div>
  );
};

export default About;
