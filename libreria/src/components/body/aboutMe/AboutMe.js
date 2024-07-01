import './AboutMe.css';

export default function AboutMe({currentPage}) {
    return (
        <div className="scrollable-wrapper upper-gradient">
            <div>
                <div className="centered-text">
                    <p className={currentPage.number == 2 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"}>Hello!</p>
                    <h1 className={currentPage.number == 2 ? "slider-from-right slide-in-from-right" : "slide-out-from-right"}>My name is <mark>Davide</mark></h1>
                    <h2 className={currentPage.number == 2 ? "slider-from-left slide-in-from-left" : "slide-out-from-left"}>I'm a <mark>full-stack developer</mark> and <mark>computer vision specialist</mark></h2> 
                </div>
            </div>
        </div>
    );
}