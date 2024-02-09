import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import Heading from "./components/Heading";







function App() {

  const [calVal , setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if(buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else if(buttonText === '()'){
      setCalVal(`(${calVal})`);
    }
    else if(buttonText === '⌫'){
      let org = calVal;
      let orgLen = org.length;
      let newOrg = org.replace(org[orgLen-1],"");
      setCalVal(newOrg);
    }
    else{
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }

  }


  return (
    <div className={styles.mainContainer}>
      <h1>Simple Calculator using React</h1>
      <div className={styles.calculator}>
        <Heading></Heading>
        <Display displayVal={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App
