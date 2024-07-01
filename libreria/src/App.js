import { useState } from 'react';
import './App.css';
import Intro from "./components/body/Intro/Intro"
import AboutMe from "./components/body/AboutMe/AboutMe"

function App() {
  const numPages = 2;
  const [activePage, setActivePage] = useState(1);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    if(scrollRatio == 0)
      setActivePage(1);
    else
      setActivePage(Math.ceil(scrollRatio * numPages));
    console.log(activePage);
  };

  return (
    <div className="App">
      <div className="snapscroll-container"  onScroll={handleScroll}>
        <Intro currentPage={{ number: activePage }}/>
        <AboutMe currentPage={{ number: activePage }}/>
      </div>
    </div>
  );
}

export default App;