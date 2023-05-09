import React, { ReactElement } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import GameCard from "../src/components/GameCard/GameCard";
import Mystery from "../src/pages/Mystery/Mystery";
import Projects from "./pages/Projects/Projects";
import CV from "../src/pages/CV/CV";
import About from "../src/pages/About/About";
function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<GameCard />} />
          <Route path="/mystery" element={<Mystery />} />{" "}
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
