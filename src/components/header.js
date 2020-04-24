import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle }) => (
<>
<Helmet>
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
  <link href="images/webclip.png" rel="apple-touch-icon" />
  <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" crossorigin="anonymous"></script>
  <script type="text/javascript" async="" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=KjtQRr"></script>
        </Helmet>
  <header>
  <div class="notification-bar-wrapper">
    <div class="notification-bar">
      <div class="notification-bar-container w-container">
        <h4 class="annoucement">At-Home Coronavirus Test</h4>
        <div class="div-block-75">
          <div>
            <div class="text-block-20">We&#x27;re in the final stages of bringing to market a <span class="text-span-3">COVID-19 antibody</span> test that utilizes a finger prick along with an app to give you results in just 15 minutes from home.</div>
          </div>
          <div class="div-block-74 w-clearfix"><a href="coronavirus.html" class="dark-bt rose w-button">Learn more</a></div>
        </div>
      </div><img src="images/close.png" data-w-id="55a9ad55-4615-3891-1a1a-7e4f45bda160" alt="" class="image-25" /></div>
  </div>
  <div class="menu-navigation">
    <div class="menu-nav">
      <div class="faded toping"></div>
      <div class="container-12 w-container">
        <div class="menu-wrap">
          <div>
            <div data-w-id="0e1606eb-2c54-b84f-fd7d-445d9d9bc126" class="nav">
              <div class="first-burger"></div>
              <div class="first-burger sec-line"></div>
              <div class="first-burger"></div>
            </div>
          </div>
          <div class="logo"><a href="index.html" aria-current="page" class="w-inline-block w--current"><img src="images/Logo.png" height="32" alt="" class="image-19" /></a></div>
          <div class="w-clearfix"><a href="wellness-test-cards.html" class="dark-bt nav-bt w-button">Pre-order</a><a href="wellness-test-cards.html" class="dark-bt nav-bt mobile w-button">Pre-order</a></div>
        </div>
      </div>
    </div>
    <div class="menu-content">
      <div class="div-block-40">
        <div class="div-block-120">
          <div class="div-block-119">
            <div class="div-block-64">
              <div data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f771d" class="close"><img src="images/close-Icon.png" alt="" class="image-32" /></div><a href="#" class="w-inline-block"><img src="images/white-logo.png" height="32" alt="" class="image-18" /></a></div>
            <div data-collapse="none" data-animation="default" data-duration="400" class="navbar w-nav">
              <nav role="navigation" class="nav-menu w-nav-menu">
                <div class="nav-li"><a href="index.html" aria-current="page" class="nav-link-2 w-nav-link w--current">Wellness Test Card</a></div>
                <div class="nav-li"><a href="coronavirus.html" class="nav-link-2 w-nav-link">Coronavirus Test Card</a></div>
                <div class="nav-li"><a href="about.html" class="nav-link-2 w-nav-link">About</a></div>
                <div class="nav-li"><a href="careers.html" class="nav-link-2 w-nav-link">Careers</a></div>
                <div class="nav-li"><a href="#" data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7730" class="nav-link-2 expand w-nav-link">Partner</a>
                  <div class="p-qs nav">
                    <div class="text-block-22">For Partner Inquiries, <a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" class="link-16">partner@vesselhealth.com</a></div>
                  </div>
                </div>
                <div class="nav-li"><a href="#" data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7738" class="nav-link-2 expand w-nav-link">Press</a>
                  <div class="p-qs nav">
                    <div class="text-block-22">For Press Inquiries, <a href="mailto:press@vesselhealth.com?subject=Vessel%20Health%20press%20inquiry" class="link-15">press@vesselhealth.com</a></div>
                  </div>
                </div>
              </nav>
            </div>
            <div class="div-block-58">
              <div><a href="http://vesselhealth.zendesk.com/" target="_blank" class="dark-bt white w-button">Support</a></div>
              <div>
                <h4 class="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" class="link">Ig</a><em class="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" class="link">Fb</a><em class="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" class="link">Tw</a><em class="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" class="link-2">Yt</a></h4>
              </div>
            </div>
          </div>
          <div data-w-id="f5ccf9f4-a3e9-20be-34c3-4c2e866f7754" class="div-block-117"></div>
        </div>
      </div>
    </div>
  </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
