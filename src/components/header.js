import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component} from "react"
import { render } from "react-dom"
import { Helmet } from "react-helmet"

class Header extends React.Component {
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
    return (
<>
<Helmet>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link href="images/webclip.png" rel="apple-touch-icon" />
        </Helmet>
  <div className="notification-bar-wrapper">
    <div className="notification-bar">
      <div className="notification-bar-container w-container">
        <h4 className="annoucement">At-Home Coronavirus Test</h4>
        <div className="div-block-75">
          <div>
            <div className="text-block-20">We&#x27;re in the final stages of bringing to market a <span className="text-span-3">COVID-19 antibody</span> test that utilizes a finger prick along with an app to give you results in just 15 minutes from home.</div>
          </div>
          <div className="div-block-74 w-clearfix"><a href="coronavirus.html" className="dark-bt rose w-button">Learn more</a></div>
        </div>
      </div><img src="images/close.png" data-w-id="55a9ad55-4615-3891-1a1a-7e4f45bda160" alt="" className="image-25" /></div>
  </div>
  <div className="menu-navigation">
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
          <div className="logo"><a href="index.html" aria-current="page" className="w-inline-block w--current"><img src="images/Logo.png" height="32" alt="" className="image-19" /></a></div>
          <div className="w-clearfix">
          <Link className="dark-bt nav-bt w-button" to="/page-2/">Pre-order</Link>
          <a href="wellness-test-cards.html" className="dark-bt nav-bt mobile w-button">Pre-order</a>
          </div>
        </div>
      </div>
    </div>
    <div className={ this.state.isToggleOn ? 'menu-content hiding asup' : 'menu-content showing kaluar'}>
      <div className={ this.state.isToggleOn ? 'div-block-40 hiding' : 'div-block-40 showing'}>
        <div className="div-block-120">
          <div className="div-block-119">
            <div className="div-block-64">
              <div data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f771d" className="close" onClick={this.handleClick}><img src="images/close-Icon.png" alt="" className="image-32" /></div><a href="#" className="w-inline-block"><img src="images/white-logo.png" height="32" alt="" className="image-18" /></a></div>
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-li"><a href="index.html" aria-current="page" className="nav-link-2 w-nav-link w--current">Wellness Test Card</a></div>
                <div className="nav-li"><a href="coronavirus.html" className="nav-link-2 w-nav-link">Coronavirus Test Card</a></div>
                <div className="nav-li"><a href="about.html" className="nav-link-2 w-nav-link">About</a></div>
                <div className="nav-li"><a href="careers.html" className="nav-link-2 w-nav-link">Careers</a></div>
                <div className="nav-li"><a href="#" data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7730" className="nav-link-2 expand w-nav-link">Partner</a>
                  <div className="p-qs nav">
                    <div className="text-block-22">For Partner Inquiries, <a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" className="link-16">partner@vesselhealth.com</a></div>
                  </div>
                </div>
                <div className="nav-li"><a href="#" data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7738" className="nav-link-2 expand w-nav-link">Press</a>
                  <div className="p-qs nav">
                    <div className="text-block-22">For Press Inquiries, <a href="mailto:press@vesselhealth.com?subject=Vessel%20Health%20press%20inquiry" className="link-15">press@vesselhealth.com</a></div>
                  </div>
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
