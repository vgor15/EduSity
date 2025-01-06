import "./About.css";
import about_1 from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_1} alt="about" />
      </div>
      <div className="about-right">
        <img src={play_icon} alt="" />
      </div>
    </div>
  );
};

export default About;