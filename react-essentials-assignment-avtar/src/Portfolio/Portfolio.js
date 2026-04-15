import React, { useState } from 'react'
import './Portfolio.css'

const skills = ["Design System", "ReactJS", "TypeScript", "Figma", "Prototyping", "A/B Testing"]

function Portfolio() {

    const [isDark, SetIsDark] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    return (
        <>
            <div className={`card ${isDark ? 'dark' : ''}`} style={{ background: isDark ? '#3a3a3a' : 'white' }} >
                <div className='header'>
                    <img src='/profile-pic.png' alt='profile-image' className='profile-pic'></img>
                    <div className='title'>
                        <div className='name'>Avtar Singh</div>
                        <p className='role'>Product Designer & Frontend Engineer</p>
                    </div>
                </div>
                <p className='bio'>I design and build calm, focused product experiences for fast-moving teams. Currently exploring AI-assisted interfaces, design systems, and high-performance UI engineering.</p>
                <div className='skills'>
                    <p className='skills-heading'>Skills:</p>
                    <div className='skills-section'>
                        {skills.map((skill, index) => {
                            return <div key={index} className='skill'>{skill}</div>
                        })}
                    </div>
                </div>
                <div className='bottom-row'>
                    <button className='theme-btn' onClick={() => (SetIsDark(!isDark))}>{isDark ? 'Light' : 'Dark'}</button>
                    <div className='contact'>
                        <button className= {`like-btn ${isLiked ? 'liked' : ''}`} onClick={() => setIsLiked(!isLiked)} >{isLiked?'❤️':'♡'}</button>
                        <a href='https://www.linkedin.com/in/avtar-singh-73a888235/'><button className='contact-btn'>Contact</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
