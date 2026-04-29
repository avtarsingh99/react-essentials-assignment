import React, { useState } from 'react'
import './Portfolio.css'
import { profiles } from './Profiles'


function Portfolio() {

    const [isDark, SetIsDark] = useState(false)
    const [isLiked, setIsLiked] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);  

    const profile = profiles[currentIndex] // show 1st object's content by default

    const handlePrev = () => setCurrentIndex((i) => (i - 1 + profiles.length) % profiles.length);
    const handleNext = () => setCurrentIndex((i) => (i + 1) % profiles.length);

    return (
        <>
            <div className={`card ${isDark ? 'dark' : ''}`} style={{ background: isDark ? '#3a3a3a' : 'white' }} >
                <div className='header'>
                    <img src={profile.profile} alt='profile-image' className='profile-pic'></img>
                    <div className='title'>
                        <div className='name'>{profile.name}</div>
                        <p className='role'>{profile.role}</p>
                    </div>
                </div>
                <p className='bio'>{profile.bio}</p>
                <div className='skills'>
                    <p className='skills-heading'>Skills:</p>
                    <div className='skills-section'>
                        {profile.skills.map((skill, index) => {
                            return <div key={index} className='skill'>{skill}</div>
                        })} 
                    </div>
                </div>
                <div className='bottom-row'>
                    <button className='theme-btn' onClick={() => (SetIsDark(!isDark))}>{isDark ? 'Light' : 'Dark'}</button>
                    <div className='arrow-btns'>
                        <button onClick={handlePrev}>←</button>
                        <button onClick={handleNext}>→</button>
                        <p>{currentIndex + 1}/{profiles.length}</p>
                    </div>
                    <div className='contact'>
                        <button className= {`like-btn ${isLiked ? 'liked' : ''}`} onClick={() => setIsLiked(!isLiked)} >{isLiked?'♡ 129':'♡ 128'}</button>
                        <a href='#'><button className='contact-btn'>Contact</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
