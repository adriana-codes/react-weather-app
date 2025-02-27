import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          <a
            href="https://github.com/adriana-codes/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source
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
