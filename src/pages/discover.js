import React from 'react'
import Link from 'gatsby-link'
import './discover.css'
import Chicago from './chicago-feminist.jpg'
import FirstFriday from './first-friday.png'
import LAWomens from './la-womens.jpg'
import Nwff from './NWFF.png'
import MultiVerse from './multi.png'
import Asia from './AsiaSouthEast.png'

export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            section: this.props.location.query
        }
    }
    render() {
        console.log(this.state.section);
        return (
            <div>
                <div className="img1">
                    <div className="section-header film"><span>THE FILM</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <h1 className="general-title">LOGLINE</h1>
                        <p className="general-text">{'In the midst of the 2011 Egyptian protests, a sheltered young woman is forced out of her comfort zone and into the increasingly hostile streets of revolutionary Cairo.'}</p>
                        <h1 className="general-title">SYNOPSIS</h1>
                        <p className="general-text">{'Failing her college exam and being the target of routine cat calls are just a few of the problems that Amira faces as a sheltered young woman in Cairo, Egypt.  When she’s not getting grief from her father about overcooking breakfast, she is treated as second class by the off duty police officers that frequent the falafel cart down the street from her apartment.  Among these officers is Ahmed, a small minded, self righteous man who despite his latent misogyny tries his best to be a “good person.”  As the Arab Spring plunges the country deeper into crisis, Amira and Ahmed can’t help but be forced to confront the violent realities that had at once been so neatly preserved in their neighborhood.  This confrontation, unfortunately, plays out in the most devastating way.'}</p>
                    </div>
                </div>
                <div className="img2">
                    <div className="section-header circuit"><span>FESTIVAL CIRCUIT</span></div>
                </div>
                <div className="box white">
                    <div className="text-container">
                        <h1 className="general-title">ACCOLADES</h1>
                        <div className="image-container">
                            <img src={Chicago} />
                        </div>
                        <div className="image-container">
                            <img src={MultiVerse} />
                        </div>
                        <div className="image-container">
                            <img src={FirstFriday} />
                        </div>
                        <div className="image-container">
                            <img src={LAWomens} />
                        </div>
                        <div className="image-container">
                            <img src={Nwff} />
                        </div>
                        <div className="image-container">
                            <img src={Asia} />
                        </div>

                        <h1 className="general-title">SCREENINGS</h1>
                    </div>
                </div>
                <div className="img3">
                    <div className="section-header cast"><span>CAST &amp; CREW</span></div>
                </div>
                <div className="box"></div>
            </div>
        )
    }
}
