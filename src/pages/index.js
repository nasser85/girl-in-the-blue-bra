import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Video from './video.mp4'
import Facebook from './facebook.png'
import Youtube from './youtube.png'
import Twitter from './twitter.png'


const IndexPage = () => (
    <div>
        <video playsInline autoPlay muted loop id="myVideo">
          <source src={Video} type="video/mp4"></source>
        </video>
        <div className="video-overlay">
        <h1 className="title">{'THE GIRL IN'}</h1>
         <h1 className="title">{'THE BLUE BRA'}</h1>
         <div className="social-icons">
           <a href="https://www.facebook.com/The-Girl-In-The-Blue-Bra-1817309361920471/" target="_blank"><i className="fab fa-facebook social-icon"></i></a>
           <a href="https://www.instagram.com/thegirlinthebluebra/" target="_blank"><i className="fab fa-instagram social-icon"></i></a>
           <a href="https://twitter.com/TGITBB" target="_blank"><i className="fab fa-twitter social-icon"></i></a>
         </div>
        </div>
  </div>
)

export default IndexPage
