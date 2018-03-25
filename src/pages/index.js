import React from 'react'
import Link from 'gatsby-link'
import './index.css'
import Video from './video.mp4'
import Chicago from './chicago-feminist.jpg'
import FirstFriday from './first-friday.png'
import LAWomens from './la-womens.jpg'
import Nwff from './NWFF.png'
import MultiVerse from './multi.png'
import Asia from './AsiaSouthEast.png'
import Facebook from './facebook.png'
import Youtube from './youtube.png'
import Twitter from './twitter.png'


const IndexPage = () => (
    <div>
        <video autoPlay muted loop id="myVideo">
          <source src={Video} type="video/mp4"></source>
        </video>
        <div className="video-overlay">
        <h1 className="title">{'THE GIRL IN'}</h1>
         <h1 className="title">{'THE BLUE BRA'}</h1>
         <div className="social-icons">
           <div className="social-icon"><img src={Facebook} /></div>
           <div className="social-icon"><img src={Youtube} /></div>
           <div className="social-icon"><img src={Twitter} /></div>
         </div>
        </div>
  </div>
)

export default IndexPage
