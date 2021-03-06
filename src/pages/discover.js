import React from 'react'
import Link from 'gatsby-link'
import './discover.css'
import CrewCard from '../components/CrewCard'
import Recognition from './Accolade-REcognition-logo-Gold.png'
import AsiaAward from './Asia-South-East-Film-Festival-Award-Laurel.jpg'
import IndieFest from './IndieFEST-Recognition-Logo-Gold.png'
import Chicago from './chicago-feminist.jpg'
import FirstFriday from './first-friday.jpg'
import LAWomens from './la-womens.jpg'
import Nwff from './NWFF.jpg'
import MultiVerse from './multi.jpg'
import Asia from './AsiaSouthEast.jpg'
import Director from './director.jpg'
import Producer from './producer.jpg'
import Screenwriter from './screenwriter.jpeg'
import LeadMan from './lead-actor.jpg'
import LeadWoman from './Jehan.jpg'
import Dp from './dp.jpeg'
import Revolution from './The_Girl_In_The_Blue_Bra.jpg'
import Backstage from './backstage-logo.png'
import Upcast from './upcast-logo.jpg'
import Casting from './casting-360-logo.svg'
import Tally from './TFF-2018-Laurels.png'
import Delhi from './Official-Selection-Laurel.jpg'
import Buddha from './TBIFF_Official Selection.jpg'
import CICFF from './CICFF_WINNER_LAUREL.jpg'
import OneReelerShort from './One_reeler_short_competition.jpg'
import Kinodrome from './KINODROME.jpg'
import Westfield from './WIFF-Laurel-2018-Honorable-Mention-Black.jpg'
import Push from './push-2018-official-selection-laurel-black-01.jpg'

export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderCrew = this.renderCrew.bind(this);
        this.moveToFeature = this.moveToFeature.bind(this);
    }
    renderCrew(first, last, image, title, description, index) {
        return (
            <CrewCard key={index} first={first} last={last} title={title} image={image}>{description}</CrewCard>
        )
    }
    moveToFeature() {
        window.document.querySelector('.img3').scrollIntoView({behavior: 'smooth'});
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
                        <p className="general-text">Currently, the short film, <em className="blue">The Girl in the Blue Bra</em>, is on the Festival Circuit. The feature version of <em className="blue">The Girl in The Blue Bra</em> has recieved the green light!  There is a working script.  Some principles have signed on to the project. &nbsp;&nbsp;<span className="green" onClick={this.moveToFeature}>LEARN MORE <i className="fa fa-caret-right"></i></span></p>
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
                            <img alt="Accolade Global Film Competition" src={Recognition} />
                        </div>
                        <div className="image-container">
                            <img alt="Asia South East Film Fesitival" className="circle" src={AsiaAward} />
                        </div>
                        <div className="image-container">
                            <img alt="IndieFEST" src={IndieFest} />
                        </div>
                        <div className="image-container">
                            <img alt="Chicago Feminist Film Festival" src={Chicago} />
                        </div>
                        <div className="image-container">
                            <img alt="Universe Multicultural Film Festival" src={MultiVerse} />
                        </div>
                        <div className="image-container">
                            <img alt="First Friday Film Fesitival Kansas City" src={FirstFriday} />
                        </div>
                        <div className="image-container">
                            <img alt="Los Angeles Womens International Film Festival" src={LAWomens} />
                        </div>
                        <div className="image-container">
                            <img alt="Nevada Womens Film Festival" src={Nwff} />
                        </div>
                        <div className="image-container">
                            <img alt="Asia South East Film Fesitival" src={Asia} />
                        </div>
                        <div className="image-container">
                            <img alt="Tallahassee Film Festival" src={Tally} />
                        </div>
                         <div className="image-container">
                            <img alt="The Buddha International Film Festival" src={Buddha} />
                        </div>
                        <div className="image-container">
                            <img alt="6th Delhi International Film Festival" className="circle" src={Delhi} />
                        </div>
                        <div className="image-container">
                            <img alt="CICFF Festival" src={CICFF} />
                        </div>
                         <div className="image-container">
                            <img alt="One Reeler Short Festival" src={OneReelerShort} />
                        </div>
                         <div className="image-container">
                            <img alt="Kinodrome Festival" src={Kinodrome} />
                        </div>
                         <div className="image-container">
                            <img alt="Westfield Film Festival" src={Westfield} />
                        </div>
                         <div className="image-container">
                            <img alt="Push Film Festival" src={Push} />
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
                        <p className="list-item"><a className="styled-link"><em>IndieFEST</em></a> <br/>&ndash; 5.26.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>The Buddha International Film Festival</em></a> <br/>&ndash; 6.10.18 &ndash;</p>
                        <p className="list-item"><a className="styled-link"><em>Accolade Global Film Competition</em></a> <br/>&ndash; 6.11.18 &ndash;</p>
                    </div>
                </div>
                <div className="img4">
                    <div className="section-header cast"><span>CAST &amp; CREW</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        {crewData.map((el, index)=>this.renderCrew(el.first, el.last, el.image, el.title, el.description, index))}
                    </div>
                </div>
                <div className="img3">
                    <div className="section-header feature"><span>THE FEATURE</span></div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <h1 className="general-title">JOIN THE REVOLUTION</h1>
                        <p className="general-text mg-b-0">Become a key participant in the production of <em className="blue">The Girl in the Blue Bra</em>.</p>
                    </div>
                </div>
                    <div className="director-pic"></div>
                <div className="box">
                    <div className="text-container">
                        <p className="revolution-title">We are now casting for the feature on the following sites</p>
                        <div className="casting-sites">
                            <div><a href="https://www.backstage.com/casting/the-girl-in-the-blue-bra-186905/" target="_blank"><img src={Backstage}></img></a></div>
                            <div><a href="https://www.getupcast.com/" target="_blank"><img src={Upcast}></img></a></div>
                            <div><a href="https://casting360.com" target="_blank"><img src={Casting}></img></a></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="text-container">
                        <p className="social-text"><a href="https://www.facebook.com/The-Girl-In-The-Blue-Bra-1817309361920471/" target="_blank"><i className="fab fa-facebook social-icon"></i></a>
           <a href="https://www.instagram.com/thegirlinthebluebra/" target="_blank"><i className="fab fa-instagram social-icon"></i></a>
           <a href="https://twitter.com/TGITBB" target="_blank"><i className="fab fa-twitter social-icon"></i></a></p>
                    </div>
                    <p className="general-text"><small>&copy; Nasser Abouelazm 2018</small></p>
                </div>
            </div>
        )
    }
}
