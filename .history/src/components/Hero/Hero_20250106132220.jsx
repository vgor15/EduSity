import "../Hero/Hero.css";
import dark_arrow = "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          ducimus asperiores expedita voluptatum ab, porro non sint omnis nulla
          illo, laborum, saepe ipsum aliquid beatae in doloremque sit adipisci
          dolore.
        </p>
        <button className="btn">
          Explore more{" "}
          <img src={dark_arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
