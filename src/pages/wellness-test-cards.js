import React, { Component} from "react"
import { Link } from "gatsby"
import $ from 'jquery'

import Layout from "../components/layout"
import SEO from "../components/seo"

class coronaPage extends Component {
  componentDidMount() {
    // ajax for subscription
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
      if (this.readyState == 4 && this.status == 200) {
        var dataObj = JSON.parse(this.responseText);
        var subTot = dataObj.value;
          function numb() {
    var number = parseInt(subTot);
  var $this = $('.sold .numb');
  console.log(number);
  $({
    countNum: $this.text()
  }).animate({
      countNum: number
    },
    {
      duration: 2000,
      easing: 'linear',
      step: function() {
        $this.text(commaSeparateNumber(Math.floor(this.countNum)));
      },
      complete: function() {
        $this.text(commaSeparateNumber(this.countNum));
        //alert('finished');
      }
    }
  );
  }
  function commaSeparateNumber(val) {
  while (/(\d+)(\d{3})/.test(val.toString())) {
    val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }
  return val;
}
numb(); 
    var order = (subTot / 150000) * 100;
    $(document).ready(function(){
    if ( order < 16.7 ) {
    $( ".order" ).animate({ "width": order+"%" }, 200 );
    }
    else if ( order > 16.7 && order < 33.4 ) {
    $( ".order" ).animate({ "width": order+"%" }, 400 );
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    }
    else if ( order > 33.4 && order <= 50 ) {
    $( ".order" ).animate({ "width": order+"%" }, 600 );
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    setTimeout(function(){ $('.kedua').addClass('active'); }, 400);
    }
    else if ( order > 50 && order < 66.7 ) {
    $( ".order" ).animate({ "width": order+"%" }, 800 );
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    setTimeout(function(){ $('.kedua').addClass('active'); }, 400);
    setTimeout(function(){ $('.ketiga').addClass('active'); }, 600);
    }
    else if ( order > 66.7 && order < 83.4 ) {
    $( ".order" ).animate({ "width": order+"%" }, 1000 );
    $(".div-block-158, .heading-65.sold").css("left",  order+"%");
    if($( window ).width() < 768 ) {
    $(".heading-65.sold").css("top",  order+"%");
    }
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    setTimeout(function(){ $('.kedua').addClass('active'); }, 400);
    setTimeout(function(){ $('.ketiga').addClass('active'); }, 600);
    setTimeout(function(){ $('.keempat').addClass('active'); }, 800);
    setTimeout(function(){ 
    	$( ".div-block-158" ).animate({ "height": "60px" }, 200 );
      $(".heading-65.sold").animate({ "opacity": 1 }, 200 );
    	numb(); 
    	}, 800);
    }
    else if ( order > 83.4 && order < 100 ) {
    $( ".order" ).animate({ "width": order+"%" }, 1200 );
    $(".div-block-158, .heading-65.sold").css("left",  order+"%");
    if($( window ).width() < 768 ) {
    $(".heading-65.sold").css("top",  order+"%");
    }
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    setTimeout(function(){ $('.kedua').addClass('active'); }, 400);
    setTimeout(function(){ $('.ketiga').addClass('active'); }, 600);
    setTimeout(function(){ $('.keempat').addClass('active'); }, 800);
    setTimeout(function(){ $('.kelima').addClass('active'); }, 1000);
    setTimeout(function(){ 
    	$( ".div-block-158" ).animate({ "height": "60px" }, 200 );
      $(".heading-65.sold").animate({ "opacity": 1 }, 200 );
    	numb(); 
    	}, 1000);
    }
    else {
    $( ".order" ).animate({ "width": order+"%" }, 1200 );
    $(".div-block-158, .heading-65.sold").css("left",  order+"%");
    if($( window ).width() < 768 ) {
    $(".heading-65.sold").css("top",  order+"%");
    }
    setTimeout(function(){ $('.kesatu').addClass('active'); }, 200);
    setTimeout(function(){ $('.kedua').addClass('active'); }, 400);
    setTimeout(function(){ $('.ketiga').addClass('active'); }, 600);
    setTimeout(function(){ $('.keempat').addClass('active'); }, 800);
    setTimeout(function(){ $('.kelima').addClass('active'); }, 1000);
    setTimeout(function(){ $('.keenam').addClass('active'); }, 1200);
    setTimeout(function(){ 
    	$( ".div-block-158" ).animate({ "height": "60px" }, 200 );
      $(".heading-65.sold").animate({ "opacity": 1 }, 200 );
    	numb(); 
    	}, 1200);
    }
    });
      }
    };
    xhttp.open("GET", "https://vessel--vesselapi.repl.co/", true);
    xhttp.send();
  }
	render() {
	return (
	<Layout>
    <SEO title="page 2" />
    <div className="section">
    <div className="container-13 w-container">
      <div className="div-block-65">
        <div className="div-block-72">
          <h1 className="heading-59">Pre-order<br/>wellness <br/>test cards<br/></h1>
        </div>
        <div className="div-block-121">
          <div className="div-block-129">
            <h3 className="heading-65 sold"><span className="numb">0</span>Test Cards Sold</h3>
          </div>
          <div className="div-block-133">
            <div className="div-block-123">
              <div className="div-block-158"></div>
              <div className="div-block-122"></div>
              <div className="order"></div>
              <div className="div-block-14 pertama black"></div>
              <div className="div-block-124 kesatu">
                <div className="div-block-145"></div>
                <div className="div-block-146"></div>
              </div>
              <div className="div-block-124 kedua">
                <div className="div-block-145"></div>
              </div>
              <div className="div-block-124 ketiga">
                <div className="div-block-145">
                  <div className="div-block-146"></div>
                </div>
              </div>
              <div className="div-block-124 keempat">
                <div className="div-block-145"></div>
              </div>
              <div className="div-block-124 kelima">
                <div className="div-block-145"></div>
              </div>
              <div className="div-block-124 keenam">
                <div className="div-block-145"></div>
              </div>
            </div>
            <div className="div-block-125">
              <div className="div-block-126">
                <h4 className="heading-62">25,000<br/>Test Cards</h4>
                <p className="paragraph-29">Ships in July</p>
              </div>
              <div className="div-block-126 second">
                <h4 className="heading-62">75,000<br/>Test Cards</h4>
                <p className="paragraph-29">Ships in August</p>
              </div>
              <div className="div-block-126 last">
                <h4 className="heading-62">150,000<br/>Test Cards</h4>
                <p className="paragraph-29">Ships in September</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-block-67">
        <div className="div-block-66 satu">
          <h3 className="heading-32">1 Test Card</h3>
          <div className="div-block-70">
            <p className="p-mem price"> <span className="strikethru blank">_</span></p>
            <div className="div-block-71">
              <h4 className="heading-37">$</h4>
              <h2 className="heading-35 amount">25<br/></h2>
            </div>
            <p className="p-mem save">$25.00 per card<br/></p>
          </div>
          <p className="p-mem ship">Free Shipping<br/></p><a href="https://store.vesselhealth.com/cart/31850274586696:1?channel=buy_button" className="dark-bt member w-button">Choose</a></div>
        <div className="div-block-66 enam">
          <h3 className="heading-32">4 Test Cards<br/></h3>
          <div className="div-block-70">
            <p className="p-mem price"> <span className="strikethru">$50</span></p>
            <div className="div-block-71">
              <h4 className="heading-37">$</h4>
              <h2 className="heading-35 amount">45<br/></h2>
            </div>
            <p className="p-mem save">$11.25 per card<br/></p>
          </div>
          <p className="p-mem ship">Free Shipping<br/></p><a href="https://store.vesselhealth.com/cart/31850275995720:1?channel=buy_button" className="dark-bt member w-button">Choose</a></div>
        <div className="div-block-66 duabelas">
          <h3 className="heading-32">10 Test Cards<br/></h3>
          <div className="div-block-70">
            <p className="p-mem price"> <span className="strikethru">$100</span></p>
            <div className="div-block-71">
              <h4 className="heading-37">$</h4>
              <h2 className="heading-35 amount">90<br/></h2>
            </div>
            <p className="p-mem save">$9.00 per card<br/></p>
          </div>
          <p className="p-mem ship">Free Shipping<br/></p><a href="https://store.vesselhealth.com/cart/31850282451016:1?channel=buy_button" className="dark-bt member w-button">Choose</a></div>
      </div>
    </div>
  </div>
  <div className="section-4">
    <div className="container-28 w-container">
      <div className="div-block-65 bottom">
        <div className="div-block-72">
          <h2 className="heading">Our pre-order<br/>promise to you<br/></h2>
        </div>
        <div className="div-block-115">
          <p className="paragraph test-card-timeline">We promise to keep you well informed throughout the pre-order process. All pre-order customers get an email and phone number to contact us anytime.<br/></p>
        </div>
      </div>
    </div>
    <div className="footer-content">
      <div className="container-10 w-container">
        <div className="div-block-36"><img src="images/white-logo.png" height="40" alt="" className="image-11"/></div>
        <div className="div-block-35">
          <div className="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span className="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="footer-link">Help Center</a></div>
        <div className="div-block-35"><a href="index.html" className="footer-link">Wellness Test Card</a><a href="coronavirus.html" className="footer-link">Coronavirus Test Card</a><a href="about.html" className="footer-link">About</a><a href="careers.html" className="footer-link">Careers</a><a data-w-id="29e0c7c7-8219-87fb-f109-071890567bbf" href="#" className="footer-link">Partner</a><a data-w-id="29e0c7c7-8219-87fb-f109-071890567bc1" href="#" className="footer-link">Press</a></div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div><a href="privacy-policy.html" className="footer-link notice">Privacy Policy</a><a href="terms-of-service.html" className="footer-link notice">Terms of Service</a>
          <div className="footer-text notice patent">Patent Pending</div>
          <div className="footer-text notice disclaimer">* This product is not intended for use in diagnosing diseases or other conditions;  determining state of health;  or curing, mitigating, treating, or preventing disease.  Designed by Vessel in California.</div>
        </div>
      </div>
      <div className="cookies-bar">
        <div className="w-container">
          <div className="cookies-notice">
            <p className="paragraph-28 cookies">This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. <a href="privacy-policy.html">Learn more</a></p><a data-w-id="05ffb679-b0af-bac0-0223-ac07643b6b05" href="#" className="dark-bt cookies w-button">Got it</a></div>
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
          <h1 className="heading popup">For partnership inquiries<br/></h1>
          <h3 className="heading-61 email-click"><a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" className="link-14">partner@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
    <div className="pop-sec">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21b" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21d" className="close pop"><img src="images/close.png" alt=""/></div>
        <div className="div-block-53 pop">
          <h1 className="heading popup">Join the waitlist<br/></h1>
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
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
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
          <h1 className="heading popup">For press inquiries<br/></h1>
          <h3 className="heading-61 email-click"><a href="mailto:press@vesselhealth.com?subject=Vessel%20Health%20press%20inquiry" className="link-13">press@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
  </div>
  </Layout>
	)
	}
}
export default coronaPage