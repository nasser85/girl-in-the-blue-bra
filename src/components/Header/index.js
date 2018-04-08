import React from 'react'
import './Header.css'
import Link from 'gatsby-link'
import smoothScroll from 'smoothscroll-polyfill';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontPage: true
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.renderFrontNav = this.renderFrontNav.bind(this);
    this.renderInteriorNav = this.renderInteriorNav.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.toFilm = this.toFilm.bind(this);
    this.toCircuit = this.toCircuit.bind(this);
    this.toCast = this.toCast.bind(this);
    this.isInViewPort = this.isInViewPort.bind(this);
    this.checkPage = this.checkPage.bind(this);
    this.toggleLinkColor = this.toggleLinkColor.bind(this);
    this.toFeature = this.toFeature.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }
  componentDidMount() {
    smoothScroll.polyfill();
    window.document.addEventListener('scroll', this.checkPage);
    if (window.location.pathname.replace(/[/]/g, '') == 'discover') {
      this.setState({frontPage: false})
    }
  }
  toggleLinkColor(element) {
    var links = window.document.querySelectorAll('.btn');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('selected');
    }
    window.document.querySelector('.' + element + '-btn').classList.add('selected');
    window.document.querySelector('.' + element + '-mobile-btn').classList.add('selected');
  }
  isInViewPort(rect) {
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
  checkPage() {
    var filmRect = window.document.getElementsByClassName('film')[0] ? window.document.getElementsByClassName('film')[0].getBoundingClientRect() : false;
    var circuitRect = window.document.getElementsByClassName('circuit')[0] ? window.document.getElementsByClassName('circuit')[0].getBoundingClientRect() : false;
    var castRect = window.document.getElementsByClassName('cast')[0] ? window.document.getElementsByClassName('cast')[0].getBoundingClientRect() : false;
    var featureRect = window.document.getElementsByClassName('feature')[0] ? window.document.getElementsByClassName('feature')[0].getBoundingClientRect() : false;
    if (filmRect && this.isInViewPort(filmRect)) {
      this.toggleLinkColor('film');
    } else if (circuitRect && this.isInViewPort(circuitRect)) {
      this.toggleLinkColor('circuit');
    } else if (castRect && this.isInViewPort(castRect)) {
      this.toggleLinkColor('cast');
    } else if (featureRect && this.isInViewPort(featureRect)) {
      this.toggleLinkColor('feature');
    }
  }
  toggleMobileNav() {
    var dropDown = window.document.getElementsByClassName('dropdown')[0];
    var hamburger = window.document.getElementsByClassName('fa-bars')[0];
    if (dropDown.classList.contains('open')) {
      dropDown.classList.remove('open');
      hamburger.classList.remove('open')
    } else {
      dropDown.classList.add('open');
      hamburger.classList.add('open')
    }
  }
  toggleNav() {
    this.setState({frontPage: !this.state.frontPage});
  }
  scrollTo(element) {
    window.document.querySelector('.' + element).scrollIntoView({behavior: 'smooth'});
  }
  toFilm() {
    var userAgent = window.navigator.userAgent;
    if (userAgent.match(/Chrome/i) ) {
      this.scrollTo('film');
    } else {
      window.document.querySelector('.img1').scrollIntoView({behavior: 'smooth'});
    }
  }
  toCircuit() {
    var userAgent = window.navigator.userAgent;
    if (userAgent.match(/Chrome/i) ) {
      this.scrollTo('circuit');
    } else {
      window.document.querySelector('.img2').scrollIntoView({behavior: 'smooth'});
    }
  }
  toCast() {
    var userAgent = window.navigator.userAgent;
    if (userAgent.match(/Chrome/i) ) {
      this.scrollTo('cast');
    } else {
      window.document.querySelector('.img4').scrollIntoView({behavior: 'smooth'});
    }
  }
  toFeature() {
    var userAgent = window.navigator.userAgent;
    if (userAgent.match(/Chrome/i) ) {
      this.scrollTo('feature');
    } else {
      window.document.querySelector('.img3').scrollIntoView({behavior: 'smooth'});
    }
  }
  renderFrontNav() {
    return (
      <nav className="front-page">
        <div className="nav-items">
          <Link
          to="/discover"
          onClick={this.toggleNav}
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >DISCOVER <div className="arrow"></div></Link>
        </div>
      </nav>
    )
  }
  renderInteriorNav() {
    return (
      <nav className="interior">
      <div className="title-header">
      <p>THE GIRL IN THE BLUE BRA</p>
      </div>
        <div className="nav-items mobile">
         <Link
              to="/"
              onClick={this.toggleNav}
              className="home-btn"
              style={{
                color: 'cornflowerblue',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >HOME</Link>
          <i onClick={this.toggleMobileNav} className="fas fa-bars"></i>
        </div>
        <div className="dropdown">

          <p className="film-mobile-btn btn selected" onClick={this.toFilm}>FILM</p>
          <p className="circuit-mobile-btn btn" onClick={this.toCircuit}>CIRCUIT</p>
          <p className="cast-mobile-btn btn" onClick={this.toCast}>CREW</p>
          <p className="feature-mobile-btn btn" onClick={this.toFeature}>FEATURE</p>
        </div>
        <div className="nav-items desk">
           <Link
            to="/"
            onClick={this.toggleNav}
            className="home-btn"
            style={{
              color: 'cornflowerblue',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >HOME</Link>
          <span>|</span>
          <a className="film-btn btn selected" onClick={this.toFilm}>FILM</a>
          <a className="circuit-btn btn" onClick={this.toCircuit}>CIRCUIT</a>
          <a className="cast-btn btn" onClick={this.toCast}>CREW</a>
          <a className="feature-btn btn" onClick={this.toFeature}>FEATURE</a>
        </div>
      </nav>
    )
  }
  render() {
    return this.state.frontPage ? this.renderFrontNav() : this.renderInteriorNav();
  }
}
