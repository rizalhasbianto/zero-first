import React, { Component} from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/Logo.png"
import close_Icon from "../images/close-Icon.png"
import white_logo from "../images/white-logo.png"
import Group_ from "../images/Group-7.png"
import quote from "../images/quote.png"
import drbrownstein from "../images/drbrownstein.png"
import unvi from "../images/unvi.png"
import covid_business_top from "../images/covid_business_top.png"
import covid_business_tc from "../images/covid_business_tc.jpg"
import harv_ethic from "../images/harv-ethic.jpg"
import covbiz_how_1 from "../images/covbiz-how_1.jpg"
import covbiz_how_2 from "../images/covbiz-how_2.jpg"
import covbiz_how_3 from "../images/covbiz-how_3.jpg"
import den_mhc from "../images/den_mhc.png"
import ri_hope from "../images/ri_hope.png"
import microsoft from "../images/microsoft.png"
import dod_us from "../images/dod_us.png"
import Icon from "../images/Icon.png"
import Icon_checkbox from "../images/Icon-checkbox.png"
import fb from "../images/fb.png"
import tw from "../images/tw.png"
import li from "../images/li.png"
import em from "../images/em.png"
import cov_biz_bot from "../images/cov-biz_bot.jpg"
import close from "../images/close.png"

class coronaPage extends Component {
  componentDidMount() {
    function step() {
      var hOne = document.getElementsByClassName("text-change-1");
      var hTwo = document.getElementsByClassName("text-change-2");  
      var hThree = document.getElementsByClassName("text-change-3");
      var hFour = document.getElementsByClassName("text-change-4");
      var hFive = document.getElementsByClassName("text-change-5");
      hOne[0].classList.add('active');
      window.setTimeout(function(){ hOne[0].classList.add('down'); }, 1000);
      window.setTimeout(function(){ hOne[0].classList.remove('down', 'active');hTwo[0].classList.add('active'); }, 2000);
      window.setTimeout(function(){ hTwo[0].classList.add('down'); }, 3000);
      window.setTimeout(function(){ hTwo[0].classList.remove('down', 'active');hThree[0].classList.add('active'); }, 4000);
      window.setTimeout(function(){ hThree[0].classList.add('down'); }, 5000);
      window.setTimeout(function(){ hThree[0].classList.remove('down', 'active');hFour[0].classList.add('active'); }, 6000);
      window.setTimeout(function(){ hFour[0].classList.add('down'); }, 7000);
      window.setTimeout(function(){ hFour[0].classList.remove('down', 'active');hFive[0].classList.add('active'); }, 8000);
      window.setTimeout(function(){ hFive[0].classList.add('down'); }, 9000);
      window.setTimeout(function(){ hFive[0].classList.remove('down', 'active'); }, 10000);
      window.setTimeout(function(){ window.requestAnimationFrame(step); }, 11000);
    }
    window.requestAnimationFrame(step);

    // Compare section 
    function handleScrollBody() {
      var scroll = window.pageYOffset;
      var winHeight = window.screen.height / 2;
      var scrollMiddle  = window.pageYOffset + winHeight;
      var posLab = document.getElementById("labpos").getBoundingClientRect().top + scroll;
      var posLabLast = document.getElementById("labposlast").getBoundingClientRect().top + scroll;
      var line = scrollMiddle - posLab;
      var lineElem = document.getElementsByClassName("line-vertical");
      if (scrollMiddle > posLab && scrollMiddle < posLabLast) {lineElem[0].style.height = line+'px';}
      var pertama = document.getElementsByClassName("pertama")[0].getBoundingClientRect().top + scroll;
      var pertamaElem = document.getElementsByClassName("_1");
      var kedua = document.getElementsByClassName("kedua")[0].getBoundingClientRect().top + scroll;
      var keduaElem = document.getElementsByClassName("_2");
      var ketiga = document.getElementsByClassName("ketiga")[0].getBoundingClientRect().top + scroll;
      var ketigaElem = document.getElementsByClassName("_3");
      var keempat = document.getElementsByClassName("keempat")[0].getBoundingClientRect().top + scroll;
      var keempatElem = document.getElementsByClassName("_4");
      var kelima = document.getElementsByClassName("kelima")[0].getBoundingClientRect().top + scroll;
      var kelimaElem = document.getElementsByClassName("_5");
      var keenam = document.getElementsByClassName("keenam")[0].getBoundingClientRect().top + scroll;
      var keenamElem = document.getElementsByClassName("_6");
      var ketujuh = document.getElementsByClassName("ketujuh")[0].getBoundingClientRect().top + scroll;
      var ketujuhElem = document.getElementsByClassName("_7");
      
      if (scrollMiddle > pertama) {pertamaElem[0].classList.add('active')}
      else {pertamaElem[0].classList.remove('active')}
      if (scrollMiddle > kedua) {keduaElem[0].classList.add('active')}
      else {keduaElem[0].classList.remove('active')}
      if (scrollMiddle > ketiga) {ketigaElem[0].classList.add('active')}
      else {ketigaElem[0].classList.remove('active')}
      if (scrollMiddle > keempat) {keempatElem[0].classList.add('active')}
      else {keempatElem[0].classList.remove('active')}
      if (scrollMiddle > kelima) {kelimaElem[0].classList.add('active')}
      else {kelimaElem[0].classList.remove('active')}
      if (scrollMiddle > keenam) {keenamElem[0].classList.add('active')}
      else {keenamElem[0].classList.remove('active')}
      if (scrollMiddle > ketujuh) {ketujuhElem[0].classList.add('active')}
      else {ketujuhElem[0].classList.remove('active')}
    }
    window.addEventListener('scroll', handleScrollBody);
    
    // CONTACT FORM
    window.setTimeout(function(){ 
      document.getElementById("company-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Entity Name";
      document.getElementById("firstname-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Your Name";
      document.getElementById("job_function-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Your Role/Title";
      document.getElementById("email-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Email";
      document.getElementById("phone-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Phone";
      document.getElementById("partner_request_form-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Anything else we should know?";
      document.getElementById('entity_name-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='I represent a';
      document.getElementById('country-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML = 'Location';
      document.getElementById('test_type-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML = 'Test type';
      document.getElementById('number_of_tests_needed-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='Number of tests needed';
      document.getElementById('fulfillment_preference-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='Fulfillment type';
    }, 1000);  
    document.getElementById('contact_form').addEventListener('DOMNodeInserted', OnNodeInserted, false);
    function OnNodeInserted () {
      if (document.getElementById("contact_form").querySelectorAll(".submitted-message").length > 0) 
        {
          alert("form submited");
      document.getElementsByClassName('sub-thank')[0].classList.add('submited');
        }
  }
  }
	render() {
	return (
    <>
    <Helmet>
    <script src={withPrefix('contact.js')} type="text/javascript" />
    </Helmet>
	<Layout>
    <SEO title="Corona Virus Group Testing" />
	<div className="main-section covid">
    <div className="top covid business"><img src={covid_business_top} alt="" className="image mobile"/>
      <div className="container-8 top w-container">
        <div className="div-block-2">
          <div className="div-block-3 covid19">
            <div className="word-change covid19">
              <h1 className="heading covid19 business main">COVID-19 Antibody Testing for Your Entire</h1>
              <div className="text-wrap">
                <div className="text-change-1 heading">Business</div>
                <div className="text-change-2 heading">School</div>
                <div className="text-change-3 heading">City</div>
                <div className="text-change-4 heading">State</div>
                <div className="text-change-5 heading covbiz">Agency</div>
              </div>
            </div>
            <p className="paragraph main covid">Together we can reduce the risk of reopening businesses with safe and accurate antibody testing, for everyone.</p><a href="#contact-us" className="dark-bt main-section-bt w-button">Contact Us</a>
            <p className="paragraph main disclaimer">Looking for <a href="coronavirus.html">individual tests?</a></p>
          </div>
        </div>
      </div>
      <div className="div-block"><img src={covid_business_top} alt="" className="image covid business"/></div>
    </div>
    <div className="overview how-antibody business">
      <div className="container-14 covid business top-one w-container">
        <div className="div-block-79 ab-test covid business">
          <h2 className="heading covid19 business second">The Importance of Testing Everyone</h2>
        </div>
        <div className="div-block-79 ab-test covid business right image"><img src={covid_business_tc} alt="" className="image-20 how-anti covid"/></div>
      </div>
      <div className="container-14 covid business bottom w-container">
        <div className="div-block-79 ab-test covid business import">
          <p className="paragraph covbiz">As many as 50 percent of people with COVID-19 aren’t aware they have the virus because they do not show symptoms or feel sick. Unfortunately, those people can still spread the virus to others who may become very sick. To safely reopen our businesses, cities, and states in a way that reduces the risk of further spreading the coronavirus, proper tests and protocols are critical. According to the FDA, high-quality antibody tests (a type of serological test) can help us understand a person’s and population’s exposure to COVID-19. A person who has been exposed to, and recovered from, COVID-19 will likely have antibodies to the SARS-CoV-2 virus in their blood, which may reduce their risk of exposure when returning to work.</p>
        </div>
        <div className="div-block-79 ab-test covid business right">
          <p className="paragraph covid">Since testing capacity is often limited by the number of labs and doctors available to perform tests, and the length of time it takes to run each test, we have been working closely with the FDA on an at-home antibody testing solution that may become an integral part of broadly accepted return-to-work protocols. Antibody tests cards are cost effective and easily mass-produced in quantities large enough for entire cities. With our App (in clinical trials now) tests can be taken at home in just 15 minutes. In addition to at-home testing, we can also help you setup on-site or in-clinic testing using drive-throughs or temporary test facilities.</p>
        </div>
      </div>
      <div className="white-bg covid top"></div>
    </div>
    <div className="green-bg top covbiz"></div>
  </div>
  <div className="antibody covbiz">
    <div className="overview first">
      <div className="div-block-153">
        <div className="container-14 universal reverse w-container">
          <div className="div-block-79 scable">
            <h2 className="heading covbiz">A Scalable, Accurate, and Safe Approach</h2>
            <p className="paragraph covbiz">We are partnered with multiple FDA-approved test card manufacturers that are currently producing millions of new test cards every week. Tests can be procured for entire businesses, cities, and even states with solutions for on-site testing, in-clinic testing, and at-home testing using the Vessel App. <a href="#contact-us">Contact us</a> to get started.<br/></p>
            <p className="paragraph">Our approach to testing is designed to support established return-to-work protocols created by medical experts working closely with government task forces. In clinical trials conducted for FDA approval, serological antibody tests for COVID-19 were 95% accurate when administered twice.<br/></p><a href="#contact-us" className="dark-bt main-section-bt w-button">Contact Us</a></div>
          <div className="div-block-135 covid business">
            <div className="div-block-136"><img src={quote} alt="" className="image-33"/></div>
            <div className="div-block-131">
              <p className="paragraph drbrown">If we rely on social distancing alone, the economy will be shut down for 12 to 18 months, costing trillions of dollars. We can instead fully restart the economy by August through a program of diagnostic and serological testing</p>
              <div className="div-block-132 covbiz"><img src={harv_ethic} alt=""/>
                <div className="div-block-134"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-31 w-container">
          <div className="div-block-150">
            <div>
              <h2 className="heading-4 afford">Cost without insurance<br/></h2>
              <div className="text-block-25">$</div>
              <div className="text-block-26">35</div>
              <div className="text-block-27">+ shipping</div>
            </div>
            <div className="div-block-151">
              <div className="text-block-28">Vessel App Download<br/>Test Kit &amp; Instructions<br/>Doctor Consultation</div>
              <div className="text-block-29">$0<br/>$10<br/>$25</div>
            </div>
            <div className="div-block-152">
              <div className="text-block-28">Out of Pocket Cost<br/>Insurance </div>
              <div className="text-block-29">$35 + shipping<br/>($35)<br/></div>
            </div>
          </div>
          <div className="div-block-149">
            <div>
              <h2 className="heading-4 afford">Cost with insurance<br/></h2>
              <div className="text-block-25">$</div>
              <div className="text-block-26">0</div>
              <div className="text-block-27"><span className="text-span-10">_</span></div>
            </div>
            <div className="div-block-151">
              <div className="text-block-28">Vessel App Download<br/>Test Kit &amp; Instructions<br/>Doctor Consultation</div>
              <div className="text-block-29">$0<br/>Likely covered<br/>Likely covered</div>
            </div>
            <div className="div-block-152">
              <div className="text-block-28">Out of Pocket Cost<br/>Insurance </div>
              <div className="text-block-29">Likely covered<br/>($35)<br/></div>
            </div>
          </div>
        </div>
      </div><img src={unvi} alt="" className="image-20"/>
      <div className="white-bg covid business"></div>
      <div className="cream-bg covid business top"></div>
      <div className="rose-fpo universal"></div>
    </div>
  </div>
  <div className="works covbiz">
    <div className="container w-container">
      <div className="div-block-4">
        <h2 className="heading h-works">How To Work<br/>With Us</h2>
      </div>
      <div className="div-block-5">
        <div className="works-block _1st"><img src={covbiz_how_1} alt="" className="image-4"/>
          <h4 className="heading-23">01</h4>
          <p className="paragraph how-it-works-col"><a href="#contact-us">Contact us</a> to order COVID-19 antibody tests, and choose bulk delivery or individual delivery<br/></p>
        </div>
        <div className="works-block _2nd"><img src={covbiz_how_2} alt="" className="image-3"/>
          <h4 className="heading-23">02</h4>
          <p className="paragraph how-it-works-col">We’ll help you deploy tests on-site at your location, or at approved testing facilities, or at individual&#x27;s homes with the Vessel App<br/></p>
        </div>
        <div className="works-block _3rd"><img src={covbiz_how_3} alt="" className="image-2"/>
          <h4 className="heading-23">03</h4>
          <p className="paragraph how-it-works-col">Follow approved return-to-work protocols and regulatory-approved guidelines as appropriate</p>
        </div>
      </div>
    </div>
    <div className="container bottom w-container">
      <div className="div-block-4">
        <h2 className="heading h-works">We are Working<br/>on Solutions for:</h2>
      </div>
      <div className="div-block-154">
        <div className="div-block-155"><img src={den_mhc} alt="" className="image-38"/></div>
        <div className="div-block-155"><img src={ri_hope} alt="" className="image-38 ri"/></div>
        <div className="div-block-155"><img src={microsoft} alt="" className="image-38"/></div>
        <div className="div-block-155"><img src={dod_us} alt="" className="image-38 dod"/></div>
      </div>
    </div>
  </div>
  <div className="skip-the-lab">
    <div data-w-id="301d1548-03d5-d866-0943-324df16ca2f0" className="inorive-trap"></div>
    <div className="green-bg covid"></div>
    <div className="container-2 covid business w-container">
      <div className="div-block-53 covbiz">
        <h2 className="heading lab covid">An <span className="text-span-12">Evolving<br/>Situation</span> and<br/>Unique Solution<br/></h2>
      </div>
      <div data-w-id="301d1548-03d5-d866-0943-324df16ca2fa" className="div-block-39">
        <div className="line-vertical"></div>
        <div className="line-vertical-s-compare shadow business"></div>
        <div className="div-block-11 lab-child _1 covbiz">
          <div className="div-block-12">
            <h4 className="lab-child">July ‘16<br/></h4>
            <h2 className="heading-4 lab child cost">Hundreds <br/></h2>
            <p>Vessel is founded to make <br/>at-home lab testing convenient and affordable for everyone</p>
          </div>
          <div className="div-block-10 child">
            <div className="div-block-14 pertama pcr" id="labpos"></div>
          </div>
          <div className="div-block-13">
            <h2 className="heading-4 lab child right cost">$ 50</h2>
          </div>
        </div>
        <div className="div-block-11 lab-child _2 covbiz">
          <div className="div-block-12"></div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kedua"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">February ‘20<br/></h4>
            <p className="paragraph pcr right">COVID-19 name is chosen for disease that comes from coronavirus<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _3 covbiz">
          <div className="div-block-12">
            <h4 className="lab-child">March ‘20<br/></h4>
            <p className="paragraph pcr">WHO declares a worldwide pandemic. Vessel adapts its health app to work with antibody test cards, enabling at-home testing</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 ketiga"></div>
            </div>
          </div>
          <div className="div-block-13"></div>
        </div>
        <div className="div-block-11 lab-child _4 covbiz">
          <div className="div-block-12"></div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 keempat"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">April ‘20<br/></h4>
            <p className="paragraph pcr right">NYC begins daily in-clinic antibody testing for essential workers<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _5 covbiz">
          <div className="div-block-12">
            <h4 className="lab-child">April ‘20<br/></h4>
            <p className="paragraph pcr">Vessel starts clinical trials for at-home testing and secures additional manufacturing partners<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kelima"></div>
            </div>
          </div>
          <div className="div-block-13"></div>
        </div>
        <div className="div-block-11 lab-child _6 covbiz">
          <div className="div-block-12"></div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 keenam"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Today<br/></h4>
            <p className="paragraph pcr right">Cities, states, and businesses place large test card orders with Vessel for in-clinic use<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _7 covbiz">
          <div className="div-block-12">
            <h4 className="lab-child _2-line">In 3-4 Weeks<br/></h4>
            <p className="paragraph pcr">Expected FDA approval for at-home tests using Vessel’s App<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 ketujuh" id="labposlast"></div>
            </div>
          </div>
          <div className="div-block-13"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="limitations-of-antibody-test" className="limitations covid">
    <div className="container-21 w-container">
      <div className="div-block-92">
        <div className="div-block-93">
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz">We are actively working with the FDA on emergency approval of at-home testing.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz">We are working with major cities including Denver on Toronto to provide tests for their residents.<br/></p>
          </div>
        </div>
        <div className="div-block-94">
          <div className="div-block-101 covbiz">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz">Our manufacturing partners are developing millions of test card weekly, and we are shipping test cards for on-site or in-clinic use.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz">There are currently<span className="subs-first"> </span>people on the waitlist for home-use test cards (coming soon).  <a href="/coronavirus#join-waitlist">Join the waitlist.</a><br/></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contact-us" className="join-waitlist">
    <div className="container-29 covid w-container">
      <div className="div-block-53 covid">
        <h2 className="heading">Let’s Work Together to Reopen Businesses, Cities, and States<br/></h2>
        <img src={Icon} alt="" className="selec-bg"/><img src={Icon_checkbox} alt="" className="img-check"/>
        <div className="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" className="form-3 w-clearfix">
            <input type="email" className="text-field-3 w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Email Address" id="email-2" required=""/>
            <input type="submit" value="Join Waitlist" data-wait="Please wait..." className="dark-bt join-bt w-button"/>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <h4 className="heading-60 subs-number">Note: Due to high interest levels we can’t respond to every inquiry immediately, but we’re working around the clock and will do our best to get back to you quickly as possible.</h4>
      </div>
      <div className="div-block-139">
        <div className="html-embed-4 sub-form w-embed w-script">
        <div id="contact_form"></div>
        </div>
        <div className="sub-thank">
          <h3 className="heading-66">We have received your submission and sent it to our group-test solutions team.</h3>
          <p className="paragraph-27">While we review your information, give your networks a heads up to contact us about group tests for coronavirus.</p>
          <div className="div-block-140"><a href="http://www.facebook.com/share.php?u=https://vesselhealth.com/coronavirus-grouptesting" target="_blank" className="w-inline-block w-clearfix"><img src={fb} width="48" height="48" alt="" className="image-36"/></a><a href="https://twitter.com/intent/tweet?text=I%20just%20contacted%20Vessel%20to%20discuss%20their%20group%20testing%20solution%20for%20coronavirus%20antibodies,%20which%20can%20be%20deployed%20to%20large%20groups%20of%201,000+%20people.%20Check%20it%20out%20here%20if%20you&#x27;re%20interested%20as%20well:%20https%3A%2F%2Fwww.vesselhealth.com/coronavirus-grouptesting" target="_blank" className="w-inline-block w-clearfix"><img src={tw} width="48" height="48" alt="" className="image-36"/></a><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://vesselhealth.com/coronavirus-grouptesting" target="_blank" className="w-inline-block w-clearfix"><img src={li} width="48" height="48" alt="" className="image-36"/></a><a href="mailto:?subject=Vessel%20Health%20Coronavirus%20Group%20Testing&amp;body=I%20just%20contacted%20Vessel%20to%20discuss%20their%20group%20testing%20solution%20for%20coronavirus%20antibodies,%20which%20can%20be%20deployed%20to%20large%20groups%20of%201,000+%20people.%20Check%20it%20out%20here%20if%20you&#x27;re%20interested%20as%20well:%20https%3A%2F%2Fwww.vesselhealth.com/coronavirus-grouptesting" target="_blank" className="w-inline-block w-clearfix"><img src={em} width="48" height="48" alt="" className="image-36"/></a></div>
        </div>
      </div>
    </div>
    <div className="container-17 covid w-container">
      <div className="div-block-95 covbiz">
        <h2 className="heading-45 covbiz">Need More Information?<br/></h2>
        <p className="paragraph">We know there’s a lot to take in, and we’re here to help. Use these links for more information about <a href="coronavirus.html">coronavirus</a>, return-to-work protocols, testing accuracy, and our approach to <a href="coronavirus.html">at-home antibody testing.</a><br/></p>
      </div>
      <div className="div-block-79 ab-test covid business right bottom"><img src={cov_biz_bot} alt="" className="image-20 data-priv covbiz"/></div>
    </div>
  </div>
  <div id="data-policy" className="data-privacy covid">
    <div className="cream-bg covid business bottom"></div>
    <div className="footer-content">
      <div className="container-10 w-container">
        <div className="div-block-36"><img src={white_logo} height="40" alt="" className="image-11"/></div>
        <div className="div-block-35">
          <div className="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span className="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="footer-link">Help Center</a></div>
        <div className="div-block-35"><a href="index.html" className="footer-link">Wellness Test Card</a><a href="coronavirus.html" className="footer-link">Coronavirus Test Card</a><a href="coronavirus-grouptesting.html" aria-current="page" className="footer-link w--current">Coronavirus Group Testing</a><a href="about.html" className="footer-link">About</a><a href="https://vesselhealth.com/blog" className="footer-link">Blog</a><a href="careers.html" className="footer-link">Careers</a><a href="partner.html" className="footer-link">Partner</a><a data-w-id="29e0c7c7-8219-87fb-f109-071890567bc1" href="#" className="footer-link">Press</a></div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div><a href="privacy-policy.html" className="footer-link notice">Privacy Policy</a><a href="terms-of-service.html" className="footer-link notice">Terms of Service</a>
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
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a212" className="close pop"><img src={close} alt=""/></div>
        <div className="div-block-53 pop">
          <h2 className="heading popup">For partnership inquiries<br/></h2>
          <h3 className="heading-61 email-click"><a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" className="link-14">partner@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
    <div className="pop-sec">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21b" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21d" className="close pop"><img src={close} alt=""/></div>
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
              </div><img src={white_logo} height="32" alt="" className="image-18"/></div>
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
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a263" className="close pop"><img src={close} alt=""/></div>
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