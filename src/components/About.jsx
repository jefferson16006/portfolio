import React from "react";

export default function About() {
    return(
        <section className="about-skills">
            <div className="about-me">
                <h2>About Me</h2>
                <p>
                    I am a passionate front end developer with a love for 
                    creating interactive and visually appealing websites. 
                    With a background in computer science and a keen eye 
                    for design, I blend technical skills with creativity to 
                    deliver engaging user experiences.
                </p>
            </div>
            <div className="skills">
                <h2 className="purple">Skills</h2>
                <div className="skill skill-html">
                    <p>HTML</p>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="skill skill-css">
                    <p>CSS</p>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="skill skill-js">
                    <p>JavaScript</p>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div className="skill skill-react">
                    <p>React</p>
                    <div className="skill-bar">
                        <div className="skill-level" style={{ width: '70%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}