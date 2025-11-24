import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />

        <footer>
          This project was coded by Sibongile Tsopo. The code is hosted on{" "}
          <a
            href="https://github.com/SibongileT88/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          . The website is hosted on{" "}
          <a
            href="https://stirring-maamoul-25bc00.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
