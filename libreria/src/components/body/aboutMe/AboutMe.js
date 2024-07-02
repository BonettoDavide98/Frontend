import './AboutMe.css';

export default function AboutMe({currentPage, device}) {
    return (
        <div className="scrollable-wrapper second-gradient">
            <div>
                <div className="scrollable-wrapper second-gradient">
                    <div className={currentPage.number == 2 ? "half-screen white-half justified-text slider-from-left slide-in-from-left" : "half-screen white-half justified-text slide-out-from-left"}>
                        <div id="Education" className="close-lines">
                            <h2>Education</h2>
                            <h3>Bachelor's degree in <mark>computer science</mark></h3>
                            <p><i><mark>GPA 4.0</mark></i></p>
                            <p><i>Thesis title: Application of Machine Learning to Functional Languages</i></p>
                            <h3>Cambridge English Advanced <mark>(CAE)</mark></h3>
                            <p><i>Passed with honours, <mark>proficency level C2</mark></i></p>
                        </div>
                        <div id="Skills" className="close-lines">
                            <h2>Skills</h2>
                            <h3><mark>Daily</mark> use</h3>
                            <p>MVC, OOP, Git, Docker, Agile Programming(Scrum), .NET, C#, Javascript, SQL, Computer vision software (Cognex, Halcon, Dalsa), Deep learning software (PyTorch, YOLO, Cognex)</p>
                            <p>Programmable Cameras (Dalsa, Cognex), Industrial illuminators</p>
                            <h3><mark>Frequent</mark> use</h3>
                            <p>NodeJS, ReactJS, ASP.NET, C, Python, RESTful APIs, HTML, CSS, PLC Programming (Allen-Bradley, Siemens, Omron)</p>
                            <h3><mark>Occasional</mark> use</h3>
                            <p>Java, C++, VB</p>
                        </div>
                    </div>
                    <div className={currentPage.number == 2 ? "half-screen justified-text slider-from-right slide-in-from-right" : "half-screen justified-text slide-out-from-right"}>
                        <div id="Work Experience" className="close-lines">
                            <h2>Work Experience</h2>
                            <h3>Qualivision s.r.l., Full stack developer and computer vision specialist</h3>
                            <p>I research and develop <mark>bespoke computer vision solutions</mark> (classical or deep learning based) and embed them in a <mark>.NET C# environment</mark>.</p>
                            <p>My workflow looks like this:</p>
                            <ul>
                                <li>A client requests a <mark>feasability test</mark> for a feature they wish to implement on their industrial line and sends samples to our office.</li>
                                <li>I try and design a computer vision solution by testing various <mark>illuminators, configurations, camera types and virtual imaging methods</mark>.</li>
                                <li>I then write a <mark>report</mark>, detailing my findings and deciding if the feature requested is feasible or not, and develop (if possible) a <mark>prototype</mark> of the system.</li>
                                <li>If the client decides to acquire the system, I complete the development of the prototype and develop a <mark>custom application, meaning UI, UX, camera governing concurrent threads, internal algorithms, dedicated SQL server or RESTful API, PLC communications, etc.</mark></li>
                                <li>In the meantime I order and assemble the industrial PC that will contain my application and that will be installed in the industrial line.</li>
                                <li>Once the mechanical part of the line is complete I travel on site and oversee the installation and configuration of the PC, and then I remain on site to thoroughly live test the system.</li>
                                <li>Once the line is tried and tested it usually gets taken apart and shipped abroad, and in those cases I travel along with it to oversee the reinstallation in its definitive location.</li>
                            </ul>
                        </div>
                        <a className="text-link" href="">&gt; Download my CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}