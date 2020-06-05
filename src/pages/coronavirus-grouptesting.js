import React, { Component} from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import seo_image from "../images/coronavirus-grouptesting-og.jpg"
import Logo from "../images/Logo.png"
import close_Icon from "../images/close-Icon.png"
import Group_ from "../images/Group-7.png"
import quote from "../images/quote.png"
import drbrownstein from "../images/drbrownstein.png"
import unvi from "../images/unvi.png"
import covid_business_top from "../images/covid_business_top.png"
import covid_business_tc from "../images/covid-tests-rework.jpg"
import harv_ethic from "../images/harv-ethic.jpg"
import covbiz_how_1 from "../images/covbiz-how_1.jpg"
import covbiz_how_2 from "../images/covbiz-how_2.jpg"
import covbiz_how_3 from "../images/covbiz-how_3.jpeg"
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
      window.setTimeout(function(){ window.requestAnimationFrame(step); }, 10000);
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
    //window.setTimeout(function(){ 
    //  document.getElementById("company-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Entity Name";
    //  document.getElementById("firstname-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Your Name";
    //  document.getElementById("job_function-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Your Role/Title";
    //  document.getElementById("email-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Email";
    //  document.getElementById("phone-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Phone";
    //  document.getElementById("partner_request_form-dabff0c2-494a-44b3-8330-1928f55fbe16").placeholder = "Anything else we should know?";
    //  document.getElementById('entity_name-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='I represent a';
    //  document.getElementById('country-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML = 'Location';
    //  document.getElementById('test_type-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML = 'Test type';
    //  document.getElementById('number_of_tests_needed-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='Number of tests needed';
    //  document.getElementById('fulfillment_preference-dabff0c2-494a-44b3-8330-1928f55fbe16').firstChild.innerHTML ='Fulfillment type';
    //  document.getElementById('referral_source-dabff0c2-494a-44b3-8330-1928f55fbe16').placeholder ='How did you hear about us?';
    //}, 1000);  
    //document.getElementById('contact_form').addEventListener('DOMNodeInserted', OnNodeInserted, false);
    //function OnNodeInserted () {
    //  if (document.getElementById("contact_form").querySelectorAll(".submitted-message").length > 0) 
    //    {
    //  document.getElementsByClassName('sub-thank')[0].classList.add('submited');
    //    }
  //}
  }
	render() {
	return (
    <>
    <Helmet>
    <script src={withPrefix('contact.js')} type="text/javascript" />
    </Helmet>
	<Layout>
    <SEO title="COVID-19 Antibody Testing for Groups, Businesses, Cities, and States - Vessel Health" description="Reduce the risk of reopening businesses with safe and accurate COVID-19 antibody testing for Groups, Businesses, Cities, and States" image={seo_image}/>
	<div className="main-section covid">
    <div className="top covid business"><img src={covid_business_top} alt="" className="image mobile"/>
      <div className="container-8 top w-container">
        <div className="div-block-2">
          <div className="div-block-3 covid19">
            <div className="word-change covid19">
              <h1 className="heading covid19 business main">COVID-19 Antibody Testing for Your Entire</h1>
              <div className="text-wrap group-covid">
                <div className="text-change-1 heading">Business</div>
                <div className="text-change-2 heading">School</div>
                <div className="text-change-3 heading">City</div>
                <div className="text-change-4 heading">State</div>
                <div className="text-change-5 heading covbiz">Agency</div>
              </div>
            </div>
            <p className="paragraph main covid">We have enough tests for your entire group, and will help you implement testing protocols along with drive-through or on-site testing facilities.</p>
            <button onClick={() => scrollTo('#contact-us')} className="dark-bt main-section-bt w-button">Contact Us</button>
            <p className="paragraph main disclaimer">Looking for <a href="/coronavirus">individual tests?</a></p>
          </div>
        </div>
      </div>
      <div className="div-block"><img src={covid_business_top} alt="" className="image covid business"/></div>
    </div>
    <div className="overview how-antibody business">
      <div className="container-14 covid business top-one w-container">
        <div className="div-block-79 ab-test covid business">
          <h2 className="heading covid19 business second">What’s Measured with Antibody Testing</h2>
        </div>
        <div className="div-block-79 ab-test covid business right image"><img src={covid_business_tc} alt="" className="image-20 how-anti covid"/></div>
      </div>
      <div className="container-14 covid business bottom w-container">
        <div className="div-block-79 ab-test covid business import">
        <p className="paragraph covbiz">Antibody tests, also called serological tests, help to measure current or past infection rates of COVID-19, and can be administered to large groups of people such as businesses, schools, and cities to indicate the total number of cases within the group or geographic area.&nbsp;<br/>&zwj;<br/>When administered in accordance with proper protocols, antibody tests may be paired with RT-PCR tests and physician evaluations to help with early COVID-19 detection, which can assist in reopening state and local economies.&nbsp;&nbsp;<br/>&zwj;<br/>Individuals who have been exposed to, and recovered from, COVID-19 will likely have antibodies to the SARS-CoV-2 virus in their blood, which may reduce their risk of exposure when returning to work.</p>
        </div>
        <div className="div-block-79 ab-test covid business right">
        <p className="paragraph covid">Antibody tests can be administered quickly and inexpensively without lab testing, but have a higher risk of false-positive results than RT-PCR tests.&nbsp; Because of this, they are most effective when administered on a recurring cadence, and as part of a larger testing protocol.&nbsp;<br/>&zwj;<br/>In the months to come, as we reopen society and the economy, we will need to know how widespread COVID-19 infection has been in our population. Antibody tests are a cost-effective way to test many people, multiple times if needed without overburdening our healthcare heroes or risking transmission through unnecessary lab visits to generate critical data that employers and individuals can use to determine next steps.<br/></p>
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
            <h2 className="heading covbiz">The Difference Between Antibody and PCR Tests</h2>
            <p className="paragraph covbiz"><strong className="bold-text-11">Antibody tests</strong> use a small sample of blood taken with a finger prick, and results are available in ten to twenty minutes. The test looks for IgM antibodies to indicate early immune response in people recently infected, and IgG antibodies to indicate later stage immune response in those who have recovered.<br/>‍<br/><strong className="bold-text-12">PCR tests</strong> use a small sample of your DNA taken with a nasal swab, and results are typically available in 3-10 days after a laboratory analysis. The test looks for the presence of viral nucleic acids and tells if a person is currently infected with the virus. <br/></p>
            <p>It’s important to <strong className="bold-text-10">keep in mind</strong> the following:</p>
            <div className="list-limitations para">
              <p className="number covid">•</p>
              <p className="paragraph-16 paragraph covid covbiz para">Antibody tests and PCR tests are friends. They can be used together as part of a more comprehensive testing protocol.<br/></p>
            </div>
            <div className="list-limitations para">
              <p className="number covid">•</p>
              <p className="paragraph-16 paragraph covid covbiz para">PCR tests are often reserved for people currently showing symptoms.  Antibody tests can be taken by anyone.<br/></p>
            </div>
            <div className="list-limitations">
              <p className="number covid">•</p>
              <p className="paragraph-16 paragraph covid covbiz para">Neither test is 100% accurate. Accuracy increases with two or more tests, and results should always be discussed with a physician.<br/></p>
            </div>
            <button onClick={() => scrollTo('#contact-us')} className="dark-bt main-section-bt w-button">Contact Us</button>
            </div>
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
          <p className="paragraph how-it-works-col">A complete return-to-work protocol will be developed for you by our partner WorkSTEPS, based on your organization’s unique needs<br/></p>
        </div>
        <div className="works-block _3rd"><img src={covbiz_how_3} alt="" className="image-2"/>
          <h4 className="heading-23">03</h4>
          <p className="paragraph how-it-works-col">A medical team will be setup to administer the tests at your location, at nearby clinics, or at a drive-through facility</p>
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
  <div id="limitations-of-antibody-test" className="limitations covid">
    <div className="container-21 w-container">
      <div className="div-block-53 covbiz">
        <h2 className="heading lab covid">How we approach group testing for COVID-19<br/></h2>
      </div>
      <div className="div-block-92">
        <div className="div-block-93">
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz"><strong className="bold-text-13">Large quantities of test cards<br/></strong>We work closely with multiple FDA-authorized test card manufacturers to produce millions of new test cards every week, so that you can test your entire workforce or population.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz"><strong className="bold-text-15">Pricing Transparency<br/></strong>Antibody tests are less expensive than PCR tests or Saliva tests ($35 ea. vs. $150 ea.), and we are completely transparent with our pricing, charging only a small markup to cover our administrative costs.<br/></p>
          </div>
        </div>
        <div className="div-block-94">
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz"><strong className="bold-text-9">Return-to-work protocols</strong><br/>We will help you implement a custom return-to-work protocol for your unique needs that reduces risk through regular antibody testing, temperature checks, virtual screenings, telehealth, contact tracing, PPE supplies, and more.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number covid">•</p>
            <p className="paragraph-16 paragraph covid covbiz"><strong className="bold-text-14">Convenient Testing Locations<br/></strong>Working with a network of over 1,200 clinics and medical professionals in all 50 states, we’ll help you setup testing at a nearby clinic, at a testing facility on site, or at a drive-through location that enables 15 minute in-car testing.<br/></p>
          </div>
        </div>
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
            <p className="paragraph pcr right">Businesses, cities, and states can place large orders of antibody test cards. We’ll help you setup a protocol for testing, and administer tests on-site, at drive-through facilities, or at a nearby clinic.<br/></p>
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
    <Footer />
  </div>
  </Layout>
  </>
  )
	}
}

export default coronaPage