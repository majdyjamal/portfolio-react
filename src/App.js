//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
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
      </main>
      <footer>
        This is footer 
          {/* text or icon links to the developer’s
           GitHub and
           LinkedIn profiles
           , and their profile on a third platform (Stack Overflow, Twitter)  */}
      </footer>
  </div>

  );
}

export default App;
