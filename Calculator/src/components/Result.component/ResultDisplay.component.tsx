import "./ResultDisplay.css";

interface ResultDisplayProps {
  result: string | number;
}

const ResultDisplay= ( props:ResultDisplayProps ) => {
  return <div className="result-display">{props.result}</div>;
};

export default ResultDisplay;
