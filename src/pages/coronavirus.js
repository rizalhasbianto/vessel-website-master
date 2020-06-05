import React, { Component} from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Slider from "react-slick";
import $ from 'jquery'
import jQuery from 'jquery'
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import seo_image from "../images/covidtesting-og.jpg"
import close from "../images/close.png"
import white_logo from "../images/white-logo.png"
import Group_7 from "../images/Group-7.png"
import quote from "../images/quote.png"
import drbrownstein from "../images/drbrownstein.png"
import unvi from "../images/unvi.png"
import step1 from "../images/step1.png"
import appstore_bt from "../images/appstore-bt.png"
import playstore_bt from "../images/playstore-bt.png"
import step2 from "../images/step2.png"
import step3 from "../images/step3.png"
import step4 from "../images/step4.png"
import step5 from "../images/step5.png"
import step6 from "../images/step6.png"
import step7 from "../images/step7.png"
import step8 from "../images/step8.png"
import bene_1 from "../images/bene1.png"
import benefits from "../images/benefits2.png"
import bene_03 from "../images/bene03.png"
import Image_2 from "../images/Image_2.png"
import appstore from "../images/appstore.png"
import googleplay from "../images/googleplay.png"
import test_kit from "../images/test-kit.png"
import how_anti from "../images/how-anti.jpg"
import anti_ from "../images/anti_1.png"
import igm from "../images/igm.png"
import igg from "../images/igg.png"
import result_igm from "../images/result-igm.png"
import result_both from "../images/result-both.png"
import result_igg from "../images/result-igg.png"
import result_neg from "../images/result-neg.png"
import invalid from "../images/invalid.png"
import data_priv from "../images/data-priv.png"
import cards from "../images/2cards.png"
import _Ryan_Dranginis from "../images/4-Ryan-Dranginis.jpg"
import _Jesus_Gonzalez from "../images/3-Jesus-Gonzalez.jpg"
import _Matt_McCord from "../images/2-Matt-McCord.jpg"
import _Jon_Carder from "../images/1_Jon-Carder.jpg"
import _Blake_Jendrusch from "../images/43-Blake-Jendrusch.jpg"
import _Jeremy_Schumann from "../images/42-Jeremy-Schumann.jpeg"
import _Jordan_Ames from "../images/41-Jordan-Ames.jpg"
import _Ghaleb_Hamdan from "../images/39-Ghaleb-Hamdan.jpg"
import _Eric_Ostrowski from "../images/38-Eric-Ostrowski.jpg"
import _Anand_Bhatt from "../images/36-Anand-Bhatt.jpg"
import _Pete_Janda from "../images/35-Pete-Janda.jpg"
import _Adam_Eidelson from "../images/34-Adam-Eidelson.jpg"
import _Jonathan_Balleras from "../images/33-Jonathan-Balleras.jpg"
import _Eric_Weiss from "../images/32-Eric-Weiss.jpg"
import _Mark_Tholking from "../images/31-Mark-Tholking.jpg"
import _Ryan_Wojciechowski from "../images/30-Ryan-Wojciechowski.jpg"
import _Kevin_Martignetti from "../images/29-Kevin-Martignetti.jpg"
import _Peter_Haist from "../images/28-Peter-Haist.jpg"
import _Andrea_Giralt from "../images/27-Andrea-Giralt.jpg"
import _Paul_Williams from "../images/26-Paul-Williams.jpg"
import _Meredith from "../images/25-Meredith.jpg"
import _Dr_Lane from "../images/24-Dr.-Lane.jpg"
import _Dr_Sam_Niedbala from "../images/23-Dr.-Sam-Niedbala.jpg"
import _mona_update from "../images/22-mona-update.png"
import _Dr_Sameer_Berry from "../images/21-Dr.-Sameer-Berry.jpg"
import _mike from "../images/20-mike.png"
import _larson from "../images/19-larson.png"
import _paula from "../images/18-paula.png"
import _Dr_Robert_Buechel from "../images/17-Dr.-Robert-Buechel.jpg"
import _James_Bausano from "../images/16-James-Bausano.jpg"
import _John_Norris from "../images/15-John-Norris.jpg"
import _Trish_Pavlecich from "../images/14-Trish-Pavlecich.jpg"
import _Lee_O_Donovan from "../images/13-Lee-O_Donovan.jpg"
import _Kristen_Hlozek from "../images/12-Kristen-Hlozek.jpg"
import _Matty_Vee from "../images/11-Matty-Vee.jpg"
import _Dan_Riley from "../images/10-Dan-Riley.jpg"
import _Bucky_Markus from "../images/9-Bucky-Markus.jpg"
import _Andrew_Beinbrink from "../images/8-Andrew-Beinbrink.jpg"
import _Christian_Chasmer from "../images/7-Christian-Chasmer.jpg"
import _Kyle_Brown from "../images/6-Kyle-Brown.jpg"
import _Doug_Lorenzen from "../images/5-Doug-Lorenzen.jpg"
import _Chris_Hoffman from "../images/44_chris-hoffman.jpg"
import prev from "../images/prev.png"
import next from "../images/next.png"
import Icon from "../images/Icon.png"
import Icon_checkbox from "../images/Icon-checkbox.png"
import fb from "../images/fb.png"
import tw from "../images/tw.png"
import li from "../images/li.png"
import em from "../images/em.png"
import expand from "../images/expand.png"

class coronaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      nav4: null,
      nav5: null,
      nav6: null
    };
  }
  componentDidMount() {
    var learnContent = document.getElementsByClassName("learn");
      var foodContent = document.getElementsByClassName("food");
      var supContent = document.getElementsByClassName("sup");
      var lifeContent = document.getElementsByClassName("life");
      var planContent = document.getElementsByClassName("plan");
      var improveContent = document.getElementsByClassName("improve");
      var stepEightContent = document.getElementsByClassName("step-8");
    function handleScrollBody() {
      // tour section
      var scan = document.getElementsByClassName("scan");
      var container = document.getElementsByClassName("container-6");
      var scanHeight = scan[0].offsetHeight;
      container[0].style.height = scanHeight+"px";
      var scroll = window.pageYOffset;
      var learnE = document.getElementById("step2");
      if (learnE !== null && learnE !== undefined ) {
      var learn = document.getElementById("step2").getBoundingClientRect().top + scroll;
      var food = document.getElementById("step3").getBoundingClientRect().top + scroll;
      var sup = document.getElementById("step4").getBoundingClientRect().top + scroll;
      var life = document.getElementById("step5").getBoundingClientRect().top + scroll;
      var plan = document.getElementById("step6").getBoundingClientRect().top + scroll;
      var improve = document.getElementById("step7").getBoundingClientRect().top + scroll;
      var stepEight = document.getElementById("step8").getBoundingClientRect().top + scroll;
      if (scroll >= Math.floor(learn)) { learnContent[0].style.display = "block";}
      else {learnContent[0].style.display = "none";}
      if (scroll >= Math.floor(food)) { foodContent[0].style.display = "block";}
      else {foodContent[0].style.display = "none";}
      if (scroll >= Math.floor(sup)) { supContent[0].style.display = "block";}
      else {supContent[0].style.display = "none";}
      if (scroll >= Math.floor(life)) { lifeContent[0].style.display = "block";}
      else {lifeContent[0].style.display = "none";}
      if (scroll >= Math.floor(plan)) { planContent[0].style.display = "block";}
      else {planContent[0].style.display = "none";}
      if (scroll >= Math.floor(improve)) { improveContent[0].style.display = "block";}
      else {improveContent[0].style.display = "none";}
      if (scroll >= Math.floor(stepEight)) { stepEightContent[0].style.display = "block";}
      else {stepEightContent[0].style.display = "none";}

      // Compare Section
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
      var kedelapan = document.getElementsByClassName("kedelapan")[0].getBoundingClientRect().top + scroll;
      var kedelapanElem = document.getElementsByClassName("_8");
      var kesembilan = document.getElementsByClassName("kesembilan")[0].getBoundingClientRect().top + scroll;
      var kesembilanElem = document.getElementsByClassName("_9");
      var kesepuluh = document.getElementsByClassName("kesepuluh")[0].getBoundingClientRect().top + scroll;
      var kesepuluhElem = document.getElementsByClassName("_10");
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
      if (scrollMiddle > kedelapan) {kedelapanElem[0].classList.add('active')}
      else {kedelapanElem[0].classList.remove('active')}
      if (scrollMiddle > kesembilan) {kesembilanElem[0].classList.add('active')}
      else {kesembilanElem[0].classList.remove('active')}
      if (scrollMiddle > kesepuluh) {kesepuluhElem[0].classList.add('active')}
      else {kesepuluhElem[0].classList.remove('active')}
      }
      }
    window.addEventListener('scroll', handleScrollBody);
    // Tab function
    var btnContainer = document.getElementById("tabmenu");
    var contentContainer = document.getElementById("tabcontent");
    var btns = btnContainer.getElementsByClassName("w-tab-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(e) {
        e.preventDefault()
        var current = btnContainer.getElementsByClassName("w--current");
        current[0].className = current[0].className.replace(" w--current", "");
        this.className += " w--current";
        var tabName = this.getAttribute("data-w-tab");
        var currentTab = contentContainer.getElementsByClassName("w--tab-active");
        currentTab[0].className = currentTab[0].className.replace(" w--tab-active", "");
        var tabContentCl = contentContainer.getElementsByClassName(tabName) ;
        tabContentCl[0].className += " w--tab-active";
      });
    }

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
    // slick
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      nav3: this.slider3,
      nav4: this.slider4,
      nav5: this.slider5,
      nav6: this.slider6
    });
    function nextFunction() {
      var why = document.getElementsByClassName("why-vessel");
      var next = why[0].getElementsByClassName("slick-prev");
      var i;
        for (i = 0; i < next.length; i++) {
          next[i].click();
        }
    }
    function prevFunction() {
      var why = document.getElementsByClassName("why-vessel");
      var next = why[0].getElementsByClassName("slick-next");
      var i;
        for (i = 0; i < next.length; i++) {
          next[i].click();
        }
    }
    var nextElem = document.getElementById("next");
    var prevElem = document.getElementById("prev");
    nextElem.addEventListener("click", nextFunction);
    prevElem.addEventListener("click", prevFunction);

    // Result slide next prev
    function nextFunctionResult() {
      var why = document.getElementsByClassName("result");
      var next = why[0].getElementsByClassName("slick-prev");
      var i;
        for (i = 0; i < next.length; i++) {
          next[i].click();
        }
    }
    function prevFunctionResult() {
      var why = document.getElementsByClassName("result");
      var next = why[0].getElementsByClassName("slick-next");
      var i;
        for (i = 0; i < next.length; i++) {
          next[i].click();
        }
    }
    var nextElem = document.getElementById("result-next");
    var prevElem = document.getElementById("result-prev");
    nextElem.addEventListener("click", prevFunctionResult);
    prevElem.addEventListener("click", nextFunctionResult);
    // ajax for subscription
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this.responseText);
          document.getElementsByClassName("subs-first")[0].innerHTML = ' There are currently '+this.responseText+' people in front of you.'
        }
      };
      xhttp.open("GET", "https://vessel--vesselapi.repl.co/subscription", true);
      xhttp.send();

      $('.cover').click(function(){
        var country = $('#consent-country').val();
        var email = $('#k_id_email').val();
        if( $(this).prop("checked") == false ){
        $('.subsca').css('color','#d02626');
        }
        else if ($(this).prop("checked") == true){
        $('.subsca').css('color','black');
        }
         if ( country == '' ) {
                    $('#consent-country').css('border', '2px solid #ff0000');
                    }
                    else if (country != ''){
                    $('#consent-country').css('border', 'none');
                    }
        if ( email == '' ) {
                    $('#k_id_email').css('border', '2px solid #ff0000');
                    }
                     else if (email != ''){
                    $('#k_id_email').css('border', 'none');
                    }
        });
                $('.agree, #consent-country, #k_id_email').change(function(){
                var country = $('#consent-country').val();
                var email = $('#k_id_email').val();
                if( $('.agree').prop("checked") == false ){
                    $('.cover').show();
                    $('.subsca').css('color','#d02626');
                    }
                    else{
                    $('.subsca').css('color','#000000');
                    }
                if ( country == '' ) {
                    $('.cover').show();
                    }
                    else {
                    $('#consent-country').css('border', 'none');
                    }
                    if ( email == '' ) {
                    $('.cover').show();
                    }
                    else {
                    $('#k_id_email').css('border', 'none');
                    }
                    if($('.agree').prop("checked") == true && email != '' && country != '') { 
                        $('.cover').hide();
                    }
                });
  }
	render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const textSlide = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: !0
    };
    const menutab = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: '10px',
  focusOnSelect: true,
  centerMode: false,
    };
	return (
    <>
    <Helmet>
    <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
	<Layout>
    
    <SEO title="Coronavirus (COVID-19) At-Home Antibody Testing - Vessel Health" description="Vessel’s app and serology test enable accurate at-home detection of antibodies against the novel coronavirus in 15 minutes." image={seo_image} />
    <div className="main-section covid">
    <div className="top covid"><img src={Group_7} alt="" className="image mobile covid" />
      <div className="container-8 top w-container">
        <div className="div-block-2">
          <div className="div-block-3 covid19 w-clearfix">
            <div className="word-change covid19">
              <h1 className="heading covid19">At-home <br/>testing for <span className="text-span-2">COVID-19 antibodies</span></h1>
            </div>
            <p className="paragraph main covid">Vessel’s app and serology test enable accurate at-home detection of antibodies against the novel coronavirus in 15 minutes. At-home antibody testing is a promising new tool with multiple benefits. Antibody tests use the same lateral flow assay (LFA) technology that we spent the last three years developing for our wellness test, enabling us to swiftly deploy an at-home testing solution for COVID-19. A thorough review by the proper regulatory agencies is currently under way.</p>
            <button onClick={() => scrollTo('#join-waitlist')} className="dark-bt main-section-bt w-button">Join the waitlist</button>
          </div>
        </div>
      </div>
      <div className="div-block"><img src={Group_7}  alt="" className="image" /></div>
    </div>
    <div className="overview first covid">
      <div className="div-block-153">
        <div className="container-14 universal covid w-container">
          <div className="div-block-79 covid">
            <h3>Scalable</h3>
            <p className="paragraph">Vessel’s mobile app will be free to download and compatible with any regulatory-approved serology test card. In addition, we have partnered with multiple approved test card manufacturers to secure hundreds of thousands of test kits per day that will be available for purchase at cost on our site (coming soon).<br/></p>
            <h3>Accurate</h3>
            <p className="paragraph">We are working with <a href="http://doc.ai/" target="_blank">Doc.ai</a> on clinical trials to verify the accuracy of at-home serology testing using Vessel’s app-based solution. Clinical trials are scheduled to be completed by May 2020. Furthermore, we are evaluating several serology test kit manufacturers with the help of the medical team at <a href="https://marsonlab.ucsf.edu/" target="_blank">University of California San Francisco.</a> We are also a member of the <a href="https://www.xprize.org/fight-covid19" target="_blank">XPRIZE Pandemic Alliance</a>, being led by <a href="https://www.anthem.com/" target="_blank">Anthem</a>.<br/></p>
            <h3>Affordable </h3>
            <p className="paragraph">Our complete solution will be provided at cost, and may be covered by insurance, although no insurance is required. <span className="text-span-11">A breakdown of pricing is below:</span><br/></p>
          </div>
          <div className="div-block-135 covid single">
            <div className="div-block-136"><img src={quote} alt="" className="image-33"/></div>
            <div className="div-block-131">
              <p className="paragraph drbrown">In the fight against COVID-19, Vessel&#x27;s approach to at-home antibody testing is a promising new tool to help us understand who is likely immune and can return back to work.</p>
              <div className="div-block-132"><img src={drbrownstein} alt="" className="image-30"/>
                <div className="div-block-134">
                  <h2 className="heading-4 drbrown">Dr. John Brownstein<br/></h2>
                  <p className="paragraph drbrown">Epidemiologist and Professor of Medicine Harvard Medical School<strong><br/></strong></p>
                </div>
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
      <div className="white-bg covid single"></div>
      <div className="cream-bg covid"></div>
      <div className="rose-fpo universal"></div>
    </div>
    <div className="green-bg top"></div>
  </div>
  <div className="instructions">
    <div className="section-sticky__wrap section-sticky__wrap-progress covid">
      <div id="step1" className="section-triggers section-triggers__scroll-down">
        <div id="step2" className="section-trigger section-trigger__0"></div>
        <div id="step3" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc3" className="section-trigger section-trigger__1"></div>
        <div id="step4" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc4" className="section-trigger section-trigger__2"></div>
        <div id="step5" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc5" className="section-trigger section-trigger__3"></div>
        <div id="step6" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc6" className="section-trigger section-trigger__4"></div>
        <div id="step7" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc7" className="section-trigger section-trigger__5"></div>
        <div id="step8" data-w-id="03968894-35a4-0c9b-5b20-6970528abfc8" className="section-trigger section-trigger__6"></div>
        <div id="step9" data-w-id="0e914f13-60f9-7657-e6e5-ee05f8e33b40" className="section-trigger section-trigger__7"></div>
      </div>
      <div className="wrap__sticky sticky sticky-5">
        <div className="div-block-41">
          <div className="div-block-47">
            <div className="container-7 w-container">
              <div className="div-block-43">
                <h2 className="heading tour">How Vessel works</h2>
              </div>
            </div>
            <div className="container-6 w-container">
              <div className="scan">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block active">Step 1</div>
                      </a>
                      <div className="div-block-8 active scan-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step1}  alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 1</h2>
                    <p className="paragraph">Download the free Vessel app once it has been approved for use in your country. <span onClick={() => scrollTo('#join-waitlist')} className="span-link">Join the waitlist</span> to be notified.</p>
                    <div className="div-block-86 step1"><img src={appstore_bt} alt="" className="image-22"/>
                    <img src={playstore_bt} alt="" className="image-23"/></div>
                  </div>
                </div>
              </div>
              <div className="learn">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block active">Step 2</div>
                      </a>
                      <div className="div-block-8 active learn-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step2} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 2</h2>
                    <p className="paragraph">Complete the questionnaire .<br/></p>
                  </div>
                </div>
              </div>
              <div className="food">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block active">Step 3</div>
                      </a>
                      <div className="div-block-8 active food-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step3} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 3</h2>
                    <p className="paragraph">Select the test card you have. Our technology is compatible with test cards purchased directly from Vessel as well as those from other regulatory approved sources.</p>
                  </div>
                </div>
              </div>
              <div className="sup">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block active">Step 4</div>
                      </a>
                      <div className="div-block-8 active sup-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step4} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 4</h2>
                    <p className="paragraph">Watch the instructional video and apply one (1) drop of blood to the test card. An alcohol swab, lancet and pipette is provided in the test kit.</p>
                  </div>
                </div>
              </div>
              <div className="life">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block active">Step 5</div>
                      </a>
                      <div className="div-block-8 active sup-p"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div><img src={step5} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 5</h2>
                    <p className="paragraph">Watch the video instructions and apply two (2) drops of buffer solution, which is provided in the test kit.</p>
                  </div>
                </div>
              </div>
              <div className="plan">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block active">Step 6</div>
                      </a>
                      <div className="div-block-8 active plan-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step6}  alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 6</h2>
                    <p className="paragraph">Use the in-app timer and wait ten minutes.</p>
                  </div>
                </div>
              </div>
              <div className="improve">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block active">Step 7</div>
                      </a>
                      <div className="div-block-8 active improve-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block">Step 8</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step7} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 7</h2>
                    <p className="paragraph">Scan the test card in the app. Vessel&#x27;s image capture feature will help you get the perfectly fit image without glare or shadows and with proper lighting. Next, Vessel&#x27;s proprietary image analysis algorithm will then analyze the test card and determines the likely diagnosis.</p>
                  </div>
                </div>
              </div>
              <div className="step-8">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#step1" className="w-inline-block">
                        <div className="text-block">Step 1</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step2" className="w-inline-block">
                        <div className="text-block">Step 2</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step3" className="w-inline-block">
                        <div className="text-block">Step 3</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step4" className="w-inline-block">
                        <div className="text-block">Step 4</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step5" className="w-inline-block">
                        <div className="text-block">Step 5</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step6" className="w-inline-block">
                        <div className="text-block">Step 6</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step7" className="w-inline-block">
                        <div className="text-block">Step 7</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#step8" className="w-inline-block">
                        <div className="text-block active">Step 8</div>
                      </a>
                      <div className="div-block-8 active improve-b"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={step8} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Step 8</h2>
                    <p className="paragraph">The image and diagnosis are then shared with a medical professional, who will confirm the final diagnosis and review the results with you via Vessel&#x27;s telehealth platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="html-embed w-embed w-script">
      </div>
    </div>
  </div>
  <div data-w-id="d06e55a3-b60e-4e0d-99d3-78371f544e9b" className="instruction-trap"></div>
  <div id="benefits" className="benefits">
    <div className="cream-bg test-kit-access second"></div>
    <div className="container-19 w-container">
      <h2 className="heading">At-home Antibody testing benefits<br/></h2>
      <div className="div-block-81"><img src={bene_1}  alt="" className="image-27"/>
        <div className="div-block-82">
          <p className="paragraph-12 number">01</p>
          <div className="div-block-83">
            <h3 className="heading-39"><strong className="bold-text">Reduce the burden on our healthcare system</strong></h3>
            <p className="paragraph">Vessel could help lighten the load on the healthcare system by testing people at home who have mild symptoms or believe they have been exposed. For people with severe symptoms, contacting your doctor and getting lab-based PCR (polymerise chain reaction) testing is still recommended. Antibody (serology) tests are being used around the world to help in the fight against COVID-19. Public Health England (PHE) just purchased<a href="https://www.theguardian.com/world/2020/mar/25/uk-coronavirus-mass-home-testing-to-be-made-available-within-days" target="_blank"> 3.5M antibody test cards</a> and other countries are quickly following suit. They are even being used <a href="https://abcnews.go.com/Health/antibody-testing-colorado-town-provide-forward/story?id=69856623" target="_blank"> in Telluride, Colorado</a>.</p>
          </div>
        </div>
      </div>
      <div className="div-block-81 benefits">
        <div className="div-block-82 left">
          <p className="paragraph-12 number">02</p>
          <div className="div-block-84">
            <h3 className="heading-39"><strong className="bold-text">Protect essential workers and get people back to work</strong></h3>
            <p className="paragraph">While we still need more data on how long infected individuals are infectious, we know that for similar coronaviruses such as SARS, people are presumed to be infectious for approximately 10 days after fever and respiratory symptoms have started to improve.<span className="cit-number">[1]</span> Our test kits and app enable medical professionals to diagnose who is <a href="#igg">IgG positive</a> and <a href="#igm">IgM negative</a>, and whether they are likely no longer infectious, possibly immune, and could return to work with certain precautions. Read the FDA’s view on serology testing <a href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-serological-tests">here</a>.<span className="cit-number">[2]</span> For information on antibody testing limitations <a href="#limitations-of-antibody-test">read here</a>.</p>
            <div className="citation">1. <a href="https://www.ncbi.nlm.nih.gov/pubmed?term=20463105" target="_blank">https://www.cdc.gov/sars/about/faq.html<br/><br/></a>2. <a href="https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-serological-tests" target="_blank">https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-serological-tests</a><br/></div>
          </div>
        </div><img src={benefits} alt="" className="image-27"/></div>
      <div className="div-block-81"><img src={bene_03} alt="" className="image-27"/>
        <div className="div-block-82 right">
          <p className="paragraph-12 number">03</p>
          <div className="div-block-83">
            <h3 className="heading-39"><strong className="bold-text">Data gives us a better understanding of COVID-19 epidemiology</strong></h3>
            <p className="paragraph">Enabling at-home testing will get more people tested faster. Many people have been asymptomatic or showing mild symptoms and are therefore not being tested. This additional data can provide insights to help slow the spread and better understand the virus.<span className="cit-number">[1]</span> We adhere to an open standard to CDC/PHE/WHO in a universal effort to understand the sero-epidemiology of COVID-19. See our <a href="#data-policy">Data Policy</a>.</p>
            <div className="citation">1. <a href="https://www.ncbi.nlm.nih.gov/pubmed/32243608" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/32243608</a><br/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="test-kit">
    <div className="container-22 w-container">
      <h1>Test Kit<br/>Accessibility</h1>
    </div>
    <div className="div-block-87">
      <div className="container-15 test-access w-container">
        <div className="div-block-100">
          <div className="div-block-85">
            <p className="paragraph">In order to help get test kits out to as many people as possible we will offer test cards for purchase, at cost, directly from our website vesselhealth.com. All test cards are CFDA and CE approval and have a sensitivity of 91.5% or better, see accuracy studies. These test cards will be made available as so as we get regulatory approval. <a href="#" className="link-8">Join our Waitlist</a> to be notified as soon as they become available. Furthermore, we have created a “buy one, give one” program whereby we donate one test card to a person in need for each test card sold. You should receive your test within 1-5 business days, depending on the shipping option you select. Each package comes with a test card and all the materials you need to complete the tests, such as a lancet, alcohol swabs, buffer solution, and pipette.</p>
          </div>
        </div>
      </div><img src={test_kit} alt="" className="image-24"/></div>
    <div className="cream-bg test-kit-access"></div>
  </div>
  <div className="antibody">
    <div className="green-bg anti"></div>
    <div className="overview how-antibody">
      <div className="container-14 w-container">
        <div className="div-block-79 ab-test">
          <h2 className="heading">Antibody testing</h2>
          <p className="paragraph">Above is a plot showing a typical immune response to an infection. The Vessel app works by reading immunoassay test cards. These tests typically measure two different types of antibodies (IgM and IgG), which are immunoglobulins that your immune system generates in response to an infection. Antibodies are unique and specific to each pathogen, enabling us to specifically detect COVID-19 antibodies rather than antibodies against the flu virus or a common cold virus.<span className="cit-number">[1]</span></p>
          <div className="citation">1. <a href="https://www.ncbi.nlm.nih.gov/pubmed/32251798" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/32251798</a><br/></div>
        </div>
      </div><img src={how_anti} className="image-20 how-anti covsing"/></div>
  </div>
  <div className="antibody-list">
    <div className="cream-bg anti"></div>
    <div className="container-16 w-container">
      <div className="div-block-81 antibodies first">
        <div className="div-block-82">
          <p className="paragraph-12 number">01</p>
          <div className="div-block-83">
            <h3 className="heading-39"><strong className="bold-text">Antybodies</strong></h3>
            <p className="paragraph">Our adaptive immune system makes several different classes of antibodies which differ in their function as well as the timing of when they are produced. The tests we are working with now measure both IgM and IgG isotypes. At present, there is not enough research to know the exact details of COVID-19 antibody production, so we are extrapolating from what we already know about how our immune system responds to similar viruses.</p>
          </div>
        </div><img src={anti_} alt="" className="image-28"/></div>
      <div id="igm" className="div-block-81 antibodies">
        <div className="div-block-82">
          <p className="paragraph-12 number">01</p>
          <div className="div-block-83">
            <h3 className="heading-39"><strong className="bold-text-2">IgM Antibodies</strong></h3>
            <p className="paragraph">IgM antibodies are created first and typically take a week after infection to reach detectable levels in your bloodstream; they typically disappear two weeks after the infection resolves. Because of this timing, they usually signify an acute (recent) infection.<span className="cit-number">[1,2,3,4]</span></p>
            <div className="citation">1. <a href="https://www.ncbi.nlm.nih.gov/pubmed?term=20463105" target="_blank">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2194144/</a><br/><br/>2. <a href="https://www.ncbi.nlm.nih.gov/pubmed/3103734" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/3103734</a><br/><br/>3. <a href="https://www.ncbi.nlm.nih.gov/pubmed/3319367" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/3319367<br/><br/></a>4. <a href="https://www.ncbi.nlm.nih.gov/pubmed/31081745" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/31081745</a></div>
          </div>
        </div><img src={igm} alt="" className="image-28"/></div>
      <div id="igg" className="div-block-81 antibodies">
        <div className="div-block-82">
          <p className="paragraph-12 number">02</p>
          <div className="div-block-83">
            <h3 className="heading-39"><strong className="bold-text">IgG Antibodies</strong></h3>
            <p className="paragraph">IgG antibodies are created later and generally don&#x27;t reach detectable levels until 3-6 weeks after initial infection. IgG antibodies typically remain at detectable levels in your blood for months or even years. IgG is usually the antibody signaling immunity from the associated pathogen.<span className="cit-number">[1]</span> For example, after getting a series of vaccinations against the Hepatitis B virus <span className="cit-number">[2]</span>, the body continues to make IgG antibodies for years to continue to protect us against infection. The same type of immunity can often be acquired through an actual infection. For example, after getting chickenpox (varicella), the body creates long-term IgG antibodies to protect us against the varicella virus. For those who never had chickenpox, there are varicella vaccines that can also lead to immunity through triggering the production of IgG antibodies.<span className="cit-number">[3]</span></p>
            <div className="citation">1.<a href="https://www.ncbi.nlm.nih.gov/pubmed?term=20463105" target="_blank"> https://www.ncbi.nlm.nih.gov/pubmedterm=20463105</a> <br/>‍<br/>2. <a href="https://www.ncbi.nlm.nih.gov/pubmed/29405329" target="_blank">Terrault NA, Lok ASF, McMahon BJ, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology 2018; 67:1560.</a><br/><br/>3. <a href="https://www.google.com/url?q=https://www.ncbi.nlm.nih.gov/pubmed/18419415&amp;sa=D&amp;ust=1587443477412000&amp;usg=AFQjCNGRW7bIj0pR9WYTeeiHLMkB6nw-GA" target="_blank">Seward JF, Marin M, Vázquez M. Varicella vaccine effectiveness in the US vaccination program: a review. J Infect Dis 2008; 197 Suppl 2:S82.</a><br/><br/>4. <a href="https://www.ncbi.nlm.nih.gov/pubmed/32251798" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/32251798</a><br/><br/>5. <a href="https://www.ncbi.nlm.nih.gov/pubmed/32243608" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/32243608</a></div>
          </div>
        </div><img src={igg} alt="" className="image-28"/></div>
    </div>
  </div>
  <div className="result-meaning result">
    <div className="container-20 w-container">
      <div className="div-block-99">
        <h2 className="heading">Possible results<br/></h2>
        <p className="paragraph">Here’s an example of different possible results and what they likely mean. We know this can be a little confusing, which is why we will have a medical professional available to answer any questions you might have, all from within the app.<br/></p>
      </div>
      <div className="div-block-42">
        <div data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
          <div className="tabs-menu covid w-tab-menu" id="tabmenu">
            <a data-w-tab="only-igm" className="tab-link-tab-1 w-inline-block w-tab-link w--current">
              <div className="text-block-19">Only IgM antibodies are detected<br/></div>
            </a>
            <a data-w-tab="igm-and-igg" className="tab-link-tab-1 w-inline-block w-tab-link">
              <div className="text-block-19">IgM and IgG antibodies are detected<br/></div>
            </a>
            <a data-w-tab="only-igg" className="tab-link-tab-1 w-inline-block w-tab-link">
              <div className="text-block-19">Only IgG antibodies are detected<br/></div>
            </a>
            <a data-w-tab="no-anti" className="tab-link-tab-1 w-inline-block w-tab-link">
              <div className="text-block-19">No antibodies are detected<br/></div>
            </a>
            <a data-w-tab="invalid-test" className="tab-link-tab-1 w-inline-block w-tab-link">
              <div className="text-block-19">Invalid test<br/></div>
            </a>
          </div>
          <div className="tabs-content covid w-tab-content" id="tabcontent">
            <div data-w-tab="Only IgM" className="tab-pane-vitamin-b7 w--tab-active w-tab-pane only-igm">
              <h2 className="heading-4">Only IgM antibodies are detected<br/></h2>
              <p className="vessel">If only IgM antibodies are detected, this suggests a new infection from the virus in the past few weeks.<br/></p>
              <div className="div-block-56"><img src={result_igm} height="" alt="" className="image-29"/></div>
            </div>
            <div data-w-tab="IgM and IgG" className="w-tab-pane igm-and-igg">
              <h2 className="heading-4">IgM and IgG antibodies are detected</h2>
              <p className="vessel">If IgM and IgG antibodies are detected, this signifies both an acute infection from the virus in the past 3-6 weeks, and the development of IgG antibodies, the body’s form of long-term protection.</p>
              <div className="div-block-56"><img src={result_both} height="" alt="" className="image-29"/></div>
            </div>
            <div data-w-tab="Only IgG" className="w-tab-pane only-igg">
              <h2 className="heading-4">Only IgG antibodies are detected</h2>
              <p className="vessel">If IgM antibodies are not detected and only IgG antibodies are detected, this signifies a previous infection more than four weeks ago and possible long-term immunity.</p>
              <div className="div-block-56"><img src={result_igg} height="" alt="" className="image-29"/></div>
            </div>
            <div data-w-tab="No anti" className="w-tab-pane no-anti">
              <h2 className="heading-4">No antibodies are detected</h2>
              <p className="vessel">If no antibodies are detected, this signifies that you probably have not had an infection with the virus, or that you were exposed recently and are in the incubation period of 1-2 weeks when you have the virus but have not yet produced antibodies, or that your immune system might be unable to produce antibodies.</p>
              <div className="div-block-56"><img src={result_neg} height="" alt="" className="image-29"/></div>
            </div>
            <div data-w-tab="Invalid test" className="w-tab-pane invalid-test">
              <h2 className="heading-4">Invalid test</h2>
              <p className="vessel">Invalid test. The test cards we work with are able to determine if the blood sample was enough to make a valid test. If not, it will produce an invalid result.</p>
              <div className="div-block-56"><img src={invalid} height="" alt="" className="image-29"/></div>
            </div>
          </div>
        </div>
        <div className="div-block-51">
          <div className="div-block-50"></div>
          <div className="div-block-52"></div>
        </div>
      </div>
      <div className="div-block-55">
      <Slider {...menutab} className="slider-tabs covid" asNavFor={this.state.nav6} ref={slider => (this.slider5 = slider)}>
          <div className="tab-link-tab-1 covid">
            <div className="text-block-19">Only IgM antibodies</div>
          </div>
          <div className="tab-link-tab-1 covid">
            <div className="text-block-19">IgM and IgG antibodies</div>
          </div>
          <div className="tab-link-tab-1 covid">
            <div className="text-block-19">Only IgG antibodies<br/></div>
          </div>
          <div className="tab-link-tab-1 covid">
            <div className="text-block-19">No antibodies<br/></div>
          </div>
          <div className="tab-link-tab-1 covid">
            <div className="text-block-19">Invalid test<br/></div>
          </div>
          </Slider>
        <Slider {...textSlide} className="slider-content covid" asNavFor={this.state.nav5} ref={slider => (this.slider6 = slider)}>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56 covid"><img src={result_igm} height="" alt="" className="image-29"/></div>
            <h2 className="heading-4 covid">Only IgM antibodies are detected</h2>
            <p className="vessel covid">If only IgM antibodies are detected, this suggests a new infection from the virus in the past few weeks.</p>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56 covid"><img src={result_both} height="" alt="" className="image-29"/></div>
            <h2 className="heading-4 covid">IgM and IgG antibodies are detected</h2>
            <p className="vessel covid">If IgM and IgG antibodies are detected, this signifies both an acute infection from the virus in the past 3-6 weeks, and the development of IgG antibodies, the body’s form of long-term protection.</p>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56 covid"><img src={result_igg} height="" alt="" className="image-29"/></div>
            <h2 className="heading-4 covid">Only IgG antibodies are detected</h2>
            <p className="vessel covid">If IgM antibodies are not detected and only IgG antibodies are detected, this signifies a previous infection more than four weeks ago and possible long-term immunity.</p>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56 covid"><img src={result_neg} height="" alt="" className="image-29"/></div>
            <h2 className="heading-4 covid">No antibodies are detected</h2>
            <p className="vessel covid">If no antibodies are detected, this signifies that you probably have not had an infection with the virus, or that you were exposed recently and are in the incubation period of 1-2 weeks when you have the virus but have not yet produced antibodies, or that your immune system might be unable to produce antibodies.</p>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56 covid"><img src={invalid} height="" alt="" className="image-29"/></div>
            <h2 className="heading-4 covid">Invalid test</h2>
            <p className="vessel covid">Invalid test. The test cards we work with also are able to determine if the sample was enough to make a valid test. If not, it will show a result suggesting an invalid result.</p>
          </div>
          </Slider>
        <div className="div-block-46 covid">
          <img src={prev} height="50" alt="" className="image-14 prev" id="result-prev"/>
          <img src={next} height="50" alt="" className="next" id="result-next"/>
        </div>
        <div className="w-embed w-script">
        </div>
      </div>
      <div className="rose-bg covid"></div>
    </div>
  </div>
  <div className="skip-the-lab">
    <div data-w-id="301d1548-03d5-d866-0943-324df16ca2f0" className="inorive-trap"></div>
    <div className="green-bg lab"></div>
    <div className="container-2 covid w-container">
      <div className="div-block-53">
        <h2 className="heading lab covid">Comparing PCR Testing to <span className="text-span-5">Antibody Testing</span><br/></h2>
        <p className="paragraph-14 paragraph">Below is a side-by-side comparison of the antibody test card vs typical lab-based PCR testing. Both can play a critical role in the fight against COVID-19. PCR is better at detecting the virus even in the incubation period.  Antibody testing can assess your immune response quickly and tell you if you&#x27;ve had an infection in the past that you&#x27;ve recovered from.<br/></p>
      </div>
      <div data-w-id="301d1548-03d5-d866-0943-324df16ca2fa" className="div-block-39" id="labpos">
        <div className="line-vertical"></div>
        <div className="line-vertical-s-compare shadow"></div>
        <div className="div-block-11 top-line">
          <div className="div-block-12">
            <h2 className="heading-4 lab mobile">PCR Testing</h2>
            <h2 className="heading-4 lab desk">PCR testing<br/></h2>
          </div>
          <div className="div-block-10 vs">
            <h2 className="heading-4 lab vs covid">VS.</h2>
          </div>
          <div className="div-block-13">
            <h2 className="heading-4 lab left">Antibody<br/>Testing<br/></h2>
          </div>
        </div>
        <div className="div-block-11 lab-child _1">
          <div className="div-block-12">
            <h4 className="lab-child">Cost<br/></h4>
            <h2 className="heading-4 lab child cost">Hundreds <br/></h2>
            <p>This varies but generally speaking medicare is about $50 for the test, $25 for the collection, fee for the office visit.</p>
          </div>
          <div className="div-block-10 child">
            <div className="div-block-14 pertama pcr"></div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Cost<br/></h4>
            <h2 className="heading-4 lab child right cost">$ 50</h2>
            <p className="paragraph pcr right">The Vessel app is free. The test card and telemedicine service will be sold at cost (less than $20 for the test card) and most likely will be eligible for insurance reimbursement.<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _2">
          <div className="div-block-12">
            <h4 className="lab-child">Collection method<br/></h4>
            <h2 className="heading-4 lab child">Uncomfortable nasal swab<br/></h2>
            <p className="paragraph pcr">collected by a medical professional</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kedua"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Collection method<br/></h4>
            <h2 className="heading-4 lab child right">One drop of blood<br/></h2>
            <p className="paragraph pcr right">collected at home<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _3">
          <div className="div-block-12">
            <h4 className="lab-child">Time for results<br/></h4>
            <h2 className="heading-4 lab child">3-5 business days<br/></h2>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 ketiga"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Time for results<br/></h4>
            <h2 className="heading-4 lab child right">15 minutes<br/></h2>
          </div>
        </div>
        <div className="div-block-11 lab-child _4">
          <div className="div-block-12">
            <h4 className="lab-child">Accuracy<br/></h4>
            <p className="paragraph pcr">The current gold standard, accuracy depends on <a href="https://www.youtube.com/watch?v=DVJNWefmHjE" target="_blank">the quality of specimen obtained</a> and manufacturer.<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 keempat"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Accuracy<br/></h4>
            <p className="paragraph pcr right">Varies with manufacturer. Current FDA approved Cellex test card shows that 93.8% of people who are PCR positive are also antibody positive, and 95.6% of people who are PCR negative will be antibody negative.<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _5">
          <div className="div-block-12">
            <h4 className="lab-child">Interpreted by a medical professional<br/></h4>
            <p className="paragraph pcr"> Yes, in-person<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kelima"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Interpreted by a medical professional<br/></h4>
            <p className="paragraph pcr right">Yes, via telehealth<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _6">
          <div className="div-block-12">
            <h4 className="lab-child">Easy to do without breaking quarantine<br/></h4>
            <p className="paragraph pcr">No<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 keenam"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Easy to do without breaking quarantine<br/></h4>
            <p className="paragraph pcr right">Yes, if done at home with a solution like Vessel&#x27;s<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _7">
          <div className="div-block-12">
            <h4 className="lab-child">Tests for<br/></h4>
            <p className="paragraph pcr">Virus particles (nucleic acid)<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 ketujuh"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Tests for<br/></h4>
            <p className="paragraph pcr right">Antibodies against the virus<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _8">
          <div className="div-block-12">
            <h4 className="lab-child _2-line">Can detect infection during the <br/>incubation period<br/></h4>
            <p className="paragraph pcr">Yes<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kedelapan"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child _2-line right">Can detect infection during the <br/>incubation period<br/></h4>
            <p className="paragraph pcr right">Possible but unlikely<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _9">
          <div className="div-block-12">
            <h4 className="lab-child _2-line">Can detect infection after the incubation period (when symptoms start)<br/></h4>
            <p className="paragraph pcr">Yes<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kesembilan"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child _2-line right">Can detect infection after the incubation period (when symptoms start)<br/></h4>
            <p className="paragraph pcr right">Yes<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _10">
          <div className="div-block-12">
            <h4 className="lab-child _2-line">Can detect a past infection that you <br/>have recovered from<br/></h4>
            <p className="paragraph pcr">No<br/></p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap">
              <div className="div-block-14 kesepuluh" id="labposlast"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child _2-line right">Can detect a past infection that you <br/>have recovered from<br/></h4>
            <p className="paragraph pcr right">Yes<br/></p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-30 w-container">
      <div className="div-block-11 lab-child _10 source">
        <div className="div-block-12 source">
          <p className="paragraph pcr citation source">Source: CDC 2019-Novel Coronavirus (2019-nCoV) Real-Time RT-PCR Diagnostic Panel IFU<br/>‍<a href="https://www.fda.gov/media/134922/download" target="_blank">https://www.fda.gov/media/134922/download</a><br/></p>
        </div>
        <div className="div-block-10 child"></div>
        <div className="div-block-13 source">
          <p className="paragraph pcr right citation">Source: Cellex qSARS-CoV-2 IgG/IgM Rapid Test FDA Approval <a href="https://www.fda.gov/media/136625/download" target="_blank">https://www.fda.gov/media/136625/download<br/><br/>http://www.centerforhealthsecurity.org/resources/<br/>COVID-19/Serology-based-tests-for-COVID-19.html</a><br/></p>
        </div>
      </div>
    </div>
  </div>
  <div id="limitations-of-antibody-test" className="limitations">
    <div className="container-21 w-container">
      <div className="div-block-91">
        <h2 className="heading">Antibody testing limitations<br/></h2>
        <p className="paragraph-31">Unfortunately, there is no test that is 100% accurate at telling you whether or not you are infected with COVID-19. Currently, RT-qPCR testing using a properly connected nasopharyngeal swab is the gold standard. However, the accuracy and predictive value of this type of testing has not been systematically evaluated, and results can vary. For example, different test companies can have different levels of accuracy, with accuracy varying based on the type of sample obtained.  For the highest accuracy, a nasopharyngeal swab is required, which can be rather difficult and painful to obtain.<br/><br/>Antibody tests using blood or serum also have limitations, such as the following:</p>
      </div>
      <div className="div-block-92">
        <div className="div-block-93">
          <div className="list-limitations">
            <p className="number">01</p>
            <p className="paragraph-16 paragraph">Because these tests detect antibodies made in response to the virus, they often lag behind RT-qPCR tests which detect actual viral particles. Most people take around seven days after exposure before initial IgM antibodies are at detectable levels.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number">02</p>
            <p className="paragraph-16 paragraph">The accuracy with a finger-prick sample is lower than using serum or intravenous blood, but it is also less painful.<br/></p>
          </div>
          <div className="list-limitations">
            <p className="number">03</p>
            <p className="paragraph-16 paragraph">We don’t know enough yet to confirm that, when your body makes IgG antibodies, you are immune from future infection. Preliminary evidence suggests that these antibodies are protective, but this remains to be definitively established. Moreover, it is unknown whether all infected patients mount a protective immune response and how long any protective effect will last.<br/><br/>Research on protective immunity following COVID-19 is growing. For example, a case series showed that when IgG antibodies from the blood of patients who recovered from COVID-19 was transferred to other patients, it protected those patients from viral infection <span className="cit-number">[1]</span>. Another study showed that when antibody levels rose, these were correlated with neutralizing activity against the virus <span className="cit-number">[2]</span>.<br/></p>
          </div>
        </div>
        <div className="div-block-94">
          <div className="div-block-101">
            <p className="number">04</p>
            <p className="paragraph-16 paragraph">Furthermore, a recent study reported that rhesus macaques infected with COVID-19 did not develop reinfection after they recovered and were exposed again to COVID-19.<span className="cit-number">[3]</span><br/></p>
          </div>
          <div className="list-limitations">
            <p className="number">05</p>
            <p className="paragraph-16 paragraph">Certain people have impaired immune systems from conditions such as inherited or acquired immunodeficiency syndromes, or surgical removal of their spleens (the spleen is the main site of IgM antibody production). Furthermore, many people are on immunosuppressive medications that can block or blunt a normal immune response to the COVID-19 virus. Such situations would make test results less reliable.<br/></p>
            <div className="citation indent">1.<a href="https://www.uptodate.com/contents/coronavirus-disease-2019-covid-19/abstract-text/32219428/pubmed" target="_blank"> https://www.uptodate.com/contents/coronavirus-disease-2019-covid-19/abstract-text/32219428/pubmed</a><br/><br/>2.<a href="https://www.uptodate.com/contents/coronavirus-disease-2019-covid-19/abstract-text/32213337/pubmed"> https://www.uptodate.com/contents/coronavirus-disease-2019-covid-19/abstract-text/32213337/pubmed<br/><br/></a>3. Bao L, Deng W, Gao H, et al. Reinfection could not occur in SARS-CoV-2-infected rhesus macaques. Pre-print.<a href="https://www.biorxiv.org/content/10.1101/2020.03.13.990226v1.full.pdf" target="_blank">https://www.biorxiv.org/content/10.1101/<br/>2020.03.13.990226v1.full.pdf </a>(Accessed on March 26, 2020).<br/></div>
          </div>
          <div className="div-block-102">
            <p className="number">06</p>
            <p className="paragraph-16 paragraph">Certain people have impaired immune systems from conditions such as inherited or acquired immunodeficiency syndromes, or surgical removal of their spleen (the spleen is the main site of IgM antibody production).  Furthermore, many people are on immunosuppressive medications that can block or blunt a normal immune response to the COVID-19 virus. These situations would make test results less reliable.<br/></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="data-policy" className="data-privacy">
    <div className="container-17 w-container">
      <div className="div-block-95">
        <h2 className="heading-45">Data and privacy<br/></h2>
        <p className="paragraph">The Vessel COVID-19 app has been launched in an effort to help our world’s public health authorities, governments, and researchers fight the COVID-19 epidemic. Your personal, identifiable information will never be shared, sold, or passed onto anyone else without your explicit permission. <br/><br/>All survey responses will be stripped of any personally identifiable information (specifically e-mails and full postcodes if submitted) and openly shared for research purposes to accelerate our collective understanding of COVID-19 and study immunity.<br/><br/>We adhere to an open standard to CDC/PHE/WHO in a universal effort to understand the sero-epidemiology of this disease. We align with the <a href="https://cov-clear.com/" target="_blank">COV-CLEAR</a> standards of data sharing. Read our full <a href="/privacy-policy">privacy policy</a>.<br/><br/><br/></p>
      </div>
    </div><img src={data_priv} alt="" className="image-20 data-priv"/>
    <div className="green-bg data"></div>
  </div>
  <div id="why-vessel" className="why-vessel">
    <div className="container-4 w-container">
      <div className="div-block-22">
        <h2 className="heading data">Why Vessel?<br/></h2>
      </div>
      <div className="div-block-21 why-vessel-mobile">
        <div className="div-block-138">
          <p className="paragraph why">The world has changed rapidly in the last few weeks, and like many others, we are compelled to step in and help. Fortunately, we’re in a unique position to adapt our product development to meaningfully contribute to this growing crisis. Over the past three years, we’ve been developing an app and image analysis algorithm that can read lateral flow tests - these lateral flow immunoassay tests are currently being used around the world to test for COVID-19 antibodies. With a few tweaks to our algorithm and app, we now have the capabilities to make it easy and accurate to test for COVID-19 at home and connect patients with medical practitioners via telehealth services.<br/><br/></p>
        </div>
        <div className="div-block-137"><img src={cards} alt="" className="image-34"/>
          <p className="paragraph why image">Vessel&#x27;s at-home wellness test card and the COVID-19 antibody test card use lateral flow immunoassays.<br/></p>
        </div>
      </div>
      <div className="div-block-22">
        <div className="div-block-147">
          <h2 className="heading">Meet the team<br/></h2>
          <p className="paragraph-30">Below are the entrepreneurs, doctors, engineers and scientists behind Vessel.<br/></p>
        </div>
      </div>
      <div className="div-block-45 w-clearfix">
        <div className="div-block-44 w-clearfix">
        <Slider {...settings} className="div-block-26 slider-a w-clearfix" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
            <div className="div-block-28 grow"><img src={_Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Matt_McCord} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jon_Carder} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Chris_Hoffman} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Blake_Jendrusch} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jeremy_Schumann} alt="" className="image-12 slide-img"/></div>
            <div className="div-block-28 grow jordan"><img src={_Jordan_Ames} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ghaleb_Hamdan} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Ostrowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Anand_Bhatt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Pete_Janda} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Adam_Eidelson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jonathan_Balleras} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Weiss} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Mark_Tholking} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Wojciechowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kevin_Martignetti} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Peter_Haist} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrea_Giralt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Paul_Williams} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Meredith} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Lane} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sam_Niedbala} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mona_update} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sameer_Berry} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mike} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_larson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_paula} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Robert_Buechel} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_James_Bausano} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_John_Norris} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Trish_Pavlecich} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Lee_O_Donovan} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kristen_Hlozek} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Matty_Vee} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dan_Riley} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Bucky_Markus} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrew_Beinbrink} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Christian_Chasmer} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kyle_Brown} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Doug_Lorenzen} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Dranginis} alt="" className="image-8 slide-img"/></div>
          </Slider>
          <Slider {...settings} className="div-block-26 slider-b w-clearfix" asNavFor={this.state.nav3} ref={slider => (this.slider2 = slider)}>
            <div className="div-block-28 grow"><img src={_Matt_McCord} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jon_Carder} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Chris_Hoffman} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Blake_Jendrusch} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jeremy_Schumann} alt="" className="image-12 slide-img"/></div>
            <div className="div-block-28 grow jordan"><img src={_Jordan_Ames} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ghaleb_Hamdan} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Ostrowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Anand_Bhatt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Pete_Janda} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Adam_Eidelson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jonathan_Balleras} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Weiss} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Mark_Tholking} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Wojciechowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kevin_Martignetti} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Peter_Haist} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrea_Giralt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Paul_Williams} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Meredith} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Lane} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sam_Niedbala} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mona_update} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sameer_Berry} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mike} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_larson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_paula} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Robert_Buechel} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_James_Bausano} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_John_Norris} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Trish_Pavlecich} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Lee_O_Donovan} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kristen_Hlozek} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Matty_Vee} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dan_Riley} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Bucky_Markus} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrew_Beinbrink} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Christian_Chasmer} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kyle_Brown} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Doug_Lorenzen} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Dranginis} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
          </Slider>
          <Slider {...settings} className="div-block-26 slider-c w-clearfix" asNavFor={this.state.nav4} ref={slider => (this.slider3 = slider)}>
            <div className="div-block-28 grow"><img src={_Jon_Carder} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Chris_Hoffman} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Blake_Jendrusch} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jeremy_Schumann} alt="" className="image-12 slide-img"/></div>
            <div className="div-block-28 grow jordan"><img src={_Jordan_Ames} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ghaleb_Hamdan} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Ostrowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Anand_Bhatt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Pete_Janda} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Adam_Eidelson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jonathan_Balleras} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Eric_Weiss} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Mark_Tholking} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Wojciechowski} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kevin_Martignetti} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Peter_Haist} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrea_Giralt} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Paul_Williams} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Meredith} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Lane} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sam_Niedbala} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mona_update} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Sameer_Berry} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_mike} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_larson} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_paula} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dr_Robert_Buechel} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_James_Bausano} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_John_Norris} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Trish_Pavlecich} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Lee_O_Donovan} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kristen_Hlozek} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Matty_Vee} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Dan_Riley} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Bucky_Markus} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Andrew_Beinbrink} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Christian_Chasmer} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Kyle_Brown} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Doug_Lorenzen} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Ryan_Dranginis} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={_Matt_McCord} alt="" className="image-8 slide-img"/></div>
        </Slider>
        </div>
        <div className="div-block-24">
        <Slider {...textSlide} className="div-block-25" asNavFor={this.state.nav1} ref={slider => (this.slider4 = slider)}>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Jon Carder<br/></h2>
              <p className="paragraph">Co-Founder / CEO <br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Chris Hoffman<br/></h2>
              <p className="paragraph">Head of Customer Loyalty<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Blake Jendrusch<br/></h2>
              <p className="paragraph">Supply Chain Manager<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Jeremy Schumann</h2>
              <p className="paragraph">Head of Brand</p>
            </div>
            <div id="text-slide" className="slide-content jordan">
              <h2 className="heading-4 backed">Jordan Ames</h2>
              <p className="paragraph">GM of Ambassador Program</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Ghaleb Hamdan<br/></h2>
              <p className="paragraph">Director of Quality Assurance/Manufacturing Engineer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Eric Ostrowski</h2>
              <p className="paragraph">VP of Hardware Engineering and Science</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Anand Bhatt</h2>
              <p className="paragraph">Data Analytics Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Pete Janda</h2>
              <p className="paragraph">Fractional CFO</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Adam Eidelson</h2>
              <p className="paragraph">Product Associate</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Jonathan Balleras<br/></h2>
              <p className="paragraph">Front End Developer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Eric Weiss</h2>
              <p className="paragraph">Product Advisor<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Mark Tholking</h2>
              <p className="paragraph">CTO</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Ryan Wojciechowski</h2>
              <p className="paragraph">Research Assistant</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Kevin Martignetti</h2>
              <p className="paragraph">Director of Talent</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Peter Haist</h2>
              <p className="paragraph">Mechanical Engineer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Andrea Giralt</h2>
              <p className="paragraph">VP of Manufacturing &amp; Supply Chain</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Paul Williams</h2>
              <p className="paragraph">R&amp;D Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Meredith Corbett</h2>
              <p className="paragraph">Executive Assistant</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Lane</h2>
              <p className="paragraph">LFA Dev/Mfg. Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Sam Niedbala</h2>
              <p className="paragraph">LFA Dev/Mfg. Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Mona Ezzat-Velinov, M.D.</h2>
              <p className="paragraph">Medical Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Sameer Berry</h2>
              <p className="paragraph">Medical Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Mike Moreno, M.D.</h2>
              <p className="paragraph">Medical Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. David Larson, M.D.</h2>
              <p className="paragraph">Chief Medical Officer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Paula Sturm</h2>
              <p className="paragraph">Medical and Nutritional Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Robert Buechel</h2>
              <p className="paragraph">BD Advisor - Chiropractor channel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">James Bausano</h2>
              <p className="paragraph">Research Assistant</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">John Norris</h2>
              <p className="paragraph">FDA Advisor</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Trish Pavlecich</h2>
              <p className="paragraph">Copy Writer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Lee O&#x27;Donovan</h2>
              <p className="paragraph">VP of Marketing</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Kristen Hlozek<br/></h2>
              <p className="paragraph">Medical Advisor / Clinical Trial Advisor<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Matty Vee</h2>
              <p className="paragraph">Business Development - Keto</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dan Riley</h2>
              <p className="paragraph">Business Development (Doctors, Med Spas)</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Bucky Markus<br/></h2>
              <p className="paragraph">Business Development - Corporate Wellness <br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Andrew Beinbrink<br/></h2>
              <p className="paragraph">Business Development - Athletes, schools<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Christian Chasmer<br/></h2>
              <p className="paragraph">Partner / COO<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Kyle Brown<br/></h2>
              <p className="paragraph">Director of BD (Gyms, Nutritionists, Trainers)<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Doug Lorenzen<br/></h2>
              <p className="paragraph">Finance &amp; Investor Relations<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Ryan Dranginis<br/></h2>
              <p className="paragraph">Growth / Analytics<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Jesus Gonzalez</h2>
              <p className="paragraph">Chief Scientist<br/></p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Matt McCord</h2>
              <p className="paragraph">Co-founder / Innovation Director<br/></p>
            </div>
          </Slider>
          <div className="div-block-46"><img src={prev} id="prev" height="50" alt="" className="image-14"/><img src={next} id="next" height="50" alt=""/></div>
        </div>
      </div>
    </div>
    <div className="w-embed w-script">
    </div>
    <div id="data-policy" className="cream-bg data"></div>
  </div>
  <div id="join-waitlist" className="join-waitlist">
    <div className="container-29 w-container">
      <div className="div-block-53 covid">
        <h2 className="heading">Join the <span className="text-span-6">waitlist</span><br/></h2>
        <img src={Icon} alt="" className="selec-bg"/><img src={Icon_checkbox} alt="" className="img-check"/>
        <div className="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" className="form-3 w-clearfix">
            <input type="email" className="text-field-3 w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Email Address" id="email-2" required=""/>
            <input type="submit" value="Join Waitlist" data-wait="Please wait..." className="dark-bt join-bt w-button"/></form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <h4 className="heading-60 subs-number">We’ll notify you as soon as test kits become available in your country.<span className="subs-first">‍</span></h4>
      </div>
      <div className="div-block-139">
        <div className="html-embed-4 sub-form w-embed w-script">
          <form id="email_signup" className="klaviyo_styling klaviyo_gdpr_embed_MXegL8" action="//manage.kmail-lists.com/subscriptions/subscribe" data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank" novalidate="novalidate">
            <input type="hidden" name="g" value="MXegL8"/>
            <input type="hidden" name="$fields" value="country,cards"/>
            <input type="hidden" name="$list_fields" value="$consent"/>
            <div className="klaviyo_field_group">
              <input className="" type="email" name="email" id="k_id_email" placeholder="Enter Your Email Address"/>
              <select id="consent-country" className="rounded" name="country">
                <option value="">Select your country</option><option value="United States">United States</option><option value="Afghanistan">Afghanistan</option><option value="Åland Islands">Åland Islands</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">AngolaAnguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">BahamasBahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">CambodiaCameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'ivoire">Cote D'ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option><option value="Korea, Republic of">Korea, Republic of</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macao">Macao</option> <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall Islands">Marshall Islands</option> <option value="Martinique">Martinique</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mayotte">Mayotte</option> <option value="Mexico">Mexico</option> <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> <option value="Moldova, Republic of">Moldova, Republic of</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Montserrat">Montserrat</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Myanmar">Myanmar</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="Netherlands Antilles">Netherlands Antilles</option> <option value="New Caledonia">New Caledonia</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="Niue">Niue</option> <option value="Norfolk Island">Norfolk Island</option> <option value="Northern Mariana Islands">Northern Mariana Islands</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Pitcairn">Pitcairn</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Puerto Rico">Puerto Rico</option> <option value="Qatar">Qatar</option> <option value="Reunion">Reunion</option> <option value="Romania">Romania</option> <option value="Russian Federation">Russian Federation</option> <option value="Rwanda">Rwanda</option> <option value="Saint Helena">Saint Helena</option> <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> <option value="Saint Lucia">Saint Lucia</option> <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon Islands">Solomon Islands</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syrian Arab Republic">Syrian Arab Republic</option> <option value="Taiwan, Province of China">Taiwan, Province of China</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> <option value="Thailand">Thailand</option> <option value="Timor-leste">Timor-leste</option> <option value="Togo">Togo</option> <option value="Tokelau">Tokelau</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United Kingdom">United Kingdom</option> <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Venezuela">Venezuela</option> <option value="Viet Nam">Viet Nam</option> <option value="Virgin Islands, British">Virgin Islands, British</option> <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> <option value="Wallis and Futuna">Wallis and Futuna</option> <option value="Western Sahara">Western Sahara</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option></select>
              <input type="number" id="consent-card" name="cards" min="1" className="rounded" placeholder="How many test kits would you like?"/>
              <div className="agee-check">
                <label className="agree-label">
      	<input checked type="checkbox" name="agree" className="agree"/><p className="subsc subsca">By submitting this form you agree to our <a href="/terms-of-service">terms of service</a> and <a href="/privacy-policy">privacy policy</a></p>
      </label>
              </div>
            </div>
            <div className="klaviyo_messages">
              <div className="success_message"></div>
              <div className="error_message"></div>
            </div>
            <div className="klaviyo_form_actions">
              <div className="cover"></div>
              <button type="submit" className="dark-bt klaviyo_submit_button">Join waitlist</button> </div>
          </form>
          
          
        </div>
        <div className="w-embed w-script">
        </div>
        <div className="sub-thank">
          <h3 className="heading-66">You are officially on the waitlist, which is growing quickly.</h3>
          <p className="paragraph-27">Give your family and friends a heads up to reserve their place in line:</p>
          <div className="div-block-140">
            <a href="http://www.facebook.com/share.php?u=https://vesselhealth.com/coronavirus" target="_blank" className="w-inline-block w-clearfix">
              <img src={fb} width="48" height="48" alt="" className="image-36"/></a>
              <a href="https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20waitlist%20for%20Vessel&#x27;s%20new%20at-home COVID-19%20antibody%20test.%20They&#x27;re%20in%20clinical%20trials,%20with approval%20coming%20soon%20(knock%20on%20wood).%20Reserve%20your%20spot%20on%20the%20waitlist.%20https%3A%2F%2Fwww.vesselhealth.com/coronavirus" target="_blank" className="w-inline-block w-clearfix">
                <img src={tw} width="48" height="48" alt="" className="image-36"/></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://vesselhealth.com/coronavirus" target="_blank" className="w-inline-block w-clearfix">
                  <img src={li} width="48" height="48" alt="" className="image-36"/></a>
                  <a href="mailto:?subject=Vessel%20Health%20Coronavirus%20Testing&amp;body=I%20just%20joined%20the%20waitlist%20for%20Vessel&#x27;s%20new%20at-home COVID-19%20antibody%20test.%20They&#x27;re%20in%20clinical%20trials,%20with approval%20coming%20soon%20(knock%20on%20wood).%20Reserve%20your%20spot%20on%20the%20waitlist.%20https%3A%2F%2Fwww.vesselhealth.com/coronavirus" target="_blank" className="w-inline-block w-clearfix">
                <img src={em} width="48" height="48" alt="" className="image-36"/>
                </a>
                </div>
        </div>
        <div className="w-embed w-script">
        </div>
      </div>
    </div>
    <div className="green-bg data"></div>
  </div>
  <div className="question">
    <div className="container-18 w-container">
      <div className="faq-testing">
        <h2 className="heading">Questions</h2>
        <div className="qs-list">
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="7bdee994-d2e3-da14-351f-66dc8d39cfca" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">01</p>
                <h3 className="heading-46">How do I take the test?<br/></h3>
                <img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Simply follow these steps:<br/>• Step 1 - Download the Vessel app.<br/>• Step 2 - Complete the brief questionnaire. <br/>• Step 3 - Watch the one-minute video explaining how the test works.<br/>• Step 4 - Apply one (1) drop of blood to the test card. A lancet is provided to prick your finger.<br/>• Step 5 - Apply two (2) drops of buffer solution, which is provided in the test kit.<br/>• Step 6 - Wait 10 minutes; a timer is provided in the Vessel app.<br/>• Step 7 - Scan the test card with the Vessel app.<br/>• Step 8 - Once you scan the test card, you will be connected with a medical professional who will review your results and provide you with next steps via Vessel’s telehealth platform.</p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="7949ae46-7442-91e4-03a4-61d9bd09c3ab" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">02</p>
                <h3 className="heading-46">How does the antibody (serology) test work?<br/></h3>
                <img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Our test works by measuring two different types of antibodies (IgM and IgG), which are immunoglobulins (proteins) that your immune system creates in response to an infection. Antibodies are unique and specific to each pathogen, and they are able to bind to specific parts of the COVID-19 virus activating our immune system to neutralize and destroy the virus and infected cells.<br/>‍<br/>IgM antibodies are created first. They take about 7 days after infection to show up at detectable levels in your bloodstream, and they become undetectable about 2 weeks after symptoms resolve.  Because of this timing, they signify an acute (recent) infection, and healthcare professionals often use blood IgM levels to detect an acute infection.<br/>‍<br/>IgG antibodies are created later, with detectable levels about 3-6 weeks after infection,, and typically remain at detectable levels in your blood for years. IgG is typically the antibody signaling immunity from the associated pathogen. For example, after getting a vaccination, the body continues to make IgG antibodies for years to continue to protect us against that infectious disease. Furthermore, with repeat infections, IgG rather than IgM is the predominant antibody created by our immune system.<br/>‍<br/>The same type of immunity can be acquired through an actual infection. For example, after getting chickenpox, the immune system creates IgM antibodies during the acute infection, and then long term IgG antibodies to protect us against the varicella virus in the future.  There are also varicella vaccines that can also lead to long-term immunity through triggering the production of IgG antibodies. <br/>One way we measure immunity is by measuring blood titers of IgG antibody levels. However keep in mind that we don’t yet know for sure if IgG antibodies against COVID-19 signifies immunity. Initial research is promising, but more research is still needed to validate this assumption.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="d00ece62-cc1a-23a9-1351-94cd52442fb6" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">03</p>
                <h3 className="heading-46">What are the different results I could get and what do they mean?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">On your test, there are several types of results you can get:<br/>• If only IgM antibodies are detected, this suggests a new infection from the virus in the past few weeks.<br/>•  If IgM and IgG antibodies are detected, this signifies both an acute infection from the virus in the past 3-6 weeks, and the development of IgG antibodies, the body’s form of long-term protection.<br/>• If IgM antibodies are not detected, and only IgG antibodies are detected, this signifies a previous infection more than four weeks ago and possible long-term immunity.<br/>• If no antibodies are detected, this signifies that you do probably have not had an infection with the virus, or that you were exposed recently and are in the incubation period of 1-2 weeks when you have the virus but have not yet produced antibodies, or that you may have a problem with your immune system producing antibodies.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="a706febf-3ec6-6da9-b4ae-030a6edee7cc" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">04</p>
                <h3 className="heading-46">What supplies do I need to take this test?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">We provide everything you need to test from home. You clean your finger with an alcohol swab, prick it with a sterile lancet (just like diabetics do), and collect 1 - 2 drops of blood with the plastic pipette. You then 1 full drop of blood and 2 drops of buffer solution to the designated area of the test card, wait 10 minutes, scan the test card with the Vessel app, and get instant results and recommendations from one of our telehealth providers. The Vessel app has easy to follow step by step video and text instructions to help guide you through each step of the process.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="6c9fcfeb-1f8c-4846-c91f-2a3b83dec362" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">05</p>
                <h3 className="heading-46">How quickly will I get my results?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">The test results will be ready in 10 minutes, however you may need to wait slightly longer before you are connected to one of our telehealth providers to go over your results.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="39906395-5593-2ad4-9458-f6394457021d" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">06</p>
                <h3 className="heading-46">Can this test tell me if I am immune to Coronavirus?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Likely. While this hasn’t been proven yet with COVID-19, the finding of detectable IgG antibodies and no detectable IgM antibodies is what clinicians use to detect immunity. For example, your doctor might check Hepatitis A IgG antibodies to confirm that you are immune to Hepatitis A from either a prior infection or prior vaccination. <br/>‍<br/>If you were to have a test result showing positive IgG antibodies and negative IgM antibodies, you are likely protected against re-infection. Again this has not yet been proven and more research is needed to fully answer this question.<br/>‍<br/>It is also possible that in the future COVID-19 could mutate (slightly change its structure) in such a way that the IgG antibodies your body created initially no longer work.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="fe53188d-5375-6460-0420-0202993f153b" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">07</p>
                <h3 className="heading-46">If I test negative, can I go back to work?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">If you test negative, it means that you probably have not yet been exposed to the virus, were infected in the past 7 days, or that there is a problem with your immune system from a pre-existing disease process or medication.  Therefore if you test negative, it’s best to assume you are still at risk and should continue social isolation to protect yourself and others.<br/>‍<br/>If you test IgG positive, IgM negative you can likely ease up on social distancing and go back to work however we still need more research to confirm this (as explained above).  As always, follow the guidance of your healthcare professional who will stay up to date on CDC guidelines.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="b8431ea8-2a23-3795-1df8-5bef9cbf9a26" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">08</p>
                <h3 className="heading-46">Is the test accurate compared to clinical lab testing?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">The accuracy of tests is described through the terms sensitivity and specificity. <br/>‍<br/>Sensitivity measures the proportion of actual positives that are correctly identified as such by the test in question (e.g. the percentage of COVID-19 infected people who are currently testing positive).<br/>‍<br/>Specificity measures the proportion of actual negatives that are correctly identified as such by the test in question (e.g., the percentage of healthy people who are correctly identified by the test result as not having COVID-19).<br/>‍<br/>Currently, RT-qPCR testing using a <a href="https://www.youtube.com/watch?v=DVJNWefmHjE" target="_blank">properly connected nasopharyngeal swab<span className="cit-number">[1]</span></a> is the gold standard, however the accuracy and predictive value of this type of testing has not been systematically evaluated, and the sensitivity of testing likely depends on the precise test being used as well as the type and quality of specimen obtained.  However until we have a more accurate way of detecting true positives and true negatives, we will use RT-qPCR testing as the “gold standard” to which to compare other tests.<br/>‍<br/>Now, onto the question of the accuracy of the newer serologic tests that can be read through the Vessel app.<br/>‍<br/>While each test card is slightly different, the test card that we ship directly to our users had a sensitivity of 93.8% and specificity of 95.6%, when tested at 2 Chinese hospitals in a total of 128 COVID19 positive patients, and 250 COVID19 negative patients (as detected by RT-qPCR).<br/>‍<br/>This means that 93.8% of the people who had a positive IgM antibody test result also had a positive RT-qPCR result), and that 95.6% of people who had a negative IgM antibody test also had a negative RT-qPCR test result.<br/><br/><span className="citation">1. https://www.youtube.com/watch?v=DVJNWefmHjE</span><br/><br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="f4563d7e-1749-14c9-2e87-2ac4a510988d" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">09</p>
                <h3 className="heading-46">How much does the app and antibody test cost?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">The Vessel app is free. The test card will be sold at cost and most likely will be eligible for insurance reimbursement.  There is also a telemedicine service to review your results which is also most likely covered by your insurance.  When you create an account on our website or inside the app we will check that for you.  If your insurance does not cover it you will be billed directly from the telemedicine provider and shown the cash pay price upfront.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="6c89c47e-8a60-64f6-8ac0-85167777d35c" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">10</p>
                <h3 className="heading-46">Who should take this test?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">We recommend you take this test if you:<br/>• Currently show any symptoms of COVID-19 such as a fever, cough, fatigue, muscle pains, or reduced appetite.<br/>• Previously had symptoms and think you may have had an infection with COVID-19 in the past.<br/>• Are curious to know if you&#x27;re one of the people who had a prior infection but no symptoms.<br/><br/>Because there are so many potential benefits of testing, perhaps a better way to phrase this question is who shouldn&#x27;t take this test.  If you’re experiencing severe symptoms such as difficulty breathing or light-headedness, skip this test and seek medical attention right away to evaluate if you need hospitalization.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="d9742a7a-84d6-168a-f4da-0f67bd875a39" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">11</p>
                <h3 className="heading-46">I was in contact with someone who is now showing symptoms. Should I take this test?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Yes, because the symptoms and severity of COVID-19 infection vary greatly ranging from no symptoms to severe symptoms, testing can help identify if you have been infected in the past.  Keep in mind that if your results are IgM and IgG negative, you may need to test again in 7-14 days as you may get a negative result if you are in the beginning of the incubation period (the period after infection but before you develop symptoms).<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="e64ae21d-8444-02a9-73b4-d48e82ee582e" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">12</p>
                <h3 className="heading-46">Who will have access to my test results?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">We are required to report positive cases to local, state, and federal public health agencies. We will not report to your insurance company or healthcare provider, aside from the independent telehealth doctor that will review your results.<br/>‍<br/>We adhere to an open standard to CDC/PHE/WHO in a universal effort to understand the sero-epidemiology of COVID-19. See our <a href="#data-policy">Data Policy</a> here.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="843efc21-9c85-3ec4-1e10-94fc16c3cbf4" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">13</p>
                <h3 className="heading-46">How many tests are going to be available?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">This is a worldwide pandemic, which is why we’ve secured manufacturing for hundreds of thousands of test kits per day and are now seeking regulatory approval around the world. We have partnered with the xPrize Pandemic Alliance, Anthem Blue Cross Blue Shield, and Doc.ai on clinical trials to verify that antibody tests can be safely and accurately administered at home. We’re also working with UCSF to validate the accuracy of various different test cards, which should be completed by the end of April 2020. Once approved we will be offering test cards for sale on VesselHealth.com. To be notified when Vessel is available in your country <span onClick={() => scrollTo('#join-waitlist')} >join our waitlist here</span>.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="052cbc40-5d64-40fd-e43f-f98cacd1c2b7" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">14</p>
                <h3 className="heading-46">Will this test be available in all 50 states?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Once we receive the appropriate regulatory approvals we will update this information.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="b5c37e55-e4dd-2db4-11c8-2492d8f4e34b" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">15</p>
                <h3 className="heading-46">Is the app available outside the US?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">Once we receive the appropriate regulatory approvals, yes.<br/></p>
            </div>
          </div>
          <div className="div-block-98">
            <div className="div-block-97">
              <div data-w-id="f84c907f-8f88-3df5-64a8-eaf0f0833322" className="accordion-trigger w-clearfix">
            <p className="paragraph-18 number">16</p>
                <h3 className="heading-46">Where can I find general COVID-19 (novel coronavirus) information?<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
              <p className="p-qs paragraph">CDC webpages:<br/> <br/>General: <a href="https://www.cdc.gov/COVID19" target="_blank">https://www.cdc.gov/COVID19</a> <br/>Healthcare Professionals: <a href="https://www.cdc.gov/coronavirus/2019-nCoV/guidance-hcp.html" target="_blank">https://www.cdc.gov/coronavirus/2019-nCoV/guidance-hcp.html</a> <br/>Information for Laboratories: <a href="https://www.cdc.gov/coronavirus/2019-nCoV/guidance-laboratories.html" target="_blank">https://www.cdc.gov/coronavirus/2019- nCoV/guidance-laboratories.html</a> Laboratory Biosafety: <a href="https://www.cdc.gov/coronavirus/2019-nCoV/lab-biosafety-guidelines.html" target="_blank">https://www.cdc.gov/coronavirus/2019- nCoV/lab-biosafety-guidelines.html</a> <br/>Isolation Precautions in Healthcare Settings: <a href="https://www.cdc.gov/coronavirus/2019-ncov/infection-control/controlrecommendations.html" target="_blank">https://www.cdc.gov/coronavirus/2019-ncov/infection-control/controlrecommendations.html</a> <br/>Specimen Collection: <a href="https://www.cdc.gov/coronavirus/2019-nCoV/guidelines-clinical-specimens.html" target="_blank">https://www.cdc.gov/coronavirus/2019- nCoV/guidelines-clinical-specimens.html</a> Infection Control: <a href="https://www.cdc.gov/coronavirus/2019-ncov/infection-control/index.html" target="_blank">https://www.cdc.gov/coronavirus/2019- ncov/infection-control/index.html</a> <br/><br/>FDA webpages:<br/> <br/>General: <a href="http://www.fda.gov/novelcoronavirus" target="_blank">www.fda.gov/novelcoronavirus</a> <br/>EUAs: <a href="https://www.fda.gov/medical-devices/emergencysituations-medical-devices/emergency-use-authorizations" target="_blank">https://www.fda.gov/medical-devices/emergencysituations-medical-devices/emergency-use-authorizations</a><br/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  </Layout>
	</>
  )
	}
}

export default coronaPage