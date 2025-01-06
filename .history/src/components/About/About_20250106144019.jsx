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
        <h2>Nurturing Tomorrow&apos;s leader today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit neque
          aliquam eligendi fugit? Dignissimos corporis dolor voluptas, tenetur
          sit cum temporibus? Distinctio quibusdam veritatis officia voluptatem
          itaque in facilis hic!Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eaque,
          voluptate alias doloribus ab sit, fugit nisi odit culpa deleniti
          fugiat eius officiis autem. Ipsa aliquid molestias facilis beatae
          doloremque.
        </p>
      </div>
    </div>
  );
};

export default About;
