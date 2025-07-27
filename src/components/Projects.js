import React from 'react';
import './Projects.css';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';

function Projects() {
    const projectData = [
        {
            title: 'Basic Age Calculator',
            image: project1,
            livelink: 'https://abhi25092.github.io/Project-1/',
            description: 'A clean, responsive web app that calculates your exact age in years, months, and days based on your date of birth. It includes a light/dark mode toggle.',
            caseStudy: 
            <ul type="1">
                <li>Age calculation with date difference logic.</li>
                <li>Light/Dark mode toggle using CSS variables.</li>
                <li>Responsive design for all devices.</li>
                <li>Implementing theme toggling with CSS and JS.</li>
            </ul>
        },
        {
            title: 'Calculator with basic calculations',
            image: project2,
            livelink: 'https://abhi25092.github.io/Project-6/',
            description: 'A responsive and interactive calculator web app built using HTML, CSS, and JavaScript. It supports basic arithmetic operations and includes a dark mode toggle for enhanced user experience.',
            caseStudy: 
            <ul>
                <li>Designed a clean, mobile-friendly UI using CSS grid.</li>
                <li>Added a toggle switch to switch between dark and light modes dynamically.</li>
                <li>Made the UI responsive across devices.</li>
                <li>Maintained theme consistency across components using CSS variables.</li>
            </ul>
        },
        {
            title: 'A Number guessing game',
            image: project3,
            livelink: 'https://abhi25092.github.io/Game-1/',
            description: 'A responsive and visually appealing number guessing game built using HTML, CSS, and JavaScipt. Includes a dark mode UI, limited attempts, real-time feedback, and reset functionality.',
            caseStudy:
            <ul>
                <li>Guess the number between 1-100 in 5 attempts.</li>
                <li>Instructions as too high/low guesses.</li>
                <li>Fully responsive for all devices.</li>
                <li>Dark mode user interface.</li>
            </ul>
        }
    ];

    return(
        <section className="projects">
            <h2>Projects & Work samples</h2>
            <p className='projects-intro'>
                Here are some projects I've built to strengthen my frontend skills and turn ideas into interactive web experiences. Each project taught me valuable lessons in coding, debugging, and responsive design.
            </p>
            <div className='project-grid'>
                {projectData.map((project, index) => (
                    <div className='project-card' key={index}>
                        <img src={project.image} alt={project.title} className='project-img' />
                        <div className='project-content'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p className='case-study'><strong>Case Study: </strong>{project.caseStudy}</p>
                            <a href={project.livelink} target="_blank" rel="noopener noreferrer" className='project-link'>
                                Live Preview --&gt;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;