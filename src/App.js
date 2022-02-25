import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div className="app-div">
      <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        {/* <About />
        <Gallery />
        <Contact /> */}
        {aboutSelected && !portfolioSelected && !contactSelected && !resumeSelected ? (
          <About />
        ) : portfolioSelected && !aboutSelected && !contactSelected && !resumeSelected ? (
          <Gallery />
        ) : contactSelected && !portfolioSelected && !aboutSelected && !resumeSelected ? (
          <Contact />
        ) : (
          <Resume />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
