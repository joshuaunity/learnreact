import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Filler from "./components/Filler";
import Testimonies from "./components/Testimonies";
import Facts from "./components/Facts";
import BottomHero from "./components/BottomHero";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Hero />
        <Filler />
        <Testimonies />
      </div>
      <Facts />
      {/* <div className="container mx-auto">
        <BottomHero />
      </div> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
