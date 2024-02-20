import React from 'react'
import './work.css'
import image2 from'../../images/inji on conference.jpg'
import image3 from'../../images/itu.jpg'
import image4 from'../../images/itu1.jpg'
import image5 from'../../images//gada.jpg'

const work = () => {
  return (
    <section id='work'>
    <h2 className="title">My Portfolio</h2>
    <span className="desc"> Explore my diverse portfolio showcasing expertise in MERN stack, Flutter, video editing, and Photoshop. From robust web applications to creative designs, I demonstrate proficiency in MongoDB, Express.js, React, Node.js, and versatile skills across various tech domains. My commitment to continuous learning ensures adaptability to dynamic industry demands, delivering cutting-edge solutions with a focus on optimal performance and innovative design.</span>
    <div className="images">
        <img src={image2} alt="" className="image" />
        <img src={image3} alt="" className="image" />
        <img src={image4} alt="" className="image" />
        <img src={image5} alt="" className="image" />


    </div>
<button className="workBtn">See More</button>
    </section>
  )
}

export default work