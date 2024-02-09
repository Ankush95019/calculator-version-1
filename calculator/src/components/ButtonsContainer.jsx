import styles from "./ButtonsContainer.module.css";
import styled from "styled-components";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "B",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "()",
    "=",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map( buttonName => <button className={styles.button} key={buttonName} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>)}
    </div>
  );
};
export default ButtonsContainer;
