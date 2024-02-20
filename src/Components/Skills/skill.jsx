import React from 'react';
import './skill.css';
import webDesign from '../../images/icons/web-design.jpg'
import flutter from '../../images/icons/flutter.png'
import photoshop from '../../images/icons/photoshop.png'
import videoEdit from '../../images/icons/video editing.jpeg'
import webDev from '../../images/icons/web dev.jpeg'

const skill = () => {
    return (
        <section id='skill'>
            <span className="skillTitle">MY SKILLS </span>
            <span className="skillDesc">"Hello! I am a passionate MERN stack developer and Flutter developer with expertise in building robust and scalable web and mobile applications. With a strong foundation in computer science, I bring a problem-solving mindset and a keen eye for detail to every project I work on. <br></br>As a video editor, I have a creative flair and a knack for storytelling, ensuring that every video I edit is engaging and visually appealing.<br></br> Currently in my last semester of computer science studies, I am constantly expanding my knowledge and staying up-to-date with the latest technologies and trends. I am excited to collaborate on innovative projects and contribute to the success of your next venture." </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={webDesign} alt="" className='skillBarImg'/>
                    <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>website design</p></div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={webDev} alt="" className='skillBarImg' />
                    <div className="skillBarText">
                    <h2>Full Stack web Developer</h2>
                    <p>website development</p></div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={flutter} alt="" className='skillBarImg'/>
                    <div className="skillBarText">
                    <h2>Flutter Developer</h2>
                    <p>flutter development</p></div>
                </div>
            </div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={videoEdit} alt="" className='skillBarImg'/>
                    <div className="skillBarText">
                    <h2>Video Editing</h2>
                    <p>Suursagalee</p></div>
                </div>
            </div>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={photoshop} alt="" className='skillBarImg'/>
                    <div className="skillBarText">
                    <h2>Photoshop</h2>
                    <p>Photo editing</p></div>
                </div>
            </div>
        </section>
    )
}

export default skill