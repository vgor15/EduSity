import "./Title.css";

const Title = ({}) => {
  return (
    <div className="title">
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;
