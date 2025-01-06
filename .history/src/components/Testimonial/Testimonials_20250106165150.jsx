import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const [] = use
  return (
    <div className="testimonials">
      <img src={next_icon} alt="next icon" className="nxt-btn" />
      <img src={back_icon} alt="back icon" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user 1" className="user-1" />
                <h3>John Doe</h3>
                <span>CEO, Company Inc.</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
                blanditiis fugit, odit voluptatem nobis tempora ad. Doloribus
                nulla, placeat quas molestias, provident atque nihil suscipit,
                asperiores libero voluptate quia consectetur!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user 1" className="user-1" />
                <h3>John Doe</h3>
                <span>CEO, Company Inc.</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati placeat ullam illum culpa, odit molestias at, eius
                repellat architecto impedit, nemo ad recusandae animi officia
                laudantium sit eligendi delectus distinctio!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user 1" className="user-1" />
                <h3>John Doe</h3>
                <span>CEO, Company Inc.</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user 1" className="user-1" />
                <h3>John Doe</h3>
                <span>CEO, Company Inc.</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
