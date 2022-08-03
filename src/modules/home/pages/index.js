import React from "react";
import Counter from "../components/Counter";
import '../assets/css/style.scss'

function Home() {

  return (
    <div id="home__page">
    <div className="title">
      <span>Test redux</span>
    </div>
      <Counter />
    </div>
  );
}

export default Home;
