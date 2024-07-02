import './Intro.css';
import photo from "../../../assets/photo.jpg";

export default function Intro({currentPage, device}) {
    if(device.isDesktop) {
        return (
            <div className="scrollable-wrapper upper-gradient">
                <div className="half_screen">
                    <div className="centered-text">
                        <p className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"} id="intro-small-text">Hello!</p>
                        <h1 className={currentPage.number == 1 ? "slider-from-right slide-in-from-right" : "slide-out-from-right"} id="intro-big-text">My name is <mark>Davide</mark></h1>
                        <h2 className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"} id="intro-medium-text">I'm a <mark>full-stack developer</mark> and <mark>computer vision specialist</mark></h2> 
                    </div>
                    <p id="intro-footnote">This website was coded entirely by hand in ReactJS</p>
                </div>
                <div className="half_screen">
                    <img src={photo}></img>
                </div>
            </div>
        );
    } else {
        return (
            <div className="scrollable-wrapper upper-gradient">
                <div style={{backgroundImage: {photo}}}>
                    <p className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"} id="intro-small-text">Hello!</p>
                    <h1 className={currentPage.number == 1 ? "slider-from-right slide-in-from-right" : "slide-out-from-right"} id="intro-big-text">My name is <mark>Davide</mark></h1>
                    <h2 className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"} id="intro-medium-text">I'm a <mark>full-stack developer</mark> and <mark>computer vision specialist</mark></h2> 
                </div>
            </div>
        );
    }
}