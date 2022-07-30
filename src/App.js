//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App w-100">
      
      <Header>
        <Nav></Nav>
      </Header>


        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      <main>
          This is the main section
          <pre>
            WHEN I load the portfolio the first time 
            THEN the About Me title and section are selected by default
          </pre>
          <Resume></Resume>
          <Contact></Contact>
          <AboutMe></AboutMe>
          <Portfolio></Portfolio>
      </main>
      <Footer></Footer>

  </div>

  );
}

export default App;
