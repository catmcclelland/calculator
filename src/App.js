import "./App.css";
import "./index.css";

import { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
//tests
//The sequence "5 * - + 5" = should produce an output of "10" : expected '0' to equal '10'
function App() {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [operator, setOperator] = useState();
  //when flag is true, start a new number
  const [flag, setFlag] = useState();
  const [flag2, setFlag2] = useState();

  const equals = () => {
    let num3;
    if (!num2) {
      num3 = parseFloat(display);
    } else {
      num3 = num2;
    }
    //const num2 = parseFloat(display);

    switch (operator) {
      case "+":
        setDisplay(parseFloat(num1 + num3));
        setNum1(parseFloat(num1 + num3));
        break;
      case "-":
        setDisplay(parseFloat(num1 - num3));
        setNum1(parseFloat(num1 - num3));
        break;
      case "/":
        setDisplay(parseFloat(num1 / num3));
        setNum1(parseFloat(num1 / num3));
        break;
      case "x":
        setDisplay(parseFloat(num1 * num3));
        setNum1(parseFloat(num1 * num3));
        break;
      default:
        setDisplay(0);
    }
    setNum2();
    setFlag(true);
    setOperator();
  };
  const posneg = () => {
    setDisplay(display * -1);
  };
  const decimal = () => {
    const str = new String(display);
    if (flag) {
      setDisplay(".");
    } else if (!str.includes(".")) {
      setDisplay(`${display}.`);
    }
  };
  const clear = () => {
    setDisplay(0);
    setNum2();
    setNum1();
  };
  const appendNum = (num) => {
    const str = new String(display);
    if (str.includes("-") && str.length === 1) {
      setDisplay(`-${num}`);
      setFlag(false);
    } else if (display == 0 && !str.includes(".")) {
      setDisplay(num);
    } else if (str.includes(".") && flag == true) {
      setDisplay(`${num}`);
    } else if (num1 && flag == true) {
      setDisplay(num);
      setFlag(false);
    } else if (str.length < 8) {
      setDisplay(`${display}${num}`);
    }
    setFlag(false);
    setFlag2(true);
  };
  const sqrt = () => {
    setDisplay(Math.sqrt(display));
  };
  const percent = () => {
    setDisplay(display / 100);
  };
  const add = () => {
    if (display === "-") {
      setDisplay(num1);
      setOperator("+");
    } else if (operator && flag === true) {
      setOperator("+");
    } else if (num1 && flag2 === true) {
      equals();
      setOperator("+");
      setFlag2(false);
    } else {
      setNum1(parseFloat(display));
      setOperator("+");
    }

    setFlag(true);
  };

  const subtract = () => {
    if (operator && flag === true) {
      appendNum("-");
      setFlag(false);
    } else if (num1 && flag2 === true) {
      equals();
      setOperator("-");
      setFlag2(false);
    } else {
      setNum1(parseFloat(display));
      setOperator("-");
    }

    setFlag(true);
  };

  const divide = () => {
    if (display === "-") {
      setDisplay(num1);
      setOperator("/");
    } else if (operator && flag === true) {
      setOperator("/");
    } else if (num1 && flag2 === true) {
      equals();
      setOperator("/");
      setFlag2(false);
    } else {
      setNum1(parseFloat(display));
      setOperator("/");
    }

    setFlag(true);
  };

  const multiply = () => {
    if (display === "-") {
      setDisplay(num1);
      setOperator("x");
    } else if (operator && flag === true) {
      setOperator("x");
    } else if (num1 && flag2 === true) {
      equals();
      setOperator("x");
      setFlag2(false);
    } else {
      setNum1(parseFloat(display));
      setOperator("x");
    }

    setFlag(true);
  };

  const buttons = [
    {
      id: "pos/neg",
      value: "+/-",
      color: "#C21A17",
      fontColor: "white",
      onClick: posneg,
    },
    {
      id: "sqrt",
      value: "√",
      color: "#C21A17",
      fontColor: "white",
      onClick: sqrt,
    },

    {
      id: "percent",
      value: "%",
      color: "#C21A17",
      fontColor: "white",
      onClick: percent,
    },
    { id: "MRC", value: "MRC", color: "#C21A17", fontColor: "white" },
    { id: "M-", value: "M-", color: "#C21A17", fontColor: "white" },
    { id: "M+", value: "M+", color: "#C21A17", fontColor: "white" },
    {
      id: "seven",
      value: 7,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "eight",
      value: 8,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "nine",
      value: 9,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "four",
      value: 4,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "five",
      value: 5,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "six",
      value: 6,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "one",
      value: 1,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "two",
      value: 2,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "three",
      value: 3,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: appendNum,
    },
    {
      id: "clear",
      value: "ON/C",
      color: "#C21A17",
      fontColor: "white",
      onClick: clear,
    },
    {
      id: "zero",
      value: 0,
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: clear,
      onClick: appendNum,
    },
    {
      id: "decimal",
      value: ".",
      color: "#F0EEED",
      fontColor: "#0A47A2",
      onClick: decimal,
    },
  ];

  const ops = [
    {
      id: "divide",
      value: "÷",
      color: "#C21A17",
      fontColor: "white",
      onClick: divide,
    },
    {
      id: "multiply",
      value: "x",
      color: "#C21A17",
      fontColor: "white",
      onClick: multiply,
    },
    {
      id: "subtract",
      value: "-",
      color: "#C21A17",
      fontColor: "white",
      onClick: subtract,
    },
    {
      id: "add",
      value: "+",
      color: "#C21A17",
      fontColor: "white",
      onClick: add,
    },
    {
      id: "equals",
      value: "=",
      color: "#C21A17",
      fontColor: "white",
      onClick: equals,
    },
  ];
  return (
    <div className="App">
      <div className="base">
        <div className="top"></div>
        <section className="output">
          <div className="blue-textured">
            <input className="screen" value={display} id="display"></input>
          </div>
        </section>
        <section className="solar">
          <div className="title">
            <Logo fill="white" className="logo"></Logo>
            <div className="name">TI-108</div>
          </div>

          <div className="solar-panel"></div>
        </section>
        <section className="input">
          <div className="num">
            {buttons.map((button) => (
              <div
                className="button"
                style={{
                  backgroundColor: button.color,
                  color: button.fontColor,
                }}
                id={button.id}
                value={button.value}
                onClick={() => button.onClick(button.value)}>
                <span className="text" id={`${button.id}-text`}>
                  {button.value}
                </span>
                <div className="bumps" id={`${button.id}-bumps`}></div>
              </div>
            ))}
          </div>
          <div className="ops">
            {ops.map((op) => (
              <div
                className="button"
                style={{ backgroundColor: op.color, color: op.fontColor }}
                id={op.id}
                onClick={op.onClick}>
                {op.value}
                <div className="bumps" id={`${op.id}-bumps`}></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
