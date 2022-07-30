import "./App.css";
import "./index.css";

import { useState, useRef, useEffect, useCallback } from "react";
import { ReactComponent as Logo } from "./logo.svg";

function App() {
  const [display, setDisplay] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [operator, setOperator] = useState(null);
  //when flag is true, start a new number
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState();
  const [MR, setMR] = useState(null);
  const [memoryFlag, setMemoryFlag] = useState(false);

  const buttonsRef = useRef(null);

  function getMap() {
    if (!buttonsRef.current) {
      buttonsRef.current = new Map();
    }
    return buttonsRef.current;
  }

  const equals = () => {
    let num3;
    if (!num2) {
      num3 = parseFloat(display);
    } else {
      num3 = num2;
    }

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
        setDisplay(display);
    }
    setNum2();
    setFlag(true);
    setOperator();
    setMemoryFlag(false);
  };

  const posneg = () => {
    setDisplay(display * -1);
    setMemoryFlag(false);
  };

  const decimal = () => {
    const str = display.toString();
    if (flag) {
      setDisplay(".");
      setFlag(false);
    } else if (!str.includes(".")) {
      setDisplay(`${display}.`);
    }
    setMemoryFlag(false);
  };

  const clear = () => {
    setDisplay(0);
    setNum2();
    setNum1();
    setMemoryFlag(false);
  };

  const appendNum = (num) => {
    console.log(num);
    const str = display.toString();
    if (str.includes("-") && str.length === 1) {
      setDisplay(`-${num}`);
      setFlag(false);
    } else if (display === 0 && !str.includes(".")) {
      setDisplay(num);
    } else if (str.includes(".") && flag === true) {
      setDisplay(`${num}`);
    } else if (num1 && flag === true) {
      setDisplay(num);
      setFlag(false);
    } else if (str.length < 8) {
      setDisplay(`${display}${num}`);
    }
    setFlag(false);
    setFlag2(true);
    setMemoryFlag(false);
  };

  const sqrt = () => {
    setDisplay(Math.sqrt(display));
    setMemoryFlag(false);
  };

  const percent = () => {
    setDisplay(display / 100);
    setMemoryFlag(false);
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
    setMemoryFlag(false);
    setFlag(true);
  };

  const subtract = () => {
    if (operator && flag) {
      appendNum("-");
      setFlag(false);
    } else if (num1 && flag2) {
      equals();
      setOperator("-");
      setFlag2(false);
    } else {
      setNum1(parseFloat(display));
      setOperator("-");
    }
    setMemoryFlag(false);
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
    setMemoryFlag(false);
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
    setMemoryFlag(false);
    setFlag(true);
  };

  const mrc = () => {
    if (memoryFlag === false) {
      setMemoryFlag(true);
      setDisplay(MR);
    } else {
      setMR();
      setMemoryFlag(false);
    }
  };
  const mPlus = () => {
    if (MR === null) {
      setMR(display);
    } else {
      setMR(MR + display);
    }
    setMemoryFlag(false);
  };
  const mMinus = () => {
    if (MR === null) {
      setMR(-display);
    } else {
      setMR(MR - display);
    }
    setMemoryFlag(false);
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
    {
      id: "MRC",
      value: "MRC",
      color: "#C21A17",
      fontColor: "white",
      onClick: mrc,
    },
    {
      id: "M-",
      value: "M-",
      color: "#C21A17",
      fontColor: "white",
      onClick: mMinus,
    },
    {
      id: "M+",
      value: "M+",
      color: "#C21A17",
      fontColor: "white",
      onClick: mPlus,
    },
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

  const handleKeyDown = (e) => {
    const map = getMap();
    const key = e.key;
    const regex = /[0-9]/;
    const keydown = (key) => {
      console.log(map);
      const node = map.get(key);
      node.classList.toggle("active");
      setTimeout(() => {
        node.classList.toggle("active");
      }, 150);
    };
    console.log(`you clicked ${key}`);
    if (regex.test(key)) {
      keydown(parseInt(key));
      appendNum(key);
    }
    switch (key) {
      case ".":
        keydown(key);
        decimal();
        break;
      case "Backspace":
        keydown(key);
        clear();
        break;
      case "Enter":
        keydown(key);
        equals();
        break;
      case "*":
        keydown(key);
        multiply();
        break;
      case "/":
        keydown(key);
        divide();
        break;
      case "+":
        keydown(key);
        add();
        break;
      case "-":
        keydown(key);
        subtract();
        break;
      case "%":
        keydown(key);
        percent();
        break;
    }
  };
  const handleKeyDownCallback = useCallback(
    (e) => {
      const map = getMap();
      const key = e.key;
      const regex = /[0-9]/;
      const keydown = (key) => {
        console.log(map);
        const node = map.get(key);
        node.classList.toggle("active");
        setTimeout(() => {
          node.classList.toggle("active");
        }, 150);
      };
      console.log(`you clicked ${key}`);
      if (regex.test(key)) {
        keydown(parseInt(key));
        appendNum(key);
      }
      switch (key) {
        case ".":
          keydown(key);
          decimal();
          break;
        case "Backspace":
          keydown("ON/C");
          clear();
          break;
        case "Enter":
          keydown("=");
          equals();
          break;
        case "*":
          keydown("x");
          multiply();
          break;
        case "/":
          keydown("÷");
          divide();
          break;
        case "+":
          keydown(key);
          add();
          break;
        case "-":
          keydown(key);
          subtract();
          break;
        case "%":
          keydown(key);
          percent();
          break;
      }
    },
    [add, appendNum, decimal, divide, equals, multiply, percent, subtract]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownCallback);
    return () => {
      document.removeEventListener("keydown", handleKeyDownCallback);
    };
  }, [handleKeyDownCallback]);

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
              <button
                className="button"
                style={{
                  backgroundColor: button.color,
                  color: button.fontColor,
                }}
                id={button.id}
                value={button.value}
                onClick={() => button.onClick(button.value)}
                // ref={buttonRef0}
                key={`button-${button.id}`}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(button.value, node);
                  } else {
                    map.delete(button.value, node);
                  }
                }}>
                <span className="text" id={`${button.id}-text`}>
                  {button.value}
                </span>
                <div className="bumps" id={`${button.id}-bumps`}></div>
              </button>
            ))}
          </div>
          <div className="ops">
            {ops.map((op) => (
              <button
                className="button"
                style={{ backgroundColor: op.color, color: op.fontColor }}
                id={op.id}
                onClick={op.onClick}
                // ref={buttonRef}
                key={`op-${op.id}`}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(op.value, node);
                  } else {
                    map.delete(op.value, node);
                  }
                }}>
                {op.value}
                <div className="bumps" id={`${op.id}-bumps`}></div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
