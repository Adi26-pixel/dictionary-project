import books from "./Books.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={books} alt="books" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          <small>Coded by Adeline Monsengo</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
