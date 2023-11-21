import { useState } from "react";
import "./styles.css";
import { CiStar } from "react-icons/ci";
export default function App() {
  const [data, setData] = useState(0);

  const handleClick = (num) => {
    setData(num);
  };
  return (
    <div className="App">
      {[...Array(5)].map((item, index) => {
        return (
          <CiStar
            className={`star ${index + 1 <= data ? "green" : ""}`}
            key={index}
            data-rating={index + 1}
            onClick={() => handleClick(index + 1)}
          />
        );
      })}
    </div>
  );
}
