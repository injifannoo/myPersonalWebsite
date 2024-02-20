import React from 'react'
import './footer.css'
const footer = () => {
  return (
    <footer id='footer'>
      <nav className="nav">
    <ul className="list">
    <li> <a className="link" href="mailto:injifanotu@gmail.com.com" target="_blank">Send email</a></li>
    <li> <a className="link" href="tel:+251962408198" target="_blank">+251962408198</a></li>
    <li> <a className="link" href="https://github.com/Injifannoo/" target="_blank">Github</a></li>
    <li> <a className="link" href="https://t.me/InjifannooTU" target="_blank">Telegram</a></li>
    <li> <a className="link" href="https://www.linkedin.com/in/injifanotamiru/" target="_blank">Linkedn</a></li>

    </ul>
</nav>
<p className='copyRight'>&copy;{new Date().getFullYear()} Injifannoo Taammiruu Urgeessaa</p>

    </footer>
  )
}

export default footer