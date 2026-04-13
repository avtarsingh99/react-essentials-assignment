import React, { useState } from 'react'
import './Portfolio.css'

const skills = ["Design System", "ReactJS", "TypeScript", "Figma", "Prototyping", "A/B Testing"]

function Portfolio() {

    const [isDark, SetIsDark] = useState(false)

    return (
        <>
            <div className='card' style={{ background: isDark? 'grey': 'white' }} >
                <div className='header'>
                    <img src='/profile-pic.png' alt='profile-image' className='profile-pic'></img>
                    <div className='title'>
                        <div className='name'>Avtar Singh</div>
                        <p className='role'>Product Designer & Frontend Engineer</p>
                    </div>
                </div>
                <p className='bio'>I design and build calm, focused product experiences for fast-moving teams. Currently exploring AI-assisted interfaces, design systems, and high-performance UI engineering.</p>
                <div className='skills'>
                    <p>Skills:</p>
                    <div className='skills-section'>
                        {skills.map((skill, index) => {
                            return <div key={index} className='skill'>{skill}</div>
                        })}
                    </div>
                </div>
                <div className='bottom-row'>
                    <button className='theme-btn' onClick={() => (SetIsDark(!isDark))}>{isDark? 'Light': 'Dark'}</button>
                    <div className='contact'>
                        <button className='like-btn'>❤️</button>
                        <button className='contact-btn'>Contact</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
