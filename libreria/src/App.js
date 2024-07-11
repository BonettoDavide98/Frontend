import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Intro from "./components/body/Intro/Intro";
import AboutMe from "./components/body/AboutMe/AboutMe";
import Samples from "./components/body/Samples/Samples";

function App() {
  const numPages = 3;
  const [activePage, setActivePage] = useState(1);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    if(scrollRatio == 0)
      setActivePage(1);
    else
      setActivePage(Math.ceil(scrollRatio * numPages));
  };

  return (
    <div className="App">
      <div className="snapscroll-container"  onScroll={handleScroll}>
        <Intro currentPage={{ number: activePage }} device={{ isDesktop: isDesktopOrLaptop }}/>
        <AboutMe currentPage={{ number: activePage }} device={{ isDesktop: isDesktopOrLaptop }}/>
        <Samples currentPage={{ number: activePage }} device={{ isDesktop: isDesktopOrLaptop }}/>
      </div>
    </div>
  );
}

export default App;