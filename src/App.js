import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      name: "AboutMe",
      text: "About Me"
    },
    {
      name: "Portfolio",
      text: "Portfolio"
    },
    {
      name: "Contact",
      text: "Contact"
    },
    {
      name: "Resume",
      text: "Resume"
    },
  ]);

  const [currentSectionState, setCurrentSectionState] = useState(pages[0]); // About Me

  const renderActiveSection = () => {
    switch (currentSectionState.name) {
      case "AboutMe":
        return <AboutMe></AboutMe>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <AboutMe></AboutMe>;
    };
  }

  return (
    <div className="App">
      <Header>
        <Nav
          pages={pages}
          currentSectionState={currentSectionState}
          setCurrentSectionState={setCurrentSectionState}>
        </Nav>
      </Header>
      <main>
        <h1  className="container">{currentSectionState.text}</h1>
        {renderActiveSection()}
      </main>
      <Footer></Footer>

    </div>

  );
}

export default App;
