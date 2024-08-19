import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'
import play_icon from '../../assets/play_icon.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
                <img src={play_icon} alt="play_img" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>Sobre Nosotros</h3>
                <h2>+20 Años de trayectoria</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, obcaecati.
                     Consectetur modi consequatur voluptatum incidunt quam dolore, pariatur porro, nostrum, vel ad blanditiis earum ipsa odit? 
                     Alias, quidem possimus nostrum harum ex voluptatem commodi perferendis minima esse repudiandae ipsa molestiae iure similique nemo exercitationem 
                     veritatis necessitatibus distinctio cumque atque amet.</p>
            </div>
        </div>
    )
}

export default About
