import "./App.css";
import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="app-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center mt-3">
          This site is{" "}
          <a href="https://github.com/catsbe1" target="blank_">
            open-source
          </a>{" "}
          and was coded by Ana Ribeiro
        </footer>
      </div>
    </div>
  );
}
