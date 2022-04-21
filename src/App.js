import "./App.css";
import { ReactComponent as Logo } from "./logo.svg";

const buttons = [
  { id: "zero", value: 0 },
  {
    id: "one",
    value: 1,
  },
  { id: "two", value: 2 },
  {
    id: "three",
    value: 3,
  },
  { id: "four", value: 4 },
  {
    id: "five",
    value: 5,
  },
  { id: "six", value: 6 },
  {
    id: "seven",
    value: 7,
  },
  { id: "eight", value: 8 },
  {
    id: "nine",
    value: 9,
  },
  { id: "equals", value: 0 },
  {
    id: "add",
    value: 1,
  },
  { id: "subtract", value: 0 },
  {
    id: "divide",
    value: 1,
  },
  { id: "multiply", value: 0 },
  {
    id: "clear",
    value: 1,
  },
];
function App() {
  return (
    <div className="App">
      <div className="base">
        <div className="top"></div>
        <section className="output">
          <div className="blue-textured">
            <input className="screen" value="2349042" id="display"></input>
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
          <div className="num"></div>
        </section>
      </div>
    </div>
  );
}

export default App;
