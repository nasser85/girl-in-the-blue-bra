import React from 'react'
import './index.css'
import Link from 'gatsby-link'
import smoothScroll from 'smoothscroll-polyfill';

export default class CrewCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card-wrapper">
                <div className="crew-card">
                  <img src={this.props.image} alt={this.props.title + ' - ' + this.props.first + ' ' + this.props.last}></img>
                  <div className="container">
                    <p className="name-text">{this.props.first}</p>
                    <p className="name-text">{this.props.last}</p>
                    <hr className="seperate"></hr>
                    <p className="title-text">{this.props.title}</p>
                  </div>
                </div>
            </div>
        )
    }

}
