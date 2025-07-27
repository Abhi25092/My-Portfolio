import React from 'react';
import './Skills.css';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, /*FaCode*/} from 'react-icons/fa';

function Skills() {
    const skills = [
        {name: 'HTML', level: 85, icon: <FaHtml5 color="#e34c26" />},
        {name: 'CSS', level: 80, icon: <FaCss3Alt color="#264de4" />},
        {name: 'JavaScript', level: 60, icon: <FaJs color="#f0db4f" />},
        {name: 'React', level: 40, icon: <FaReact color="#61DBFB" />},
        // {name: 'VS Code', level: 65, icon: <FaCode color="#6780efff" />}
    ];

    return(
        <section className='skills'>
            <h2>Skills & Technologies</h2>
            <p className='skills-intro'>
                These are the technologies I've worked with during my learning journey. I continue to practice and improve by building real-world projects and exploring documentation.
            </p>
            <div className='skills-container'>
                {skills.map((skill, index) => (
                    <div className='skill' key={index}>
                        <div className='skill-header'>
                            <div className='skill-icon-label'>
                                <span className='icon'>{skill.icon}</span>
                                <span>{skill.name}</span>
                            </div>
                            <span>{skill.level}%</span>
                        </div>
                        <div className='progress-bar'>
                            <div className='progress' style={{width: `${skill.level}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;