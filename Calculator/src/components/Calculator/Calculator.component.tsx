import  { useState } from "react";
import "./Calculator.css";
import ResultDisplay from "../Result.component/ResultDisplay.component";

const Calculator=  () => {
  const [input, setInput] = useState<string>(""); 
  const [result, setResult] = useState<number | string>(""); 

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        setResult(eval(input)); 
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
        setInput(""); 
        setResult("");
    } else {
      setInput((prev) => prev + value); 
    }
  };

  return (
    <div className="calculator-container">
      <ResultDisplay result={result || input || "0"} />
      <div className="button-grid">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button className="button1" onClick={() => handleButtonClick("+")}>+</button>
        <button className="button1" onClick={() => handleButtonClick("-")}>-</button>
        <button className="button2" onClick={() => handleButtonClick("C")}>C</button>
        <button className="button2" style={{ gridColumn: "span 2"}} onClick={() => handleButtonClick("=")}>=</button>

      </div>
    </div>
  );
};

export default Calculator;
