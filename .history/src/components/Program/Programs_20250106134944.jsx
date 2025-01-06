import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import icon from "../../assets/"
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="program 1" />
        <div className="caption">
            <img src="" alt="" />
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program 2" />
      </div>
      <div className="program">
        <img src={program_3} alt="program 3" />
      </div>
    </div>
  );
};

export default Programs;