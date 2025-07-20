import books from "./Books.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={books} alt="books" className="App-logo img-fluid" />
          <h1 className="App-heading">Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://github.com/Adi26-pixel" target="_blank">
              Adeline Monsengo
            </a>{" "}
            and Opened source on{" "}
            <a
              href="https://github.com/Adi26-pixel/dictionary-project.git"
              target="_blank"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
