import React from 'react';
import './Home.css';
import profileImage from '../assets/Profile.png';

function Home() {
    return(
        <section className='home'>
            <div className='home-content'>
                <img src={profileImage} alt="Profile" className='profile-pic' />
                <h1>Hello, I'm <span className='highlight'>Abhishek Yadav</span></h1>
                <p className='tagline'>Aspiring Frontend Developer | React Learner | Passionate Problem Solver</p>
                <p className='bio'>
                    I'm a passionate and self-motivated web developer focused on building responsive and user-friendly interfaces using modern tools like HTML, CSS, JavaScript, and React.
                    <br />
                    This portfolio is my way of showcasing the skills i've learned, the projects I've built, and the path I'm following toward becoming a full-time developer.
                </p>
            </div>
        </section>
    );
}

export default Home;