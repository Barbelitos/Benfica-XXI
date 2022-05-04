import classes from "./CardButton.module.css";

const CardButton = ({ text, navigate }) => {
  const btnClickHandler = () => {
    window.open(navigate);
  };

  return (
    <button onClick={btnClickHandler} className={classes["card-button"]}>
      {text}
    </button>
  );
};

export default CardButton;
