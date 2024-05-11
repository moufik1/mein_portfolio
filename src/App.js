import React from "react";
import "./App.css";
import  Header  from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
/*import Testimonials from "./components/testimonials/Testimonials";*/
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import PopupMessage from "./components/contact/PopupMessage";
import Work from "./components/work/Work";
import Document from "./components/document/Document";


const App = () => {
  return (
    <>
    <Header />
      
    <main calssName ="main">
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification />
      <Document />
      <Work />
      <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App