"use strict";
exports.__esModule = true;
require("./App.css");
require("./index.css");
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
var logo = require("./logo.svg");
function App() {
    var _a = (0, react_1.useState)(0), display = _a[0], setDisplay = _a[1];
    var _b = (0, react_1.useState)(null), num1 = _b[0], setNum1 = _b[1];
    var _c = (0, react_1.useState)(null), num2 = _c[0], setNum2 = _c[1];
    var _d = (0, react_1.useState)(null), operator = _d[0], setOperator = _d[1];
    //when flag is true, start a new number
    var _e = (0, react_1.useState)(true), flag = _e[0], setFlag = _e[1];
    var _f = (0, react_1.useState)(), flag2 = _f[0], setFlag2 = _f[1];
    var _g = (0, react_1.useState)(null), MR = _g[0], setMR = _g[1];
    var _h = (0, react_1.useState)(false), memoryFlag = _h[0], setMemoryFlag = _h[1];
    var buttonsRef = (0, react_1.useRef)(null);
    function getMap() {
        if (!(buttonsRef === null || buttonsRef === void 0 ? void 0 : buttonsRef.current)) {
            buttonsRef.current = new Map();
        }
        return buttonsRef === null || buttonsRef === void 0 ? void 0 : buttonsRef.current;
    }
    var equals = function () {
        var num3;
        if (!num2) {
            num3 = parseFloat(display);
        }
        else {
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
    var posneg = function () {
        setDisplay(display * -1);
        setMemoryFlag(false);
    };
    var decimal = function () {
        var str = display.toString();
        if (flag) {
            setDisplay(".");
            setFlag(false);
        }
        else if (!str.includes(".")) {
            setDisplay("".concat(display, "."));
        }
        setMemoryFlag(false);
    };
    var clear = function () {
        setDisplay(0);
        setNum2();
        setNum1();
        setMemoryFlag(false);
    };
    var appendNum = function (num) {
        console.log(num);
        var str = display.toString();
        if (str.includes("-") && str.length === 1) {
            setDisplay("-".concat(num));
            setFlag(false);
        }
        else if (display === 0 && !str.includes(".")) {
            setDisplay(num);
        }
        else if (str.includes(".") && flag === true) {
            setDisplay("".concat(num));
        }
        else if (num1 && flag === true) {
            setDisplay(num);
            setFlag(false);
        }
        else if (str.length < 8) {
            setDisplay("".concat(display).concat(num));
        }
        setFlag(false);
        setFlag2(true);
        setMemoryFlag(false);
    };
    var sqrt = function () {
        setDisplay(Math.sqrt(display));
        setMemoryFlag(false);
    };
    var percent = function () {
        setDisplay(display / 100);
        setMemoryFlag(false);
    };
    var add = function () {
        if (display === "-") {
            setDisplay(num1);
            setOperator("+");
        }
        else if (operator && flag === true) {
            setOperator("+");
        }
        else if (num1 && flag2 === true) {
            equals();
            setOperator("+");
            setFlag2(false);
        }
        else {
            setNum1(parseFloat(display));
            setOperator("+");
        }
        setMemoryFlag(false);
        setFlag(true);
    };
    var subtract = function () {
        if (operator && flag) {
            appendNum("-");
            setFlag(false);
        }
        else if (num1 && flag2) {
            equals();
            setOperator("-");
            setFlag2(false);
        }
        else {
            setNum1(parseFloat(display));
            setOperator("-");
        }
        setMemoryFlag(false);
        setFlag(true);
    };
    var divide = function () {
        if (display === "-") {
            setDisplay(num1);
            setOperator("/");
        }
        else if (operator && flag === true) {
            setOperator("/");
        }
        else if (num1 && flag2 === true) {
            equals();
            setOperator("/");
            setFlag2(false);
        }
        else {
            setNum1(parseFloat(display));
            setOperator("/");
        }
        setMemoryFlag(false);
        setFlag(true);
    };
    var multiply = function () {
        if (display === "-") {
            setDisplay(num1);
            setOperator("x");
        }
        else if (operator && flag === true) {
            setOperator("x");
        }
        else if (num1 && flag2 === true) {
            equals();
            setOperator("x");
            setFlag2(false);
        }
        else {
            setNum1(parseFloat(display));
            setOperator("x");
        }
        setMemoryFlag(false);
        setFlag(true);
    };
    var mrc = function () {
        if (memoryFlag === false) {
            setMemoryFlag(true);
            setDisplay(MR);
        }
        else {
            setMR();
            setMemoryFlag(false);
        }
    };
    var mPlus = function () {
        if (MR === null) {
            setMR(display);
        }
        else {
            setMR(MR + display);
        }
        setMemoryFlag(false);
    };
    var mMinus = function () {
        if (MR === null) {
            setMR(-display);
        }
        else {
            setMR(MR - display);
        }
        setMemoryFlag(false);
    };
    var buttons = [
        {
            id: "pos/neg",
            value: "+/-",
            color: "#C21A17",
            fontColor: "white",
            onClick: posneg
        },
        {
            id: "sqrt",
            value: "√",
            color: "#C21A17",
            fontColor: "white",
            onClick: sqrt
        },
        {
            id: "percent",
            value: "%",
            color: "#C21A17",
            fontColor: "white",
            onClick: percent
        },
        {
            id: "MRC",
            value: "MRC",
            color: "#C21A17",
            fontColor: "white",
            onClick: mrc
        },
        {
            id: "M-",
            value: "M-",
            color: "#C21A17",
            fontColor: "white",
            onClick: mMinus
        },
        {
            id: "M+",
            value: "M+",
            color: "#C21A17",
            fontColor: "white",
            onClick: mPlus
        },
        {
            id: "seven",
            value: 7,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "eight",
            value: 8,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "nine",
            value: 9,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "four",
            value: 4,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "five",
            value: 5,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "six",
            value: 6,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "one",
            value: 1,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "two",
            value: 2,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "three",
            value: 3,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "clear",
            value: "ON/C",
            color: "#C21A17",
            fontColor: "white",
            onClick: clear
        },
        {
            id: "zero",
            value: 0,
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: appendNum
        },
        {
            id: "decimal",
            value: ".",
            color: "#F0EEED",
            fontColor: "#0A47A2",
            onClick: decimal
        },
    ];
    var ops = [
        {
            id: "divide",
            value: "÷",
            color: "#C21A17",
            fontColor: "white",
            onClick: divide
        },
        {
            id: "multiply",
            value: "x",
            color: "#C21A17",
            fontColor: "white",
            onClick: multiply
        },
        {
            id: "subtract",
            value: "-",
            color: "#C21A17",
            fontColor: "white",
            onClick: subtract
        },
        {
            id: "add",
            value: "+",
            color: "#C21A17",
            fontColor: "white",
            onClick: add
        },
        {
            id: "equals",
            value: "=",
            color: "#C21A17",
            fontColor: "white",
            onClick: equals
        },
    ];
    var handleKeyDown = function (e) {
        var map = getMap();
        var key = e.key;
        var regex = /[0-9]/;
        var keydown = function (key) {
            console.log(map);
            var node = map.get(key);
            node.classList.toggle("active");
            setTimeout(function () {
                node.classList.toggle("active");
            }, 150);
        };
        console.log("you clicked ".concat(key));
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
    var handleKeyDownCallback = (0, react_1.useCallback)(function (e) {
        var map = getMap();
        var key = e.key;
        var regex = /[0-9]/;
        var keydown = function (key) {
            console.log(map);
            var node = map.get(key);
            node.classList.toggle("active");
            setTimeout(function () {
                node.classList.toggle("active");
            }, 150);
        };
        console.log("you clicked ".concat(key));
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
    }, [add, appendNum, decimal, divide, equals, multiply, percent, subtract]);
    (0, react_1.useEffect)(function () {
        document.addEventListener("keydown", handleKeyDownCallback);
        return function () {
            document.removeEventListener("keydown", handleKeyDownCallback);
        };
    }, [handleKeyDownCallback]);
    return (<div className="App">
      <div className="base">
        <div className="top"></div>
        <section className="output">
          <div className="blue-textured">
            <input className="screen" value={display} id="display"></input>
          </div>
        </section>
        <section className="solar">
          <div className="title">
            <logo_svg_1.ReactComponent fill="white" className="logo"></logo_svg_1.ReactComponent>
            <div className="name">TI-108</div>
          </div>

          <div className="solar-panel"></div>
        </section>
        <section className="input">
          <div className="num">
            {buttons.map(function (button) { return (<button className="button" style={{
                backgroundColor: button.color,
                color: button.fontColor
            }} id={button.id} value={button.value} onClick={function () { return button.onClick(button.value); }} 
        // ref={buttonRef0}
        key={"button-".concat(button.id)} ref={function (node) {
                var map = getMap();
                if (node) {
                    map.set(button.value, node);
                }
                else {
                    map["delete"](button.value, node);
                }
            }}>
                <span className="text" id={"".concat(button.id, "-text")}>
                  {button.value}
                </span>
                <div className="bumps" id={"".concat(button.id, "-bumps")}></div>
              </button>); })}
          </div>
          <div className="ops">
            {ops.map(function (op) { return (<button className="button" style={{ backgroundColor: op.color, color: op.fontColor }} id={op.id} onClick={op.onClick} 
        // ref={buttonRef}
        key={"op-".concat(op.id)} ref={function (node) {
                var map = getMap();
                if (node) {
                    map.set(op.value, node);
                }
                else {
                    map["delete"](op.value, node);
                }
            }}>
                {op.value}
                <div className="bumps" id={"".concat(op.id, "-bumps")}></div>
              </button>); })}
          </div>
        </section>
      </div>
    </div>);
}
exports["default"] = App;
