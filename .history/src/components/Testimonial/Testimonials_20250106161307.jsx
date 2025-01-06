import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img src={next_icon} alt="next icon" className="nxt-btn" />
      <img src={back_icon} alt="back icon" className="nxt-btn" />
    </div>
  );
};

export default Testimonials;
