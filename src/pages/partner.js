import React, { Component} from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

class coronaPage extends Component {
	componentDidMount() {
		// Accordion function
		var accorParent = document.getElementsByClassName("div-block-97");
		for (var i = 0; i < accorParent.length; i++) {
		  accorParent[i].addEventListener("click", function(e) {
			e.preventDefault()
			if (this.classList.contains("w--active")) {
			  this.classList.remove("w--active");
			}
			else {
			  this.className += " w--active"; 
			}
		  });
		}
	}
	render() {
	return (
<>
<Helmet>
    <script src={withPrefix('partner.js')} type="text/javascript" />
    </Helmet>
	<Layout>
    <SEO title="page 2" />
	<div className="section-2">
    <div className="container-26 w-container">
      <h1 className="heading change">What type of <br/>partnership are <br/>you interested in?</h1>
      <div className="qs-list">
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="f1eebf6b-2966-4342-e5cc-f0aa9a9d2407" className="accordion-trigger w-clearfix">
              <h3 className="heading-46 underline">Wellness card<br/></h3><img src="images/expand.png" alt="" className="expand-icon"/></div>
            <div className="p-qs">
				<div id="wellness"></div>
            </div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="f1eebf6b-2966-4342-e5cc-f0aa9a9d2467" className="accordion-trigger w-clearfix">
              <h3 className="heading-46 underline">COVID-19 At-home testing<br/></h3><img src="images/expand.png" alt="" className="expand-icon"/></div>
            <div className="p-qs">
				<div id="covid"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-3">
    <div className="footer-content">
      <div className="container-10 w-container">
        <div className="div-block-36"><img src="images/white-logo.png" height="40" alt="" className="image-11"/></div>
        <div className="div-block-35">
          <div className="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span className="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="footer-link">Help Center</a></div>
        <div className="div-block-35">
        <Link className="footer-link" to="/">Wellness Test Card</Link>
        <Link className="footer-link" to="/coronavirus">Coronavirus Test Card</Link>
        <Link className="footer-link" to="/about">About</Link>
        <Link className="footer-link" to="/careers">Careers</Link>
        <Link className="footer-link" to="/partner">Partner</Link>
        <Link className="footer-link" to="#">Press</Link>
        </div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div>
          <Link className="footer-link notice" to="/privacy-policy">Privacy Policy</Link>
          <Link className="footer-link notice" to="/terms-of-service">Terms of Service</Link>
          <div className="footer-text notice patent">Patent Pending</div>
          <div className="footer-text notice disclaimer">* <strong>This product is intended only for maintaining and encouraging a healthy lifestyle and is unrelated to the diagnosis, cure, mitigation, prevention, or treatment of a disease or condition</strong>.  Designed by Vessel in California.</div>
        </div>
      </div>
      <div className="cookies-bar">
        <div className="w-container">
          <div className="cookies-notice">
            <p className="paragraph-28 cookies">This site uses cookies to ensure you get the best experience on our website. <a href="privacy-policy.html">Learn more</a></p><a data-w-id="05ffb679-b0af-bac0-0223-ac07643b6b05" href="#" className="dark-bt cookies w-button">Got it</a></div>
        </div>
      </div>
    </div>
  </div>
  <div className="poups">
    <div className="partner-pop">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a210" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a212" className="close pop"><img src="images/close.png" alt=""/></div>
        <div className="div-block-53 pop">
          <h2 className="heading popup">For partnership inquiries<br/></h2>
          <h3 className="heading-61 email-click"><a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" className="link-14">partner@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
    <div className="pop-sec">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21b" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21d" className="close pop"><img src="images/close.png" data-w-id="1c88a0b7-bbfe-c4ac-7626-fe89b8ef7d92" alt=""/></div>
        <div className="div-block-53 pop">
          <h2 className="heading popup">Join the waitlist<br/></h2>
          <h4 className="heading-52 subsecond">Total subscribers </h4>
        </div>
        <div className="w-embed">
          <div className="klaviyo-form-LBcxWV"></div>
        </div>
        <div className="disclaimer">By submitting this form you agree to our <a href="terms-of-service.html" className="link-10">terms of service</a> and <a href="privacy-policy.html" className="link-9">privacy policy.</a></div>
      </div>
      <div className="div-block-40">
        <div className="div-block-120">
          <div className="div-block-119">
            <div className="div-block-64">
              <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a232" className="close">
                <div className="text-block-2">x</div>
              </div><img src="images/white-logo.png" height="32" alt="" className="image-18"/></div>
            <div data-collapse="none" data-animation="default" data-duration="400" role="banner" className="navbar w-nav">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-li"><a href="index.html" className="nav-link-2 w-nav-link">Wellness Test Card</a></div>
                <div className="nav-li"><a href="coronavirus.html" className="nav-link-2 w-nav-link">Coronavirus Test Card</a></div>
                <div className="nav-li"><a href="about.html" className="nav-link-2 w-nav-link">About</a></div>
                <div className="nav-li"><a href="careers.html" className="nav-link-2 w-nav-link">Careers</a></div>
                <div className="nav-li"><a href="mailto:partners@vesselhealth.com?subject=Vessel%20Health%20Partner%20Inquiry" className="nav-link-2 w-nav-link">Partner</a></div>
                <div className="nav-li"><a href="#" data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a248" className="nav-link-2 w-nav-link">Press</a></div>
              </nav>
            </div>
            <div className="div-block-58">
              <div><a href="index.html" className="dark-bt white w-button">Support</a></div>
              <div>
                <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
              </div>
            </div>
          </div>
          <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a25f" className="div-block-117"></div>
        </div>
      </div>
    </div>
    <div className="press-pop">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a261" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a263" className="close pop"><img src="images/close.png" alt=""/></div>
        <div className="div-block-53 pop">
          <h2 className="heading popup">For press inquiries<br/></h2>
          <h3 className="heading-61 email-click"><a href="mailto:press@vesselhealth.com?subject=Vessel%20Health%20press%20inquiry" className="link-13">press@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
  </div>
  </Layout>
	</>
	)
	}
}

export default coronaPage