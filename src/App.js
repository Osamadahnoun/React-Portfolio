import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Modal from './components/Modal';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="app-div">
      <Header
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
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
      {openModal && <Modal setOpenModal={setOpenModal}/>}
      <Footer setOpenModal={setOpenModal}/>
    </div>
  );
}

export default App;
