import React from 'react'
import Link from 'gatsby-link'
import './discover.css'
import CrewCard from '../components/CrewCard'
import Chicago from './chicago-feminist.jpg'
import FirstFriday from './first-friday.jpg'
import LAWomens from './la-womens.jpg'
import Nwff from './NWFF.jpg'
import MultiVerse from './multi.jpg'
import Asia from './AsiaSouthEast.jpg'
import Director from './director.jpg'
import Producer from './producer.jpg'
import Screenwriter from './Screenwriter.jpeg'
import LeadMan from './lead-actor.jpg'
import LeadWoman from './Jehan.jpg'
import Dp from './dp.jpeg'

export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderCrew = this.renderCrew.bind(this);
    }
    renderCrew(first, last, image, title, description) {
        return (
            <CrewCard first={first} last={last} title={title} image={image}>{description}</CrewCard>
        )
    }
    render() {
        const crewData = [
            {
                first: 'Ayesha',
                last: 'ABOUELAZM',
                title: 'DIRECTOR',
                image: Director,
                description: ''
            },
            {
                first: 'Jehan',
                last: 'IBRAHIM',
                title: 'LEAD - Amira',
                image: LeadWoman,
                description: ''
            },
            {
                first: 'Sam',
                last: 'HAN',
                title: 'LEAD - Ahmed',
                image: LeadMan,
                description: ''
            },
            {
                first: 'Luwen',
                last: 'SHAO',
                title: 'PRODUCER',
                image: Producer,
                description: ''
            },
            {
                first: 'Nasser',
                last: 'ABOUELAZM',
                title: 'SCREENWRITER',
                image: Screenwriter,
                description: ''
            },
            {
                first: 'Zachary',
                last: 'ALSEN',
                title: 'CINEMATOGRAPHER',
                image: Dp,
                description: ''
            }
        ]
        return (
            <div>
                <div className="img1">
                    <div className="section-header film"><span>THE FILM</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <h1 className="general-title blue">THE LATEST</h1>
                        <p className="general-text">Currently, the short film, <em>The Girl in the Blue Bra</em>, is on the Festival Circuit.</p>
                        <p className="general-text">The <strong>feature</strong> is in pre-production.  For more information on the feature, <span className="link"><strong>click here</strong></span>.</p>
                        <h1 className="general-title blue">LOGLINE</h1>
                        <p className="general-text">{'In the midst of the 2011 Egyptian protests, a sheltered young woman is forced out of her comfort zone and into the increasingly hostile streets of revolutionary Cairo.'}</p>
                        <h1 className="general-title blue">SYNOPSIS</h1>
                        <p className="general-text">{'Failing her college exam and being the target of routine cat calls are just a few of the problems that Amira faces as a sheltered young woman in Cairo, Egypt.  When she’s not getting grief from her father about overcooking breakfast, she is treated as second class by the off duty police officers that frequent the falafel cart down the street from her apartment.  Among these officers is Ahmed, a small minded, self righteous man who despite his latent misogyny tries his best to be a “good person.”  As the Arab Spring plunges the country deeper into crisis, Amira and Ahmed can’t help but be forced to confront the violent realities that had at once been so neatly preserved in their neighborhood.  This confrontation, unfortunately, plays out in the most devastating way.'}</p>
                    </div>
                </div>
                <div className="img2">
                    <div className="section-header circuit"><span>FESTIVAL CIRCUIT</span></div>
                </div>
                <div className="box white">
                    <div className="text-container">
                        <h1 className="general-title space">ACCOLADES</h1>
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

                        <h1 className="general-title space">SCREENINGS</h1>
                        <p className="list-item"><a className="styled-link"><em>6th Delhi International Film Festival</em></a> <br/>&ndash; 12.9.17 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Asia South East Film Fesitival</em></a> <br/>&ndash; 12.16.17 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>First Friday Film Fesitival Kansas City</em></a> <br/>&ndash; 3.2.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Chicago Feminist Film Festival</em></a> <br/>&ndash; 3.9.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Los Angeles Womens International Film Festival</em></a> <br/>&ndash; 3.24.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Tallahassee Film Festival</em></a> <br/>&ndash; 3.25.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Nevada Womens Film Festival</em></a> <br/>&ndash; 3.25.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Universe Multicultural Film Festival</em></a> <br/>&ndash; 4.7.18 &ndash;</p>
                    </div>
                </div>
                <div className="img4">
                    <div className="section-header cast"><span>CAST &amp; CREW</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        {crewData.map(el=>this.renderCrew(el.first, el.last, el.image, el.title, el.description))}
                    </div>
                </div>
                <div className="img3">
                    <div className="section-header feature"><span>THE FEATURE</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <h1 className="general-title blue">UPDATES</h1>
                        <p className="general-text">The feature version of <em>The Girl in The Blue Bra</em> has recieved the <span className="green">GREEN LIGHT</span>!</p>
                        <p className="general-text">There is a working script.  Some principles have signed on to the project</p>
                        <h1 className="general-title">JOIN THE REVOLUTION</h1>
                        <p className="general-text">Become a key participant in the production of <em>The Girl in the Blue Bra</em>.</p>
                        <p className="general-text">IN FRONT OF THE CAMERA</p>
                        <p className="general-text">BEHIND THE CAMERA</p>
                        <p className="general-text">FOLLOW US</p>
                    </div>
                </div>
            </div>
        )
    }
}
