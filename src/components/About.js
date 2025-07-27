import React from 'react';
import './About.css';
import resumePDF from '../assets/resume.pdf';

function About() {
    return(
        <section className="about">
            <h2>About Me</h2>
            <p className='about-text'>
                I'm a self-taught frontend developer with a strong interest in building clean and interactive web experiences.
                <br />
                Though I'm just starting out professionaly, I've already worked on several personal projects that helped me apply and strengthen my skills in <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
                {/* , and <strong>React</strong>. */}
                <br /><br />
                I enjoy learning new technologies, solving problems through code, and constantly improving my craft. I believe that consistency and curiosity are the keys to becoming a great developer.
            </p>

            {/* <p className='about-purpose'>
                This portfolio acts as a digital resume that not only summarizes my experience but helps potential employers and collaborators understand who I am and what I stand for.
            </p> */}

            <div className='about-extra'>
                <p>
                    <strong>Skills: </strong>HTML, CSS, JavaScript, React
                </p>
                {/* <p>
                    <strong>Interests: </strong>Web Animations, Open Source, Creative coding
                </p> */}
                <p>
                    <strong>Career Goals: </strong>To become a skilled frontend Developer and contribute to meaningful projects that make a difference.
                </p>
            </div>

            <a href={resumePDF} download className='resume-button'>Download Resume</a>
        </section>
    );
}

export default About;