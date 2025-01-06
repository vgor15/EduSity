import "./Title.css";

const Title = ({subTitle,title}) => {
  return (
    <div className="title">
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;