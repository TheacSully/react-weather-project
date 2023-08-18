import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
      </div>
      <footer>
        {" "}
        Coded by Thea Sullivan and available on{" "}
        <a
          href="https://github.com/TheacSully"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
