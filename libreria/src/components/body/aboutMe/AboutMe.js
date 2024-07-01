import './AboutMe.css';
import photo from "../../../assets/photo.jpg";

export default function AboutMe() {
    return (
        <div className="scrollable-wrapper upper-gradient">
            <div className="half_screen">
                <div className="centered-text">
                    <p>Hello!</p>
                    <h1>My name is Davide</h1>
                    <h2>I'm a full-stack developer and computer vision specialist</h2> 
                </div>
            </div>
            <div className="half_screen">
                <img src={photo}></img>
            </div>
        </div>
    );
}