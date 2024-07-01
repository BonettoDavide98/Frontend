import './Intro.css';
import photo from "../../../assets/photo.jpg";

export default function Intro({currentPage}) {
    return (
        <div className="scrollable-wrapper upper-gradient">
            <div className="half_screen">
                <div className="centered-text">
                    <p className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"}>Hello!</p>
                    <h1 className={currentPage.number == 1 ? "slider-from-right slide-in-from-right" : "slide-out-from-right"}>My name is <mark>Davide</mark></h1>
                    <h2 className={currentPage.number == 1 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"}>I'm a <mark>full-stack developer</mark> and <mark>computer vision specialist</mark></h2> 
                </div>
            </div>
            <div className="half_screen">
                <img src={photo}></img>
            </div>
        </div>
    );
}