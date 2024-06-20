import './App.css';
import Header from "./components/header/Header"
import AboutMe from "./components/body/aboutMe/AboutMe"

function App() {
  return (
    <div className="App">
      <div className="snapscroll-container">
        <AboutMe />
        <AboutMe />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;