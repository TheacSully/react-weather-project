import "./App.css";
import Weather from "./Weather";
import Overview from "./Overview";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1>Weather App</h1>
        <Overview />
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
