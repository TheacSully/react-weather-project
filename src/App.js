import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Macclesfield" />
      </div>
      <footer>
        {" "}
        <p>
          Coded by Thea Sullivan and available on{" "}
          <a
            href="https://github.com/TheacSully"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </footer>
    </div>
  );
}
