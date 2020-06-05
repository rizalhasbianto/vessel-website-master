import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component} from "react"
import { Helmet } from "react-helmet"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Location } from '@reach/router'

import Logo from "../images/Logo.png"
import close from "../images/close.png"
import close_icon from "../images/close-Icon.png"
import whiteLogo from "../images/white-logo.png"
var url = '';
var topBar = '';
var headButton = <><Link className="dark-bt nav-bt w-button" to="/wellness-test-cards">Pre-order</Link>
<Link className="dark-bt nav-bt mobile w-button" to="/wellness-test-cards">Pre-order</Link></>;
class Header extends React.Component {
  componentDidMount() {
	var lastScrollTop ='0'
    function handleScroll() {
	    var st = window.pageYOffset || document.documentElement.scrollTop; 
      var x = document.getElementsByClassName("menu-nav");
      var scroll = window.pageYOffset;
      var elem = document.getElementsByClassName("notification-bar-container");
      var faded = document.getElementsByClassName("faded");
      var elemTop = elem[0].offsetHeight;
      if (st > lastScrollTop){
        if ( scroll > elemTop) {
        x[0].classList.remove("supm");
        x[0].classList.add("sdownm");
        }
      } else {
        if ( scroll > elemTop) {
        x[0].classList.remove("sdownm");
        x[0].classList.add("supm");
        }
      }
    lastScrollTop = st <= 0 ? 0 : st;
    
      if ( scroll > elemTop) {
        faded[0].classList.remove("toping");
        faded[0].classList.add("scrolling");
      }
      else {
        faded[0].classList.remove("scrolling");
        faded[0].classList.add("toping");
      }
    }
    window.addEventListener('scroll', handleScroll);
    var topBar = document.getElementsByClassName('image-25')
    topBar[0].addEventListener('click', (event) => {
      var covid = document.getElementById("very-top-bar");
      covid.style.display = "none";
    });
}
constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  }));
}
render() {
  if (typeof window !== 'undefined') {
  var path = window.location.pathname;
  var pathName = path.replace(/\//g, "");
  if (pathName == 'coronavirus') {
    headButton = <><div className="dark-bt nav-bt w-button" onClick={() => scrollTo('#join-waitlist')}>Join Waitlist</div>
    <div className="dark-bt nav-bt mobile w-button" onClick={() => scrollTo('#join-waitlist')}>Join</div> </>
  }
  else if (pathName == 'coronavirus-grouptesting'){
    headButton = <><div className="dark-bt nav-bt w-button" onClick={() => scrollTo('#contact-us')}>Contact Us</div>
      <div className="dark-bt nav-bt mobile w-button" onClick={() => scrollTo('#contact-us')}>Contact</div> </>
  }
  else {
    headButton = <><Link className="dark-bt nav-bt w-button" to="/wellness-test-cards">Pre-order</Link>
    <Link className="dark-bt nav-bt mobile w-button" to="/wellness-test-cards">Pre-order</Link></>
  }
  if ( path == '/') {
    topBar = 'notification-bar-wrapper';
  }
  else {
    topBar = 'notification-hidden';
  }
}
  return (
<>
<Helmet>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link href="images/webclip.png" rel="apple-touch-icon" />
</Helmet>
<Location>
      {({ location }) => {
        url = (location.pathname);
      }}
    </Location>
  <div className={topBar} id="very-top-bar">
    <div className="notification-bar">
      <div className="notification-bar-container w-container">
        <h4 className="annoucement">At-Home Coronavirus Test</h4>
        <div className="div-block-75">
          <div>
            <div className="text-block-20">We&#x27;re in the final stages of bringing to market a <span className="text-span-3">COVID-19 antibody</span> test that utilizes a finger prick along with an app to give you results in just 15 minutes from home.</div>
          </div>
          <div className="div-block-74 w-clearfix">
           <Link className="dark-bt rose w-button" to="/coronavirus">Learn more</Link>
          </div>
        </div>
      </div><img src={close} data-w-id="55a9ad55-4615-3891-1a1a-7e4f45bda160" alt="" className="image-25" /></div>
  </div>
  <div className="menu-navigation" id="menu_nav">
    <div className="menu-nav">
      <div className="faded toping"></div>
      <div className="container-12 w-container">
        <div className="menu-wrap">
          <div>
            <div data-w-id="0e1606eb-2c54-b84f-fd7d-445d9d9bc126" className="nav" onClick={this.handleClick}>
              <div className="first-burger"></div>
              <div className="first-burger sec-line"></div>
              <div className="first-burger"></div>
            </div>
          </div>
          <div className="logo">
            <Link to="/" aria-current="page" className="w-inline-block w--current">
              <img src={Logo} height="32" alt="" className="image-19" />
            </Link>
          </div>
          <div className="w-clearfix" id={url}>
          {headButton}
          </div>
        </div>
      </div>
    </div>
    <div className={ this.state.isToggleOn ? 'menu-content hiding asup' : 'menu-content showing kaluar s'}>
      <div className={ this.state.isToggleOn ? 'div-block-40 hiding' : 'div-block-40 showing'}>
        <div className="div-block-120">
          <div className="div-block-119">
            <div className="div-block-64">
              <div data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f771d" className="close" onClick={this.handleClick}><img src={close_icon} alt="" className="image-32" /></div><a href="#" className="w-inline-block"><img src={whiteLogo} height="32" alt="" className="image-18" /></a></div>
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-li">
                  <Link className={url == '/' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/">Wellness Test Card</Link>
                </div>
                <div className="nav-li">
                  <Link className={url == '/coronavirus' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/coronavirus">Coronavirus Test Card</Link>
                </div>
                <div className="nav-li">
                  <Link className={url == '/coronavirus-grouptesting' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/coronavirus-grouptesting">Coronavirus Group Testing</Link>
                </div>
                <div className="nav-li">
                  <Link className={url == '/careers' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/careers">Careers</Link>
                </div>
                <div className="nav-li">
                  <Link className={url == '/about' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/about">About</Link>
                </div>
                <div className="nav-li">
                  <a href="https://vesselhealth.com/blog/" className="nav-link-2 w-nav-link">Blog</a>
                </div>
                <div className="nav-li">
                <Link className={url == '/partner' ? `nav-link-2 w-nav-link w--current` : `nav-link-2 w-nav-link`} to="/partner">Partner</Link>
                </div>
              </nav>
            </div>
            <div className="div-block-58">
              <div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="dark-bt white w-button">Support</a></div>
              <div>
                <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
              </div>
            </div>
          </div>
          <div data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7754" className="div-block-117"></div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
