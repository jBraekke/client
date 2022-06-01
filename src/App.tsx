import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Prices from "./pages/Prices";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Prices />
      </main>
    </div>
  );
}

export default App;
