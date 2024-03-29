import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import useDocumentHeight from "./userDocumentHeight";

const App = () => {
  useDocumentHeight();

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
