import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>React Weather App - Homework</h1>
        </header>
        <main>
          {" "}
          <Weather city="Barcelona" />
          <br />
        </main>

        <footer>
          <a
            href="https://github.com/adriana-codes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open sourced
          </a>{" "}
          project by{" "}
          <a
            href="https://github.com/adriana-codes"
            target="_blank"
            rel="noreferrer"
          >
            Adri Díaz
          </a>
          👩🏻‍💻 hosted on{" "}
          <a
            href="https://adrianacodes-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
