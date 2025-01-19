import reactflixLogo from "/reactflix-logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src={reactflixLogo} className="logo" alt="Reactflix logo" />
        </a>
      </div>
      <h1>Reactflix, Series / Movies Finder</h1>
    </>
  );
}

export default App;
