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
  }
  componentDidMount() {
    smoothScroll.polyfill();
    window.document.addEventListener('scroll', this.checkPage);
    if (window.location.pathname == '/discover') {
      this.setState({frontPage: false})
    }
  }
  toggleLinkColor(element) {
    var links = window.document.querySelectorAll('.btn');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('selected');
    }
    window.document.querySelector('.' + element + '-btn').classList.add('selected');
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
    if (filmRect && this.isInViewPort(filmRect)) {
      this.toggleLinkColor('film');
    } else if (circuitRect && this.isInViewPort(circuitRect)) {
      this.toggleLinkColor('circuit');
    } else if (castRect && this.isInViewPort(castRect)) {
      this.toggleLinkColor('cast');
    }
  }
  toggleNav() {
    this.setState({frontPage: !this.state.frontPage});
  }
  scrollTo(element) {
    window.document.querySelector('.' + element).scrollIntoView({behavior: 'smooth'});
  }
  toFilm() {
    this.scrollTo('film');
  }
  toCircuit() {
    this.scrollTo('circuit');
  }
  toCast() {
    this.scrollTo('cast');
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
        <div className="nav-items">
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
        </div>
      </nav>
    )
  }
  render() {
    return this.state.frontPage ? this.renderFrontNav() : this.renderInteriorNav();
  }
}


// = () => (
//   <div
//     style={{
//       backgroundColor: 'black',
//       marginBottom: '1.45rem',
//       zIndex: 9999,
//       position: 'fixed',
//       width: '100%',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         paddingLeft: '1.0875rem',
//         display: 'inline-block',
//       }}
//     >
//       <p style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//             display: 'inline-block',
//           }}
//         >Home</Link>
//         <span> &nbsp; | &nbsp; </span>
//          <Link
//           to={{ pathname: '/discover', query: 'film' }}
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//             display: 'inline-block',
//           }}
//         >The Film</Link>
//         <span> &nbsp; | &nbsp; </span>
//          <Link
//           to={{ pathname: '/discover', query: 'circuit' }}
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//             display: 'inline-block',
//           }}
//         >Festival Circuit</Link>
//         <span> &nbsp; | &nbsp; </span>
//          <Link
//           to={{ pathname: '/discover', query: 'crew' }}
//           style={{
//             color: 'white',
//             textDecoration: 'none',
//             display: 'inline-block',
//           }}
//         >Cast &amp; Crew</Link>
//       </p>
//     </div>
//   </div>
// )


