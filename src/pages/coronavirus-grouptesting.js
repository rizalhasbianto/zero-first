import React, { Component} from "react"
import { Link } from "gatsby"
import hubspotSubmit from 'hubspot-form-submit'

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
    
  }
	render() {
	return (
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
        <div className="hbspt-form" id="hbspt-form-1589848984889-8606835577">
    <form
        novalidate=""
        accept-charset="UTF-8"
        action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/7387638/dabff0c2-494a-44b3-8330-1928f55fbe16"
        enctype="multipart/form-data"
        id="hsForm_dabff0c2-494a-44b3-8330-1928f55fbe16"
        method="POST"
        className="hs-form stacked hs-form-private hsForm_dabff0c2-494a-44b3-8330-1928f55fbe16 hs-form-dabff0c2-494a-44b3-8330-1928f55fbe16 hs-form-dabff0c2-494a-44b3-8330-1928f55fbe16_086cf31b-b080-42e1-a63b-454b7cc53a9d"
        data-form-id="dabff0c2-494a-44b3-8330-1928f55fbe16"
        data-portal-id="7387638"
        target="target_iframe_dabff0c2-494a-44b3-8330-1928f55fbe16"
        data-reactid=".hbspt-forms-0"
    >
        <div className="hs_entity_name hs-entity_name hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$0">
            <label id="label-entity_name-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your I represent a..." for="entity_name-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$0.0">
                <span data-reactid=".hbspt-forms-0.1:$0.0.0">I represent a...</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$0.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$0.$entity_name">
                <select id="entity_name-dabff0c2-494a-44b3-8330-1928f55fbe16" required="" className="hs-input invalid error" name="entity_name" data-reactid=".hbspt-forms-0.1:$0.$entity_name.0">
                    <option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$0.$entity_name.0.0">I represent a</option>
                    <option value="Business" data-reactid=".hbspt-forms-0.1:$0.$entity_name.0.1:$Business">Business</option>
                    <option value="School" data-reactid=".hbspt-forms-0.1:$0.$entity_name.0.1:$School">School</option>
                    <option value="Government" data-reactid=".hbspt-forms-0.1:$0.$entity_name.0.1:$Government">Government</option>
                </select>
            </div>
        </div>
        <div className="hs_company hs-company hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$1">
            <label id="label-company-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your Entity Name" for="company-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$1.0">
                <span data-reactid=".hbspt-forms-0.1:$1.0.0">Entity Name</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$1.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$1.$company">
                <input id="company-dabff0c2-494a-44b3-8330-1928f55fbe16" className="hs-input" type="text" name="company" required="" value="" placeholder="Entity Name" autocomplete="organization" data-reactid=".hbspt-forms-0.1:$1.$company.0" />
            </div>
        </div>
        <div className="hs_country hs-country hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$2">
            <label id="label-country-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your What country do you live in?" for="country-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$2.0">
                <span data-reactid=".hbspt-forms-0.1:$2.0.0">What country do you live in?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$2.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$2.$country">
                <select id="country-dabff0c2-494a-44b3-8330-1928f55fbe16" required="" className="hs-input invalid error" name="country" data-reactid=".hbspt-forms-0.1:$2.$country.0">
                    <option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$2.$country.0.0">Location</option>
                    <option value="" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$"></option>
                    <option value="Afghanistan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Afghanistan">Afghanistan</option>
                    <option value="Åland Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Åland Islands">Åland Islands</option>
                    <option value="Albania" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Albania">Albania</option>
                    <option value="Algeria" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Algeria">Algeria</option>
                    <option value="American Samoa" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$American Samoa">American Samoa</option>
                    <option value="Andorra" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Andorra">Andorra</option>
                    <option value="Angola" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Angola">Angola</option>
                    <option value="Anguilla" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Anguilla">Anguilla</option>
                    <option value="Antarctica" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Argentina">Argentina</option>
                    <option value="Armenia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Armenia">Armenia</option>
                    <option value="Aruba" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Aruba">Aruba</option>
                    <option value="Asia/Pacific Region" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Asia/Pacific Region">Asia/Pacific Region</option>
                    <option value="Australia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Australia">Australia</option>
                    <option value="Austria" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Austria">Austria</option>
                    <option value="Azerbaijan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bahamas">Bahamas</option>
                    <option value="Bahrain" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bahrain">Bahrain</option>
                    <option value="Bangladesh" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bangladesh">Bangladesh</option>
                    <option value="Barbados" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Barbados">Barbados</option>
                    <option value="Belarus" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Belarus">Belarus</option>
                    <option value="Belgium" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Belgium">Belgium</option>
                    <option value="Belize" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Belize">Belize</option>
                    <option value="Benin" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Benin">Benin</option>
                    <option value="Bermuda" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bermuda">Bermuda</option>
                    <option value="Bhutan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bhutan">Bhutan</option>
                    <option value="Bolivia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Botswana">Botswana</option>
                    <option value="Bouvet Island" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bouvet Island">Bouvet Island</option>
                    <option value="Brazil" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="British Virgin Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$British Virgin Islands">British Virgin Islands</option>
                    <option value="Brunei" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Brunei">Brunei</option>
                    <option value="Bulgaria" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Burkina Faso">Burkina Faso</option>
                    <option value="Burundi" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Burundi">Burundi</option>
                    <option value="Cambodia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cambodia">Cambodia</option>
                    <option value="Cameroon" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cameroon">Cameroon</option>
                    <option value="Canada" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Canada">Canada</option>
                    <option value="Cape Verde" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cape Verde">Cape Verde</option>
                    <option value="Caribbean Netherlands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Caribbean Netherlands">Caribbean Netherlands</option>
                    <option value="Cayman Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Central African Republic">Central African Republic</option>
                    <option value="Chad" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Chad">Chad</option>
                    <option value="Chile" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Chile">Chile</option>
                    <option value="China" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$China">China</option>
                    <option value="Christmas Island" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Colombia">Colombia</option>
                    <option value="Comoros" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Comoros">Comoros</option>
                    <option value="Congo" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Congo">Congo</option>
                    <option value="Cook Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cook Islands">Cook Islands</option>
                    <option value="Costa Rica" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Croatia">Croatia</option>
                    <option value="Cuba" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cuba">Cuba</option>
                    <option value="Curaçao" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Curaçao">Curaçao</option>
                    <option value="Cyprus" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Cyprus">Cyprus</option>
                    <option value="Czech Republic" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Czech Republic">Czech Republic</option>
                    <option value="Democratic Republic of the Congo" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                    <option value="Denmark" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Denmark">Denmark</option>
                    <option value="Djibouti" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Djibouti">Djibouti</option>
                    <option value="Dominica" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Dominica">Dominica</option>
                    <option value="Dominican Republic" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Dominican Republic">Dominican Republic</option>
                    <option value="East Timor" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$East Timor">East Timor</option>
                    <option value="Ecuador" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Ecuador">Ecuador</option>
                    <option value="Egypt" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Egypt">Egypt</option>
                    <option value="El Salvador" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Eritrea">Eritrea</option>
                    <option value="Estonia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Estonia">Estonia</option>
                    <option value="Ethiopia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Ethiopia">Ethiopia</option>
                    <option value="Europe" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Europe">Europe</option>
                    <option value="Falkland Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Faroe Islands">Faroe Islands</option>
                    <option value="Fiji" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Fiji">Fiji</option>
                    <option value="Finland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Finland">Finland</option>
                    <option value="France" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$France">France</option>
                    <option value="French Guiana" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$French Guiana">French Guiana</option>
                    <option value="French Polynesia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$French Polynesia">French Polynesia</option>
                    <option value="French Southern and Antarctic Lands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$French Southern and Antarctic Lands">French Southern and Antarctic Lands</option>
                    <option value="Gabon" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Gabon">Gabon</option>
                    <option value="Gambia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Gambia">Gambia</option>
                    <option value="Georgia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Georgia">Georgia</option>
                    <option value="Germany" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Germany">Germany</option>
                    <option value="Ghana" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Ghana">Ghana</option>
                    <option value="Gibraltar" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Gibraltar">Gibraltar</option>
                    <option value="Great Britain" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Great Britain">Great Britain</option>
                    <option value="Greece" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Greece">Greece</option>
                    <option value="Greenland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Greenland">Greenland</option>
                    <option value="Grenada" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Grenada">Grenada</option>
                    <option value="Guadeloupe" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guadeloupe">Guadeloupe</option>
                    <option value="Guam" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guam">Guam</option>
                    <option value="Guatemala" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guatemala">Guatemala</option>
                    <option value="Guernsey" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guernsey">Guernsey</option>
                    <option value="Guinea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guinea">Guinea</option>
                    <option value="Guinea-Bissau" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Guyana">Guyana</option>
                    <option value="Haiti" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Haiti">Haiti</option>
                    <option value="Heard Island and McDonald Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                    <option value="Honduras" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Honduras">Honduras</option>
                    <option value="Hong Kong" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Hong Kong">Hong Kong</option>
                    <option value="Hungary" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Hungary">Hungary</option>
                    <option value="Iceland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Iceland">Iceland</option>
                    <option value="India" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$India">India</option>
                    <option value="Indonesia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Indonesia">Indonesia</option>
                    <option value="Iran" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Iran">Iran</option>
                    <option value="Iraq" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Iraq">Iraq</option>
                    <option value="Ireland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Ireland">Ireland</option>
                    <option value="Isle of Man" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Isle of Man">Isle of Man</option>
                    <option value="Israel" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Israel">Israel</option>
                    <option value="Italy" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Italy">Italy</option>
                    <option value="Jamaica" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Jamaica">Jamaica</option>
                    <option value="Japan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Japan">Japan</option>
                    <option value="Jersey" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Jersey">Jersey</option>
                    <option value="Jordan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Jordan">Jordan</option>
                    <option value="Kazakhstan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Kazakhstan">Kazakhstan</option>
                    <option value="Kenya" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Kenya">Kenya</option>
                    <option value="Kiribati" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Kiribati">Kiribati</option>
                    <option value="Kuwait" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Laos">Laos</option>
                    <option value="Latvia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Latvia">Latvia</option>
                    <option value="Lebanon" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Lebanon">Lebanon</option>
                    <option value="Lesotho" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Lesotho">Lesotho</option>
                    <option value="Liberia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Liberia">Liberia</option>
                    <option value="Libya" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Libya">Libya</option>
                    <option value="Liechtenstein" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Lithuania">Lithuania</option>
                    <option value="Luxembourg" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Luxembourg">Luxembourg</option>
                    <option value="Macau" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Macau">Macau</option>
                    <option value="Macedonia (FYROM)" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Macedonia (FYROM)">Macedonia (FYROM)</option>
                    <option value="Madagascar" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Madagascar">Madagascar</option>
                    <option value="Malawi" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Malawi">Malawi</option>
                    <option value="Malaysia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Malaysia">Malaysia</option>
                    <option value="Maldives" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Maldives">Maldives</option>
                    <option value="Mali" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mali">Mali</option>
                    <option value="Malta" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Malta">Malta</option>
                    <option value="Marshall Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Marshall Islands">Marshall Islands</option>
                    <option value="Martinique" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Martinique">Martinique</option>
                    <option value="Mauritania" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mauritania">Mauritania</option>
                    <option value="Mauritius" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mauritius">Mauritius</option>
                    <option value="Mayotte" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mayotte">Mayotte</option>
                    <option value="Mexico" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mexico">Mexico</option>
                    <option value="Micronesia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Micronesia">Micronesia</option>
                    <option value="Moldova" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Moldova">Moldova</option>
                    <option value="Monaco" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Monaco">Monaco</option>
                    <option value="Mongolia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mongolia">Mongolia</option>
                    <option value="Montenegro" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Montenegro">Montenegro</option>
                    <option value="Montserrat" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Montserrat">Montserrat</option>
                    <option value="Morocco" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Morocco">Morocco</option>
                    <option value="Mozambique" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Mozambique">Mozambique</option>
                    <option value="Myanmar (Burma)" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Myanmar (Burma)">Myanmar (Burma)</option>
                    <option value="Namibia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Namibia">Namibia</option>
                    <option value="Nauru" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Nauru">Nauru</option>
                    <option value="Nepal" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Nepal">Nepal</option>
                    <option value="Netherlands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$New Caledonia">New Caledonia</option>
                    <option value="New Zealand" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$New Zealand">New Zealand</option>
                    <option value="Nicaragua" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Nicaragua">Nicaragua</option>
                    <option value="Niger" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Niger">Niger</option>
                    <option value="Nigeria" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Nigeria">Nigeria</option>
                    <option value="Niue" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Niue">Niue</option>
                    <option value="Norfolk Island" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Norfolk Island">Norfolk Island</option>
                    <option value="North Korea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$North Korea">North Korea</option>
                    <option value="Northern Mariana Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="Norway" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Norway">Norway</option>
                    <option value="Oman" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Oman">Oman</option>
                    <option value="Pakistan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Pakistan">Pakistan</option>
                    <option value="Palau" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Palau">Palau</option>
                    <option value="Palestine" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Palestine">Palestine</option>
                    <option value="Panama" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Panama">Panama</option>
                    <option value="Papua New Guinea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Paraguay">Paraguay</option>
                    <option value="Peru" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Peru">Peru</option>
                    <option value="Philippines" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Philippines">Philippines</option>
                    <option value="Pitcairn Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Pitcairn Islands">Pitcairn Islands</option>
                    <option value="Poland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Poland">Poland</option>
                    <option value="Portugal" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Portugal">Portugal</option>
                    <option value="Puerto Rico" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Puerto Rico">Puerto Rico</option>
                    <option value="Qatar" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Qatar">Qatar</option>
                    <option value="Réunion" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Réunion">Réunion</option>
                    <option value="Romania" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Romania">Romania</option>
                    <option value="Russia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Russia">Russia</option>
                    <option value="Rwanda" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Rwanda">Rwanda</option>
                    <option value="Saint Barthélemy" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Barthélemy">Saint Barthélemy</option>
                    <option value="Saint Helena" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Martin">Saint Martin</option>
                    <option value="Saint Pierre and Miquelon" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                    <option value="Saint Vincent and the Grenadines" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Samoa">Samoa</option>
                    <option value="San Marino" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$San Marino">San Marino</option>
                    <option value="Sao Tome and Principe" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Senegal">Senegal</option>
                    <option value="Serbia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Serbia">Serbia</option>
                    <option value="Seychelles" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Seychelles">Seychelles</option>
                    <option value="Sierra Leone" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sierra Leone">Sierra Leone</option>
                    <option value="Singapore" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Singapore">Singapore</option>
                    <option value="Sint Maarten" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sint Maarten">Sint Maarten</option>
                    <option value="Slovakia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Slovakia">Slovakia</option>
                    <option value="Slovenia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Slovenia">Slovenia</option>
                    <option value="Solomon Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Solomon Islands">Solomon Islands</option>
                    <option value="Somalia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Somalia">Somalia</option>
                    <option value="South Africa" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                    <option value="South Korea" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$South Korea">South Korea</option>
                    <option value="South Sudan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$South Sudan">South Sudan</option>
                    <option value="Spain" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Spain">Spain</option>
                    <option value="Sri Lanka" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sri Lanka">Sri Lanka</option>
                    <option value="Sudan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sudan">Sudan</option>
                    <option value="Suriname" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option value="Swaziland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Swaziland">Swaziland</option>
                    <option value="Sweden" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Sweden">Sweden</option>
                    <option value="Switzerland" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Switzerland">Switzerland</option>
                    <option value="Syria" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Syria">Syria</option>
                    <option value="Taiwan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Taiwan">Taiwan</option>
                    <option value="Tajikistan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tajikistan">Tajikistan</option>
                    <option value="Tanzania" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tanzania">Tanzania</option>
                    <option value="Thailand" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Thailand">Thailand</option>
                    <option value="Togo" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Togo">Togo</option>
                    <option value="Tokelau" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tokelau">Tokelau</option>
                    <option value="Tonga" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tonga">Tonga</option>
                    <option value="Trinidad and Tobago" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tunisia">Tunisia</option>
                    <option value="Turkey" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Turkey">Turkey</option>
                    <option value="Turkmenistan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Turks and Caicos Islands">Turks and Caicos Islands</option>
                    <option value="Tuvalu" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Tuvalu">Tuvalu</option>
                    <option value="U.S. Virgin Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$U=1S=1 Virgin Islands">U.S. Virgin Islands</option>
                    <option value="Uganda" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Uganda">Uganda</option>
                    <option value="Ukraine" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Ukraine">Ukraine</option>
                    <option value="United Arab Emirates" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$United Kingdom">United Kingdom</option>
                    <option value="United States" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$United States">United States</option>
                    <option value="United States Minor Outlying Islands" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                    <option value="Uruguay" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Uruguay">Uruguay</option>
                    <option value="Uzbekistan" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Vanuatu">Vanuatu</option>
                    <option value="Vatican City" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Vatican City">Vatican City</option>
                    <option value="Venezuela" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Venezuela">Venezuela</option>
                    <option value="Vietnam" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Vietnam">Vietnam</option>
                    <option value="Wallis and Futuna" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Western Sahara">Western Sahara</option>
                    <option value="Yemen" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Yemen">Yemen</option>
                    <option value="Zambia" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Zambia">Zambia</option>
                    <option value="Zimbabwe" data-reactid=".hbspt-forms-0.1:$2.$country.0.1:$Zimbabwe">Zimbabwe</option>
                </select>
            </div>
        </div>
        <div className="hs_number_of_tests_needed hs-number_of_tests_needed hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$3">
            <label
                id="label-number_of_tests_needed-dabff0c2-494a-44b3-8330-1928f55fbe16"
                className=""
                placeholder="Enter your What number of tests do you need?"
                for="number_of_tests_needed-dabff0c2-494a-44b3-8330-1928f55fbe16"
                data-reactid=".hbspt-forms-0.1:$3.0"
            >
                <span data-reactid=".hbspt-forms-0.1:$3.0.0">What number of tests do you need?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$3.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed">
                <select id="number_of_tests_needed-dabff0c2-494a-44b3-8330-1928f55fbe16" required="" className="hs-input" name="number_of_tests_needed" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0">
                    <option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0.0">Number of tests needed</option>
                    <option value="500k+" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0.1:$500k+">500k+</option>
                    <option value="100,000 - 500,000" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0.1:$100,000 - 500,000">100,000 - 500,000</option>
                    <option value="10,000 - 100,000" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0.1:$10,000 - 100,000">10,000 - 100,000</option>
                    <option value="1,000 - 10,000" data-reactid=".hbspt-forms-0.1:$3.$number_of_tests_needed.0.1:$1,000 - 10,000">1,000 - 10,000</option>
                </select>
            </div>
        </div>
        <div className="hs_test_type hs-test_type hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$4">
            <label id="label-test_type-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your What test type do you need?" for="test_type-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$4.0">
                <span data-reactid=".hbspt-forms-0.1:$4.0.0">What test type do you need?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$4.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$4.$test_type">
                <select id="test_type-dabff0c2-494a-44b3-8330-1928f55fbe16" required="" className="hs-input" name="test_type" data-reactid=".hbspt-forms-0.1:$4.$test_type.0">
                    <option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$4.$test_type.0.0">Test type</option>
                    <option value="Serology" data-reactid=".hbspt-forms-0.1:$4.$test_type.0.1:$Serology">On-site tests</option>
                    <option value="In-clinic tests" data-reactid=".hbspt-forms-0.1:$4.$test_type.0.1:$In-clinic tests">In-clinic tests</option>
                    <option value="At-home tests" data-reactid=".hbspt-forms-0.1:$4.$test_type.0.1:$At-home tests">At-home tests</option>
                    <option value="Not sure" data-reactid=".hbspt-forms-0.1:$4.$test_type.0.1:$Not sure">Not sure</option>
                </select>
            </div>
        </div>
        <div className="hs_fulfillment_preference hs-fulfillment_preference hs-fieldtype-select field hs-form-field" data-reactid=".hbspt-forms-0.1:$5">
            <label
                id="label-fulfillment_preference-dabff0c2-494a-44b3-8330-1928f55fbe16"
                className=""
                placeholder="Enter your Select your fulfillment preference"
                for="fulfillment_preference-dabff0c2-494a-44b3-8330-1928f55fbe16"
                data-reactid=".hbspt-forms-0.1:$5.0"
            >
                <span data-reactid=".hbspt-forms-0.1:$5.0.0">Select your fulfillment preference</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$5.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$5.$fulfillment_preference">
                <select id="fulfillment_preference-dabff0c2-494a-44b3-8330-1928f55fbe16" required="" className="hs-input" name="fulfillment_preference" data-reactid=".hbspt-forms-0.1:$5.$fulfillment_preference.0">
                    <option value="" disabled="" selected="" data-reactid=".hbspt-forms-0.1:$5.$fulfillment_preference.0.0">Fulfillment type</option>
                    <option value="Shipping" data-reactid=".hbspt-forms-0.1:$5.$fulfillment_preference.0.1:$Shipping">Send to Each Individual</option>
                    <option value="Send in Bulk" data-reactid=".hbspt-forms-0.1:$5.$fulfillment_preference.0.1:$Send in Bulk">Send in Bulk</option>
                </select>
            </div>
        </div>
        <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$6">
            <label id="label-firstname-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your Your name" for="firstname-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$6.0">
                <span data-reactid=".hbspt-forms-0.1:$6.0.0">Your name</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$6.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$6.$firstname">
                <input
                    id="firstname-dabff0c2-494a-44b3-8330-1928f55fbe16"
                    className="hs-input"
                    type="text"
                    name="firstname"
                    required=""
                    value=""
                    placeholder="Your Name"
                    autocomplete="given-name"
                    data-reactid=".hbspt-forms-0.1:$6.$firstname.0"
                />
            </div>
        </div>
        <div className="hs_job_function hs-job_function hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$7">
            <label id="label-job_function-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your Your role" for="job_function-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$7.0">
                <span data-reactid=".hbspt-forms-0.1:$7.0.0">Your role</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$7.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$7.$job_function">
                <input id="job_function-dabff0c2-494a-44b3-8330-1928f55fbe16" className="hs-input" type="text" name="job_function" required="" value="" placeholder="Your Role/Title" data-reactid=".hbspt-forms-0.1:$7.$job_function.0" />
            </div>
        </div>
        <div className="hs_email hs-email hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$8">
            <label id="label-email-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your Email" for="email-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$8.0">
                <span data-reactid=".hbspt-forms-0.1:$8.0.0">Email</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$8.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$8.$email">
                <input id="email-dabff0c2-494a-44b3-8330-1928f55fbe16" className="hs-input" type="email" name="email" required="" placeholder="Email" value="" autocomplete="email" data-reactid=".hbspt-forms-0.1:$8.$email.0" />
            </div>
        </div>
        <div className="hs_phone hs-phone hs-fieldtype-text field hs-form-field" data-reactid=".hbspt-forms-0.1:$9">
            <label id="label-phone-dabff0c2-494a-44b3-8330-1928f55fbe16" className="" placeholder="Enter your What is your phone number?" for="phone-dabff0c2-494a-44b3-8330-1928f55fbe16" data-reactid=".hbspt-forms-0.1:$9.0">
                <span data-reactid=".hbspt-forms-0.1:$9.0.0">What is your phone number?</span><span className="hs-form-required" data-reactid=".hbspt-forms-0.1:$9.0.1">*</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$9.$phone">
                <input id="phone-dabff0c2-494a-44b3-8330-1928f55fbe16" className="hs-input" type="tel" name="phone" required="" value="" placeholder="Phone" autocomplete="tel" data-reactid=".hbspt-forms-0.1:$9.$phone.0" />
            </div>
        </div>
        <div className="hs_partner_request_form hs-partner_request_form hs-fieldtype-textarea field hs-form-field" data-reactid=".hbspt-forms-0.1:$10">
            <label
                id="label-partner_request_form-dabff0c2-494a-44b3-8330-1928f55fbe16"
                className=""
                placeholder="Enter your Write if we need to know something else"
                for="partner_request_form-dabff0c2-494a-44b3-8330-1928f55fbe16"
                data-reactid=".hbspt-forms-0.1:$10.0"
            >
                <span data-reactid=".hbspt-forms-0.1:$10.0.0">Write if we need to know something else</span>
            </label>
            <div className="input" data-reactid=".hbspt-forms-0.1:$10.$partner_request_form">
                <textarea
                    id="partner_request_form-dabff0c2-494a-44b3-8330-1928f55fbe16"
                    className="hs-input"
                    name="partner_request_form"
                    placeholder="Anything else we should know?"
                    data-reactid=".hbspt-forms-0.1:$10.$partner_request_form.0"
                ></textarea>
            </div>
        </div>
        <div
            className="hs_by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_ hs-by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_ hs-fieldtype-booleancheckbox field hs-form-field"
            data-reactid=".hbspt-forms-0.1:$11"
        >
            <div className="input" data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_">
                <ul className="inputs-list" data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_.0">
                    <li className="hs-form-booleancheckbox" data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_.0.0">
                        <label
                            for="by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_-dabff0c2-494a-44b3-8330-1928f55fbe16"
                            className="hs-form-booleancheckbox-display"
                            data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_.0.0.0"
                        >
                            <input
                                id="by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_-dabff0c2-494a-44b3-8330-1928f55fbe16"
                                className="hs-input"
                                type="checkbox"
                                name="by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_"
                                value="true"
                                checked=""
                                data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_.0.0.0.0"
                            />
                            <span data-reactid=".hbspt-forms-0.1:$11.$by_submitting_this_form_you_agree_to_our_terms_of_service_and_privacy_policy_.0.0.0.1">
                                By submitting this form you agree to our <span ><a href="https://vesselhealth.com/terms-of-service.html" rel=" noopener">terms of service</a></span> and
                                <span ><a href="https://vesselhealth.com/privacy-policy.html" rel=" noopener">privacy policy</a></span>.
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </form>
</div>
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
	)
	}
}

export default coronaPage