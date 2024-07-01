import './AboutMe.css';
import photo from "../../../assets/photo.jpg";

export default function AboutMe() {
    return (
        <div className="scrollable-wrapper upper-gradient">
            <div className="half_screen">
                <div className="centered-text">
                    <p className="slider-from-left slide-in-from-left">Hello!</p>
                    <h1 className="slider-from-right slide-in-from-right">My name is <mark>Davide</mark></h1>
                    <h2 className="slider-from-left slide-in-from-left">I'm a <mark>full-stack developer</mark> and <mark>computer vision specialist</mark></h2> 
                </div>
            </div>
            <div className="half_screen">
                <img src={photo}></img>
            </div>
        </div>
    );
}