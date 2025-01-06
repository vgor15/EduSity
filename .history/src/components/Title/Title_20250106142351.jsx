import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <p>{props.subtitle}</p>
      <h2>{props.Title}</h2>
    </div>
  );
};

export default Title;
