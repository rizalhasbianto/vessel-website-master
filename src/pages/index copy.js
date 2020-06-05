import React, { Component} from "react"
import { Link } from "gatsby"
import Slider from "react-slick";

import Layout from "../components/layout"
import SEO from "../components/seo"

import close from "../images/close.png"
import white_logo from "../images/white-logo.png"
import main_top_mob from "../images/main-top_mob.png"
import vessel_top from "../images/vessel_top.png"
import testcard from "../images/testcard.png"
import easy_test from "../images/easy-test.png"
import instant from "../images/instant.png"
import real_pay from "../images/real-pay.png"
import scan from "../images/scan.png"
import learn from "../images/learn.png"
import food from "../images/food.png"
import supplements from "../images/supplements.png"
import lifestyle from "../images/lifestyle.png"
import plan from "../images/plan.png"
import improve from "../images/improve.png"
import mt_Logo from "../images/mt_Logo.png"
import test_strip from "../images/test-strip.png"
import paula from "../images/18-paula.png"
import Jesus_Gonzalez from "../images/3-Jesus-Gonzalez.jpg"
import larson from "../images/19-larson.png"
import maryam from "../images/maryam.png"
import linda from "../images/linda.png"
import mona_update from "../images/22-mona-update.png"
import heather from "../images/heather.png"
import mike from "../images/20-mike.png"
import nadia from "../images/nadia.png"
import prev from "../images/prev.png"
import next from "../images/next.png"
import Image_4 from "../images/Image-4.png"
import vit_ang_ps from "../images/vit-ang_ps.png"

class homePage extends Component {
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
      // Tour and Compare animation
      var learnContent = document.getElementsByClassName("learn");
      var foodContent = document.getElementsByClassName("food");
      var supContent = document.getElementsByClassName("sup");
      var lifeContent = document.getElementsByClassName("life");
      var planContent = document.getElementsByClassName("plan");
      var improveContent = document.getElementsByClassName("improve");
      var lastScrollTop = 0;
      function handleScrollBody() {
        // Add Height for tour section
        var scan = document.getElementsByClassName("scan");
        var container = document.getElementsByClassName("container-6");
        var scanHeight = scan[0].offsetHeight;
        container[0].style.height = scanHeight+"px";

        var scroll = window.pageYOffset;
        var winHeight = window.screen.height / 2;
        var scrollMiddle  = window.pageYOffset + winHeight;
        var posLab = document.getElementById("labpos").getBoundingClientRect().top + scroll;
        var posLabLast = document.getElementById("labposlast").getBoundingClientRect().top + scroll;
        var line = scrollMiddle - posLab;
        var lineElem = document.getElementsByClassName("line-vertical");
        
        var learn = document.getElementById("learn").getBoundingClientRect().top + scroll;
        var food = document.getElementById("food").getBoundingClientRect().top + scroll;
        var sup = document.getElementById("sup").getBoundingClientRect().top + scroll;
        var life = document.getElementById("life").getBoundingClientRect().top + scroll;
        var plan = document.getElementById("plan").getBoundingClientRect().top + scroll;
        var improve = document.getElementById("improve").getBoundingClientRect().top + scroll;
        var pricing = document.getElementById("pricing").getBoundingClientRect().top + scroll;
        var pricingElem = document.getElementsByClassName("_1");
        var accuracy = document.getElementById("accuracy").getBoundingClientRect().top + scroll;
        var accuracyElem = document.getElementsByClassName("_2");
        var results = document.getElementById("results").getBoundingClientRect().top + scroll;
        var resultsElem = document.getElementsByClassName("_3");
        var chemistry = document.getElementById("chemistry").getBoundingClientRect().top + scroll;
        var chemistryElem = document.getElementsByClassName("_4");
        var equipment = document.getElementById("equipment").getBoundingClientRect().top + scroll;
        var equipmentElem = document.getElementsByClassName("_5");
        var process = document.getElementById("process").getBoundingClientRect().top + scroll;
        var processElem = document.getElementsByClassName("_6");
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
        if (scrollMiddle > posLab && scrollMiddle < posLabLast) {lineElem[0].style.height = line+'px';}
        if (scrollMiddle > pricing) {pricingElem[0].classList.add('active')}
        else {pricingElem[0].classList.remove('active')}
        if (scrollMiddle > accuracy) {accuracyElem[0].classList.add('active')}
        else {accuracyElem[0].classList.remove('active')}
        if (scrollMiddle > results) {resultsElem[0].classList.add('active')}
        else {resultsElem[0].classList.remove('active')}
        if (scrollMiddle > chemistry) {chemistryElem[0].classList.add('active')}
        else {chemistryElem[0].classList.remove('active')}
        if (scrollMiddle > equipment) {equipmentElem[0].classList.add('active')}
        else {equipmentElem[0].classList.remove('active')}
        if (scrollMiddle > process) {processElem[0].classList.add('active')}
        else {processElem[0].classList.remove('active')}
      }
      window.addEventListener('scroll', handleScrollBody);
      // Add heading moving animation
      var hOne = document.getElementsByClassName("text-change-1");
      var hTwo = document.getElementsByClassName("text-change-2");  
      var hThree = document.getElementsByClassName("text-change-3");
      var hFour = document.getElementsByClassName("text-change-4");
      var hFive = document.getElementsByClassName("text-change-5");
      var hSix = document.getElementsByClassName("text-change-6");
      var hSeven = document.getElementsByClassName("text-change-7");
      var hEight = document.getElementsByClassName("text-change-8");
      function step() {
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
        window.setTimeout(function(){ hFive[0].classList.remove('down', 'active');hSix[0].classList.add('active'); }, 10000);
        window.setTimeout(function(){ hSix[0].classList.add('down'); }, 11000);
        window.setTimeout(function(){ hSix[0].classList.remove('down', 'active');hSeven[0].classList.add('active'); }, 12000);
        window.setTimeout(function(){ hSeven[0].classList.add('down'); }, 13000);
        window.setTimeout(function(){ hSeven[0].classList.remove('down', 'active');hEight[0].classList.add('active'); }, 14000);
        window.setTimeout(function(){ hEight[0].classList.add('down'); }, 15000);
        window.setTimeout(function(){ hEight[0].classList.remove('down', 'active'); }, 16000);
        window.setTimeout(function(){ window.requestAnimationFrame(step); }, 16000);
      }
      window.requestAnimationFrame(step);
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2,
        nav3: this.slider3,
        nav4: this.slider4,
        nav5: this.slider5,
        nav6: this.slider6
      });
      // slick trigger click
      function nextFunction() {
        var next = document.getElementsByClassName("slick-prev");
        var i;
          for (i = 0; i < next.length; i++) {
            next[i].click();
          }
      }
      function prevFunction() {
        var next = document.getElementsByClassName("slick-next");
        var i;
          for (i = 0; i < next.length; i++) {
            next[i].click();
          }
      }
      var nextElem = document.getElementById("next");
      var prevElem = document.getElementById("prev");
      nextElem.addEventListener("click", nextFunction);
      prevElem.addEventListener("click", prevFunction);
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
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: '10px',
  focusOnSelect: true,
  centerMode: false,
    };

	return (
	<Layout>
    <SEO title="Home" />
  <div className="main-section">
    <div className="top"><img src={main_top_mob} alt="" className="image-16"/>
      <div className="container-8 w-container">
        <div className="div-block-2">
          <div className="div-block-3">
            <div className="word-change">
              <h1 className="heading change"> In pursuit<br/>of better</h1>
              <div className="text-wrap">
                <div className="text-change-1 heading">focus</div>
                <div className="text-change-2 heading">energy</div>
                <div className="text-change-3 heading">immunity</div>
                <div className="text-change-4 heading">weight</div>
                <div className="text-change-5 heading">appearance</div>
                <div className="text-change-6 heading">sleep</div>
                <div className="text-change-7 heading">fitness</div>
                <div className="text-change-8 heading">living</div>
              </div>
            </div>
            <p className="paragraph main home">Meet Vessel, the in-home wellness tracker that instantly and accurately uncovers what your body really needs.</p><a href="wellness-test-cards.html" className="dark-bt main-section-bt w-button">Pre-order</a>
            <p className="paragraph main disclaimer">Looking for the Coronavirus test? <a href="coronavirus.html">Click here</a></p>
          </div>
        </div>
      </div>
      <div className="div-block home"><img src={vessel_top} alt="" className="image home"/></div>
    </div>
  </div>
  <div className="works"><img src={testcard} height="244" alt="" className="image-17"/>
    <div className="cream-bg home works"></div>
    <div className="container w-container">
      <div className="div-block-4" id="div-block-4">
        <h2 className="heading h-works">How it works</h2>
        <p className="paragraph h-works">Your personal lab and nutrition coach all in your pocket.&nbsp; Finally, an app that answers why we feel the way we feel. <br/></p>
      </div>
      <div className="div-block-5">
        <div className="works-block _1st"><img src={easy_test} alt="" className="image-4"/>
          <h4 className="heading-23">01</h4>
          <h3 className="heading-26">Easy test</h3>
          <p className="paragraph how-it-works-col">Simply pee on the test strip, wait two minutes, and then scan it using the Vessel app to receive your personal wellness score. <br/></p>
        </div>
        <div className="works-block _2nd"><img src={instant} alt="" className="image-3"/>
          <h4 className="heading-23">02</h4>
          <h3 className="heading-26">Instant results</h3>
          <p className="paragraph how-it-works-col">Review your personalized wellness plan and instantly understand what nutrition and&nbsp; lifestyle changes will have the biggest impact. <br/></p>
        </div>
        <div className="works-block _3rd"><img src={real_pay} alt="" className="image-2"/>
          <h4 className="heading-23">03</h4>
          <h3 className="heading-26">Real payoff</h3>
          <p className="paragraph how-it-works-col">Track your scores and get valuable recommendations by testing daily, weekly or monthly. It’s never been easier to understand and take control of your well being.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="section-sticky">
    <div className="section-sticky__wrap section-sticky__wrap-progress">
      <div id="scan" className="section-triggers section-triggers__scroll-down">
        <div id="learn" className="section-trigger section-trigger__0"></div>
        <div id="food" data-w-id="45e79d29-7007-3718-741c-79627656f8d8" className="section-trigger section-trigger__1"></div>
        <div id="sup" data-w-id="bf5ef2ae-5454-dd23-572c-fd46c798f9ab" className="section-trigger section-trigger__2"></div>
        <div id="life" data-w-id="bf5ef2ae-5454-dd23-572c-fd46c798f9ac" className="section-trigger section-trigger__3"></div>
        <div id="plan" data-w-id="bf5ef2ae-5454-dd23-572c-fd46c798f9ad" className="section-trigger section-trigger__4"></div>
        <div id="improve" data-w-id="4df37794-50e1-3eff-1d9c-db9e5f5dc763" className="section-trigger section-trigger__5"></div>
        <div id="s-main_4" data-w-id="dcac4e98-e8b6-60ca-71b3-297983eb82b7" className="section-trigger section-trigger__6"></div>
      </div>
      <div className="wrap__sticky sticky sticky-5">
        <div className="div-block-41">
          <div className="div-block-47">
            <div className="container-7 w-container">
              <div className="div-block-43">
                <h2 className="heading tour">Take the tour</h2>
                <p className="paragraph main">Let us show you the way to optimize your body and your mind</p>
              </div>
            </div>
            <div className="container-6 w-container">
              <div className="scan">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <div className="text-block active">Scan</div>
                      <div className="div-block-8 active scan-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={scan} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Scan</h2>
                    <p className="paragraph">Check your health in 2 minutes. &nbsp;This little testcard is small but mighty, just pee on it for a couple of seconds, then wait 2 minutes for it to activate and then scan it with our app.</p>
                  </div>
                </div>
              </div>
              <div className="learn">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block active">Learn</div>
                      </a>
                      <div className="div-block-8 active learn-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={learn} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Learn</h2>
                    <p className="paragraph">Take&nbsp; the guesswork out of your health. Being at your best is not one dimensional. Vessel tests essential health metrics, from nutrition and hydration to toxin and stress levels to help you feel, look, and perform better - whether that's at work, at home, or at the gym.</p>
                  </div>
                </div>
              </div>
              <div className="food">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block active">Food</div>
                      </a>
                      <div className="div-block-8 active food-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={food} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Food</h2>
                    <p className="paragraph">Personalized food delivery. Browse food ranked by what will fix your nutrient deficiencies the fastest. Pick the food you'll actually eat and have it delivered by Amazon fresh in a couple of hours.</p>
                  </div>
                </div>
              </div>
              <div className="sup">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block active">Supplements</div>
                      </a>
                      <div className="div-block-8 active sup-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={supplements} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Supplements</h2>
                    <p className="paragraph">Don't feel like changing your diet? No problemo, the Vessel capsule has exactly what your body needs, nothing it doesn't, and you'll help support Vitamin Angels.</p>
                  </div>
                </div>
              </div>
              <div className="life">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block active">Lifestyle</div>
                      </a>
                      <div className="div-block-8 active sup-p"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={lifestyle} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Lifestyle</h2>
                    <p className="paragraph">Stay hydrated and reduce stress. No more guessing games about how much water to drink. We'll show you what your body needs, and if your cortisol levels are off, we can help with that too.</p>
                  </div>
                </div>
              </div>
              <div className="plan">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block active">Plan</div>
                      </a>
                      <div className="div-block-8 active plan-b"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block">Improve</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={plan} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Plan</h2>
                    <p className="paragraph">A plan for every result. Build your plan and set reminders. Want a little extra guidance or have questions? Talk to a licensed nutritionist for just $3 a min right in the app.</p>
                  </div>
                </div>
              </div>
              <div className="improve">
                <div className="div-block-9">
                  <div className="scroll-menu">
                    <div className="div-block-7">
                      <a href="#scan" className="w-inline-block">
                        <div className="text-block">Scan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#learn" className="w-inline-block">
                        <div className="text-block">Learn</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#food" className="w-inline-block">
                        <div className="text-block">Food</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#sup" className="w-inline-block">
                        <div className="text-block">Supplements</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#life" className="w-inline-block">
                        <div className="text-block">Lifestyle</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#plan" className="w-inline-block">
                        <div className="text-block">Plan</div>
                      </a>
                      <div className="div-block-8"></div>
                    </div>
                    <div className="div-block-7">
                      <a href="#improve" className="w-inline-block">
                        <div className="text-block active">Improve</div>
                      </a>
                      <div className="div-block-8 active improve-b"></div>
                    </div>
                  </div>
                  <div className="scroll-img">
                    <div className="div-block-48"></div>
                    <div className="div-block-49"></div><img src={improve} alt="" className="image-5"/></div>
                  <div className="scroll-text">
                    <h2 className="heading-30">Improve</h2>
                    <p className="paragraph">The Payoff. The best part is you can watch as your levels improve and you look, feel, and perform at your best.</p>
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
  <div className="skip-the-lab">
    <div data-w-id="8bfe05e9-f6b9-7ed1-ff21-b613c444fb53" className="inorive-trap"></div>
    <div className="green-bg lab"></div>
    <div className="container-2 w-container">
      <div className="div-block-53">
        <h2 className="heading lab">Skip the lab,<br/>not the <span className="white">accuracy.</span></h2>
      </div>
      <div data-w-id="0b256824-679c-69a0-3a68-f19aebe297bd" className="div-block-39 home" id="labpos">
        <div className="line-vertical" ></div>
        <div className="line-vertical-s shadow"></div>
        <div className="div-block-11 top-line home">
          <div className="div-block-12">
            <h2 className="heading-4 lab mobile">Traditional </h2>
            <h2 className="heading-4 lab desk">Traditional lab</h2>
          </div>
          <div className="div-block-10 vs">
            <h2 className="heading-4 lab vs home">VS.</h2>
          </div>
          <div className="div-block-13">
            <h2 className="heading-4 lab left">Vessel</h2>
          </div>
        </div>
        <div className="div-block-11 lab-child _1 home">
          <div className="div-block-12">
            <h4 className="lab-child">Pricing</h4>
            <h2 className="heading-4 lab child">$100+</h2>
            <p className="paragraph lab-child">with insurance, $1300 without.</p>
          </div>
          <div className="div-block-10 child">
            <div className="div-block-14 pertama" id="pricing"></div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Pricing</h4>
            <h2 className="heading-4 lab child right">~ $ 10</h2>
            <p className="paragraph lab-child right">with or without insurance.</p>
          </div>
        </div>
        <div className="div-block-11 lab-child _2 home">
          <div className="div-block-12">
            <h4 className="lab-child">Accuracy</h4>
            <p className="paragraph lab-child">When you measure a standard control solution in many different labs and calculate the average test result, repeated test results stay within 5-10% of that average. (Relative standard deviation between 5-10%)</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap" id="accuracy">
              <div className="div-block-14 kedua" ></div>
            </div>
          </div>
          <div className="div-block-13 w-clearfix">
            <h4 className="lab-child right">Accuracy</h4>
            <p className="paragraph lab-child right">When you measure a standard control solution many different times and calculate the average test result, repeated test results stay within 10% of that average. (Relative standard deviation in internal studies of 5-10%. We are currently working with Mount Sinai Health System to run a 3rd party verification study to independently confirm these results)</p><img src={mt_Logo} alt="" className="image-13"/></div>
        </div>
        <div className="div-block-11 lab-child _3 home" >
          <div className="div-block-12">
            <h4 className="lab-child">Results</h4>
            <h2 className="heading-4 lab child">1-2 Weeks</h2>
            <p className="paragraph lab-child">See if your levels are improving every 3 months - 1 year.</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap" id="results">
              <div className="div-block-14 ketiga" ></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Results</h4>
            <h2 className="heading-4 lab child right">2 Minutes</h2>
            <p className="paragraph lab-child right">See if your levels are improving daily, weekly or monthly.</p>
          </div>
        </div>
        <div className="div-block-11 lab-child _4 home">
          <div className="div-block-12">
            <h4 className="lab-child">Chemistry</h4>
            <p className="paragraph lab-child">Uses reagents that change color (Colorimetric), Ion Selective Electrodes, and Spectrometry</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap" id="chemistry">
              <div className="div-block-14 keempat" ></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Chemistry</h4>
            <p className="paragraph lab-child right">Uses reagents that change color (Colorimetric), and lateral flow assays.<br/></p>
          </div>
        </div>
        <div className="div-block-11 lab-child _5 home">
          <div className="div-block-12">
            <h4 className="lab-child">Equipment</h4>
            <p className="paragraph lab-child">Expensive equipment such as plate readers, mass spectrometers, chemistry analyzers, etc</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap" id="equipment">
              <div className="div-block-14 kelima" ></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Equipment</h4>
            <p className="paragraph lab-child right">Your phone + Vessel wellness card = lab</p>
          </div>
        </div>
        <div className="div-block-11 lab-child _6 home" >
          <div className="div-block-12">
            <h4 className="lab-child">Process</h4>
            <p className="paragraph lab-child">Doctor's visit, driving, and waiting rooms</p>
          </div>
          <div className="div-block-10 child">
            <div className="bullet-wrap" id="process">
              <div className="div-block-14 keenam" id="labposlast"></div>
            </div>
          </div>
          <div className="div-block-13">
            <h4 className="lab-child right">Process</h4>
            <p className="paragraph lab-child right">Test at home, scan with your phone</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="evaluates">
    <div className="container-3 w-container">
      <div className="div-block-15">
        <h2 className="heading">What Vessel <br/>evaluates</h2>
        <p className="paragraph main">A little pee goes a long way for tracking what is going on in your body from day to day.</p>
      </div>
      <div className="div-block-42">
        <div data-duration-in="300" data-duration-out="100" className="tabs w-tabs">
          <div className="tabs-menu w-tab-menu" role="tablist" id="tabmenu">
            <a data-w-tab="vitamin-b7" className="tab-link-tab-1 w-inline-block w-tab-link w--current" id="w-tabs-0-data-w-tab-0" href="#w-tabs-0-data-w-pane-0" role="tab" aria-controls="w-tabs-0-data-w-pane-0" aria-selected="true">
              <div className="text-block-19">Vitamin B7</div>
            </a>
            <a data-w-tab="zinc" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-1" href="#w-tabs-0-data-w-pane-1" role="tab" aria-controls="w-tabs-0-data-w-pane-1" aria-selected="false">
              <div className="text-block-19">Zinc</div>
            </a>
            <a data-w-tab="vitamin-b9" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-2" href="#w-tabs-0-data-w-pane-2" role="tab" aria-controls="w-tabs-0-data-w-pane-2" aria-selected="false">
              <div className="text-block-19">Vitamin B9</div>
            </a>
            <a data-w-tab="hydration" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-3" href="#w-tabs-0-data-w-pane-3" role="tab" aria-controls="w-tabs-0-data-w-pane-3" aria-selected="false">
              <div className="text-block-19">Hydration</div>
            </a>
            <a data-w-tab="vitamin-c" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-4" href="#w-tabs-0-data-w-pane-4" role="tab" aria-controls="w-tabs-0-data-w-pane-4" aria-selected="false">
              <div className="text-block-19">Vitamin C</div>
            </a>
            <a data-w-tab="cortisol" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-5" href="#w-tabs-0-data-w-pane-5" role="tab" aria-controls="w-tabs-0-data-w-pane-5" aria-selected="false">
              <div className="text-block-19">Cortisol</div>
            </a>
            <a data-w-tab="magnesium" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-6" href="#w-tabs-0-data-w-pane-6" role="tab" aria-controls="w-tabs-0-data-w-pane-6" aria-selected="false">
              <div className="text-block-19">Magnesium</div>
            </a>
            <a data-w-tab="ketones-a-b" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-7" href="#w-tabs-0-data-w-pane-7" role="tab" aria-controls="w-tabs-0-data-w-pane-7" aria-selected="false">
              <div className="text-block-19">Ketones A&amp;B</div>
            </a>
            <a data-w-tab="ph" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-8" href="#w-tabs-0-data-w-pane-8" role="tab" aria-controls="w-tabs-0-data-w-pane-8" aria-selected="false">
              <div className="text-block-19">pH</div>
            </a>
            <a data-w-tab="mercury" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-9" href="#w-tabs-0-data-w-pane-9" role="tab" aria-controls="w-tabs-0-data-w-pane-9" aria-selected="false">
              <div className="text-block-19">Mercury</div>
            </a>
            <a data-w-tab="iron" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-10" href="#w-tabs-0-data-w-pane-10" role="tab" aria-controls="w-tabs-0-data-w-pane-10" aria-selected="false">
              <div className="text-block-19">Iron</div>
            </a>
            <a data-w-tab="lead" className="tab-link-tab-1 w-inline-block w-tab-link" tabIndex="-1" id="w-tabs-0-data-w-tab-11" href="#w-tabs-0-data-w-pane-11" role="tab" aria-controls="w-tabs-0-data-w-pane-11" aria-selected="false">
              <div className="text-block-19">Lead</div>
            </a>
          </div>
          <div className="tabs-content w-tab-content" id="tabcontent">
            <div data-w-tab="Vitamin B7" className="vitamin-b7 w-tab-pane w--tab-active" id="w-tabs-0-data-w-pane-0" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-0">
              <h2 className="heading-4">Vitamin B7</h2>
              <p className="vessel">Biotin is an essential vitamin that helps your body turn the carbohydrates, fats, and proteins in the food you eat into the energy you need.</p>
              <ul className="list">
                <li className="list-item">Healthy hair, skin, and nails</li>
                <li className="list-item">Lower dangerous cholesterol particles</li>
                <li className="list-item">Balanced blood sugar and improved metabolism</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit vit-7">
                  <div className="border-vessel"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Zinc" className="zinc w-tab-pane" id="w-tabs-0-data-w-pane-1" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-1">
              <h2 className="heading-4">Zinc</h2>
              <p className="vessel">Zinc plays an important role in supporting the health to your immune system, brain, and eyes. Zinc also supports healthy pregnancies and the development of children.</p>
              <ul className="list">
                <li className="list-item">Improved immunity</li>
                <li className="list-item">Brain health</li>
                <li className="list-item">Improved vision</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit zinc">
                  <div className="boxed-vessel zinc"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Vitamin B9" className="vitamin-b9 w-tab-pane" id="w-tabs-0-data-w-pane-2" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-2">
              <h2 className="heading-4">Vitamin B9</h2>
              <p className="vessel">Folate plays a key role in methylation reactions which help to improve brain function, regulate energy levels, and reduce inflammation.</p>
              <ul className="list">
                <li className="list-item">Improved cognitive functioning</li>
                <li className="list-item">Boost mood</li>
                <li className="list-item">Reduced risk of cardiovascular disease</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit vit-b9">
                  <div className="border-vessel"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Hydration" className="hydration w-tab-pane" id="w-tabs-0-data-w-pane-3" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-3">
              <h2 className="heading-4">Hydration</h2>
              <p className="vessel">Specific gravity is a quick way to get important information about hydration status, which is critical for optimal functioning of nearly all systems in your body.</p>
              <ul className="list">
                <li className="list-item">Improved mood and cognition</li>
                <li className="list-item">Weight loss</li>
                <li className="list-item">Improved endurance and performance</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit hydration">
                  <div className="boxed-vessel hydra"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Vitamin C" className="vitamin-c w-tab-pane" id="w-tabs-0-data-w-pane-4" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-4">
              <h2 className="heading-4">Vitamin C</h2>
              <p className="vessel">Vitamin C is a powerful antioxidant that fights off free radicals, a common pathway of cellular aging and chronic disease.</p>
              <ul className="list">
                <li className="list-item">Reduced inflammation</li>
                <li className="list-item">Reduced cold risk</li>
                <li className="list-item">Reduced risk of vascular disease</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit vit-c">
                  <div className="boxed-vessel vitc-1"></div>
                  <div className="boxed-vessel vitc-2"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Cortisol" className="cortisol w-tab-pane" id="w-tabs-0-data-w-pane-5" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-5">
              <h2 className="heading-4">Cortisol</h2>
              <p className="vessel">Cortisol is an important hormone produced primarily in our adrenal glands in response to stress (physical, physiological, and emotional/mental).</p>
              <ul className="list">
                <li className="list-item">Stress resilience</li>
                <li className="list-item">Improved energy levels</li>
                <li className="list-item">Reduced inflammation</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit cortisol">
                  <div className="border-vessel"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Magnesium" className="magnesium w-tab-pane" id="w-tabs-0-data-w-pane-6" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-6">
              <h2 className="heading-4">Magnesium</h2>
              <p className="vessel">Magnesium is an essential mineral involved in supporting high quality sleep, healthy metabolism, blood pressure regulation, muscle relaxation, and more.</p>
              <ul className="list">
                <li className="list-item">Improved mood</li>
                <li className="list-item">Brain health</li>
                <li className="list-item">Physical performance</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit mag">
                  <div className="boxed-vessel mag-1"></div>
                  <div className="boxed-vessel mag-2"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Ketones A&amp;B" className="ketones-a-b w-tab-pane" id="w-tabs-0-data-w-pane-7" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-7">
              <h2 className="heading-4">Ketones A &amp; B</h2>
              <p className="vessel">These ketones can help you track how well your body has made the metabolic adaptation of burning ketones instead of sugar, which is the goal of a ketogenic diet.</p>
              <ul className="list">
                <li className="list-item">Fat loss</li>
                <li className="list-item">Improved mental clarity</li>
                <li className="list-item">Reduced oxidative stress</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit ket">
                  <div className="boxed-vessel ket-1"></div>
                  <div className="boxed-vessel ket-2"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="PH" className="ph w-tab-pane" id="w-tabs-0-data-w-pane-8" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-8">
              <h2 className="heading-4">pH</h2>
              <p className="vessel">pH is how we measure acidity and alkalinity in the body. Having the right pH is critical for the optimal functioning of hundreds of enzymes in our body.</p>
              <ul className="list">
                <li className="list-item">Improved brain function</li>
                <li className="list-item">Reduced heart disease risk factors</li>
                <li className="list-item">Preserved muscle mass</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit ph-p">
                  <div className="boxed-vessel ph"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Mercury" className="mercury w-tab-pane" id="w-tabs-0-data-w-pane-9" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-9">
              <h2 className="heading-4">Mercury</h2>
              <p className="vessel">Mercury is a toxic heavy metal that accumulates in fish. Once inside our bodies, mercury gets deposited into our tissues and causes widespread damage.</p>
              <ul className="list">
                <li className="list-item">Improved mental and emotional health</li>
                <li className="list-item">Improved mental acuity, sharpness, and memory</li>
                <li className="list-item">Improved senses of hearing and touch</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit mercury">
                  <div className="boxed-vessel mer"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Iron" className="iron w-tab-pane" id="w-tabs-0-data-w-pane-10" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-10">
              <h2 className="heading-4">Iron</h2>
              <p className="vessel">Iron is an important mineral involved in supporting healthy energy levels, facilitating DNA repair, and creating the neurotransmitter dopamine.</p>
              <ul className="list">
                <li className="list-item">Improved attentiveness</li>
                <li className="list-item">Improved energy</li>
                <li className="list-item">Improved sleep</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit iron">
                  <div className="boxed-vessel ir"></div>
                </div>
              </div>
            </div>
            <div data-w-tab="Lead" className="lead w-tab-pane" id="w-tabs-0-data-w-pane-11" role="tabpanel" aria-labelledby="w-tabs-0-data-w-tab-11">
              <h2 className="heading-4">Lead</h2>
              <p className="vessel">Lead is a toxic metal that gets deposited into many organs where it leads to a variety of dangerous problems.</p>
              <ul className="list">
                <li className="list-item">Improved mental and emotional health</li>
                <li className="list-item">Improved sleep quality</li>
                <li className="list-item">Improved immune system functioning</li>
              </ul>
              <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
                <div className="blur-vit lead">
                  <div className="boxed-vessel ld"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-51">
          <div className="div-block-50"></div>
          <div className="div-block-52 w-clearfix"><a href="wellness-test-cards.html" className="dark-bt w-button">Pre-order</a></div>
        </div>
      </div>
      <div className="div-block-55">
      <Slider {...menutab} className="slider-tabs home" asNavFor={this.state.nav6} ref={slider => (this.slider5 = slider)}>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Vitamin B7</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Vitamin B9</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Vitamin C</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Magnesium</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">pH</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Iron</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Zinc</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Hydration</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Cortisol</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Ketones A&amp;B</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Mercury</div>
          </div>
          <div className="tab-link-tab-1">
            <div className="text-block-19">Lead</div>
          </div>
        </Slider>
        <Slider {...textSlide} className="slider-content home" asNavFor={this.state.nav5} ref={slider => (this.slider6 = slider)}>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit vit-7">
                <div className="border-vessel"></div>
              </div>
            </div>
            <h2 className="heading-4">Vitamin B7</h2>
            <p className="vessel">Biotin is an essential vitamin that helps your body turn the carbohydrates, fats, and proteins in the food you eat into the energy you need.</p>
            <ul className="list">
              <li className="list-item">Healthy hair, skin, and nails</li>
              <li className="list-item">Lower dangerous cholesterol particles</li>
              <li className="list-item">Balanced blood sugar and improved metabolism</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit vit-b9">
                <div className="border-vessel"></div>
              </div>
            </div>
            <h2 className="heading-4">Vitamin B9</h2>
            <p className="vessel">Folate plays a key role in methylation reactions which help to improve brain function, regulate energy levels, and reduce inflammation.</p>
            <ul className="list">
              <li className="list-item">Improved cognitive functioning</li>
              <li className="list-item">Boost mood</li>
              <li className="list-item">Reduced risk of cardiovascular disease</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit vit-c">
                <div className="boxed-vessel vitc-1"></div>
                <div className="boxed-vessel vitc-2"></div>
              </div>
            </div>
            <h2 className="heading-4">Vitamin C</h2>
            <p className="vessel">Vitamin C is a powerful antioxidant that fights off free radicals, a common pathway of cellular aging and chronic disease.</p>
            <ul className="list">
              <li className="list-item">Reduced inflammation</li>
              <li className="list-item">Reduced cold risk</li>
              <li className="list-item">Reduced risk of vascular disease</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit mag">
                <div className="boxed-vessel mag-1"></div>
                <div className="boxed-vessel mag-2"></div>
              </div>
            </div>
            <h2 className="heading-4">Magnesium</h2>
            <p className="vessel">Magnesium is an essential mineral involved in supporting high quality sleep, healthy metabolism, blood pressure regulation, muscle relaxation, and more.</p>
            <ul className="list">
              <li className="list-item">Improve mood</li>
              <li className="list-item">Brain health</li>
              <li className="list-item">Physical performance</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit ph-p">
                <div className="boxed-vessel ph"></div>
              </div>
            </div>
            <h2 className="heading-4">pH</h2>
            <p className="vessel">pH is how we measure acidity and alkalinity in the body. Having the right pH is critical for the optimal functioning of hundreds of enzymes in our body.</p>
            <ul className="list">
              <li className="list-item">Improved brain function</li>
              <li className="list-item">Reduced heart disease risk factors</li>
              <li className="list-item">Preserved muscle mass</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit iron">
                <div className="boxed-vessel ir"></div>
              </div>
            </div>
            <h2 className="heading-4">Iron</h2>
            <p className="vessel">Iron is an important mineral involved in supporting healthy energy levels, facilitating DNA repair, and creating the neurotransmitter dopamine.</p>
            <ul className="list">
              <li className="list-item">Improved attentiveness</li>
              <li className="list-item">Improved energy</li>
              <li className="list-item">Improved sleep</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <h2 className="heading-4">Zinc</h2>
            <p className="vessel">Zinc plays an important role in supporting the health to your immune system, brain, and eyes. Zinc also supports healthy pregnancies and the development of children.</p>
            <ul className="list">
              <li className="list-item">Improved immunity</li>
              <li className="list-item">Brain health</li>
              <li className="list-item">Improved vision</li>
            </ul>
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit zinc">
                <div className="boxed-vessel zinc"></div>
              </div>
            </div>
          </div>
          <div className="tab-pane-vitamin-b7">
            <h2 className="heading-4">Hydration</h2>
            <p className="vessel">Specific gravity is a quick way to get important information about hydration status, which is critical for optimal functioning of nearly all systems in your body.</p>
            <ul className="list">
              <li className="list-item">Improved mood and cognition</li>
              <li className="list-item">Weight loss</li>
              <li className="list-item">Improved endurance and performance</li>
            </ul>
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit hydration">
                <div className="boxed-vessel hydra"></div>
              </div>
            </div>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit cortisol">
                <div className="border-vessel"></div>
              </div>
            </div>
            <h2 className="heading-4">Cortisol</h2>
            <p className="vessel">Cortisol is an important hormone produced primarily in our adrenal glands in response to stress (physical, physiological, and emotional/mental).</p>
            <ul className="list">
              <li className="list-item">Stress resilience</li>
              <li className="list-item">Improved energy levels</li>
              <li className="list-item">Reduced inflammation</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit ket">
                <div className="boxed-vessel ket-1"></div>
                <div className="boxed-vessel ket-2"></div>
                <div className="boxed-vessel ket-3"></div>
              </div>
            </div>
            <h2 className="heading-4">Ketones A &amp; B</h2>
            <p className="vessel">These ketones can help you track how well your body has made the metabolic adaptation of burning ketones instead of sugar, which is the goal of a ketogenic diet.</p>
            <ul className="list">
              <li className="list-item">Fat loss</li>
              <li className="list-item">Improved mental clarity</li>
              <li className="list-item">Reduced oxidative stress</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit mercury">
                <div className="boxed-vessel mer"></div>
              </div>
            </div>
            <h2 className="heading-4">Mercury</h2>
            <p className="vessel">Mercury is a toxic heavy metal that accumulates in fish. Once inside our bodies, mercury gets deposited into our tissues and causes widespread damage.</p>
            <ul className="list">
              <li className="list-item">Improved mental and emotional health</li>
              <li className="list-item">Improved mental acuity, sharpness, and memory</li>
              <li className="list-item">Improved senses of hearing and touch</li>
            </ul>
          </div>
          <div className="tab-pane-vitamin-b7">
            <div className="div-block-56"><img src={test_strip} alt="" className="image-15"/>
              <div className="blur-vit lead">
                <div className="boxed-vessel ld"></div>
              </div>
            </div>
            <h2 className="heading-4">Lead</h2>
            <p className="vessel">Lead is a toxic metal that gets deposited into many organs where it leads to a variety of dangerous problems.</p>
            <ul className="list">
              <li className="list-item">Improved mental and emotional health</li>
              <li className="list-item">Improved sleep quality</li>
              <li className="list-item">Improved immune system functioning</li>
            </ul>
          </div>
        </Slider>
        <div className="w-embed w-script">
        </div>
        <div className="div-block-51">
          <div className="div-block-50"></div>
          <div className="div-block-52 home w-clearfix"><a href="wellness-test-cards.html" className="dark-bt w-button">Pre-order</a></div>
        </div>
      </div>
      <div className="rose-bg home"></div>
    </div>
  </div>
  <div className="doctors">
    <div className="cream-bg doctor"></div>
    <div className="container-4 w-container">
      <div className="div-block-21">
        <div className="div-block-22">
          <h2 className="heading doctor">Backed by <br/>doctors and scientists</h2>
        </div>
        <div className="div-block-23">
          <p className="paragraph">Vessel is working with some of the best doctors, nutritionists, and scientists to create our test card and build your personalized recommendations that work to help you feel and perform at your best.</p>
        </div>
      </div>
      <div className="div-block-45 w-clearfix">
        <div className="div-block-44 w-clearfix">
        <Slider {...settings} className="div-block-26 slider-a w-clearfix" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>
            <div className="div-block-28 grow"><img src={paula} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={larson} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={maryam} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={linda} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={mona_update} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={heather} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={mike} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={nadia} alt="" className="image-8 slide-img"/></div>
          </Slider>
          <Slider {...settings} className="div-block-26 slider-b w-clearfix" asNavFor={this.state.nav3} ref={slider => (this.slider2 = slider)}>
            <div className="div-block-28 grow"><img src={Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
            <div className="div-block-28 grow"><img src={larson} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={maryam} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={linda} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={mona_update} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={heather} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={mike} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={nadia} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={paula} alt="" className="slide-img"/></div>
            </Slider>
            <Slider {...settings} className="div-block-26 slider-c w-clearfix" asNavFor={this.state.nav4} ref={slider => (this.slider3 = slider)}>
            <div className="div-block-28 grow"><img src={larson} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={maryam} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={linda} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={mona_update} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={heather} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={mike} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={nadia} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={paula} alt="" className="slide-img"/></div>
            <div className="div-block-28 grow"><img src={Jesus_Gonzalez} alt="" className="image-8 slide-img"/></div>
            </Slider>
        </div>
        <div className="div-block-24">
        <Slider {...textSlide} className="div-block-25" asNavFor={this.state.nav1} ref={slider => (this.slider4 = slider)}>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. David Larson, MD</h2>
              <p className="paragraph">Integrative medicine physician double board-certified in family medicine and psychiatry.<br/>Chief Medical Officer</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Maryam Soltani, M.D., Ph.D.</h2>
              <p className="paragraph">Head of the residential substance abuse and treatment program at the VA San Diego.<br/>Medical and research adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Linda Illingworth, R.D.</h2>
              <p className="paragraph">Registered Dietitian Nutritionist specializing in functional nutrition with a food first approach to health. <br/>Nutritional adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Mona Ezzat-Velinov, M.D.</h2>
              <p className="paragraph">Board certified in family medicine and integrative medicine. Active in her own private practice and corporate health.<br/>Medical adviser at Vessel.</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Heather Sandison, ND</h2>
              <p className="paragraph">Board certified naturopathic physician in private practice specializing in neurocognitive medicine and neurohacking.<br/>Natural medicine adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Mike Moreno, M.D.</h2>
              <p className="paragraph">Board certified family medicine physician, and wellness author.<br/>Medical adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Nadia Mistry, N.D.</h2>
              <p className="paragraph">Naturopathic physician specializing in holistic treatments for women and children.<br/>Natural medicine adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Paula Sturm, RDN, FMN, CFSP</h2>
              <p className="paragraph">Registered dietitian with additional expertise in functional and genomic medicine.<br/>Nutritional adviser at Vessel</p>
            </div>
            <div id="text-slide" className="slide-content">
              <h2 className="heading-4 backed">Dr. Jesus Gonzalez</h2>
              <p className="paragraph"><br/>Chief Scientist at Vessel</p>
            </div>
          </Slider>
          <div className="div-block-46"><img src={prev} id="prev" height="50" alt="" className="image-14"/><img src={next} id="next" height="50" alt=""/></div>
        </div>
      </div>
    </div>
    <div className="w-embed w-script">
    </div>
  </div>
  <div className="healty"><img src={Image_4} alt="" className="image-9"/>
    <div className="green-bg give-health"></div>
    <div className="container-5 w-container">
      <div className="div-block-31">
        <h2 className="heading doctor">Get healthy,<br/>give healthy</h2>
        <div className="div-block-143">
          <p className="paragraph">Every test card you purchase donates vitamin A and deworming to a child in need for a month, reducing mortality rates by 25%</p>
        </div>
        <div className="div-block-54 w-clearfix"><a data-w-id="262d2f52-da18-3ec8-76cb-4f3e2abcffbf" href="#" className="dark-bt vit-ang w-button">Learn more</a><img src={vit_ang_ps} height="" alt="" className="image-10"/></div>
      </div>
    </div>
  </div>
  <div className="find-your-better">
    <div className="container-9 w-container">
      <div className="div-block-32 w-clearfix">
        <h2 className="white heading">Your best is yet to come</h2>
        <p className="paragraph white">Instant- home health tracker for those in relentless pursuit of being better, doing better, and performing your best.</p><a href="wellness-test-cards.html" className="dark-bt white w-button">Pre-order</a></div>
    </div>
    <div className="footer-content">
      <div className="container-10 w-container">
        <div className="div-block-36"><img src={white_logo} height="40" alt="" className="image-11"/></div>
        <div className="div-block-35">
          <div className="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span className="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="footer-link">Help Center</a></div>
        <div className="div-block-35"><a href="index.html" aria-current="page" className="footer-link w--current">Wellness Test Card</a><a href="coronavirus.html" className="footer-link">Coronavirus Test Card</a><a href="about.html" className="footer-link">About</a><a href="careers.html" className="footer-link">Careers</a><a data-w-id="29e0c7c7-8219-87fb-f109-071890567bbf" href="#" className="footer-link">Partner</a><a data-w-id="29e0c7c7-8219-87fb-f109-071890567bc1" href="#" className="footer-link">Press</a></div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em>&nbsp;<a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div><a href="privacy-policy.html" className="footer-link notice">Privacy Policy</a><a href="terms-of-service.html" className="footer-link notice">Terms of Service</a>
          <div className="footer-text notice patent">Patent Pending</div>
          <div className="footer-text notice disclaimer">* This product is not intended for use in diagnosing diseases or other conditions; &nbsp;determining state of health; &nbsp;or curing, mitigating, treating, or preventing disease. &nbsp;Designed by Vessel in California.</div>
        </div>
      </div>
      <div className="cookies-bar">
        <div className="w-container">
          <div className="cookies-notice">
            <p className="paragraph-28 cookies">This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. <a href="privacy-policy.html">Learn more</a></p><a data-w-id="05ffb679-b0af-bac0-0223-ac07643b6b05" href="#" className="dark-bt cookies w-button">Got it</a></div>
        </div>
      </div>
      <div className="html-embed-6 w-embed w-script">
      </div>
    </div>
  </div>
  <div className="poups">
    <div className="partner-pop">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a210" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a212" className="close pop"><img src={close} alt=""/></div>
        <div className="div-block-53 pop">
          <h1 className="heading popup">For partnership inquiries<br/></h1>
          <h3 className="heading-61 email-click"><a href="mailto:partner@vesselhealth.com?subject=Vessel%20Health%20partner%20inquiry" className="link-14">partner@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
    <div className="pop-sec">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21b" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a21d" className="close pop"><img src={close} data-w-id="1c88a0b7-bbfe-c4ac-7626-fe89b8ef7d92" alt=""/></div>
        <div className="div-block-53 pop">
          <h1 className="heading popup">Join the waitlist<br/></h1>
          <h4 className="heading-52 subsecond">Total subscribers </h4>
        </div>
        <div className="w-embed">
          <div className="klaviyo-form-LBcxWV klaviyo-form form-version-cid-1">
          <div className="ResetElements__Div-sc-8e6zl9-0 gUoYgx needsclick undefined">
          <form className="ResetElements__Form-sc-8e6zl9-1 View__FormView-sc-1ou3cq2-0 brebrf klaviyo-form-version-cid_1 needsclick klaviyo-form-version-cid_1" noValidate="" tabIndex="-1">
          <div className="ResetElements__Div-sc-8e6zl9-0 Column__FormColumn-z5j99u-0 Ndwyt needsclick undefined">
          <div className="ResetElements__Div-sc-8e6zl9-0 Row__FormRow-sc-17nghml-0 kgtZaW needsclick undefined">
          <div className="ResetElements__Div-sc-8e6zl9-0 FormComponent__StyledFormComponentWrapper-e0xun6-0 fjdFDR needsclick undefined">
          <div className="ResetElements__Div-sc-8e6zl9-0 TextInput__StyledInputContainer-sc-1o6de9f-1 bQDdTc needsclick undefined">
          <input type="email" name="email" tabIndex="0" placeholder="Enter email address" aria-label="Enter email address" aria-invalid="false" className="ResetElements__Input-sc-8e6zl9-8 FUXqS TextInput__FormStyledTextInput-sc-1o6de9f-0 fsIKy needsclick TextInput__FormStyledTextInput-sc-1o6de9f-0 fsIKy" value="" />
          <div className="ResetElements__Div-sc-8e6zl9-0 ValidationMessage__Container-sc-1agouhi-0 kKQEmZ needsclick undefined">
          </div>
          </div>
          </div>
          <div className="ResetElements__Div-sc-8e6zl9-0 FormComponent__StyledFormComponentWrapper-e0xun6-0 cGEpIm needsclick undefined">
          <button type="button" tabIndex="0" className="ResetElements__Button-sc-8e6zl9-2 Button__FormStyledButton-p2mbjt-0 lgRuVD needsclick undefined">Join the Waitlist</button>
          </div>
          </div>
          </div>
          <input type="submit" tabIndex="-1" className="ResetElements__Input-sc-8e6zl9-8 FUXqS View__HiddenSubmit-sc-1ou3cq2-1 dSnrYQ needsclick View__HiddenSubmit-sc-1ou3cq2-1 dSnrYQ" value="Submit" />
          </form>
          </div>
          </div>
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
            <div data-collapse="none" data-animation="default" data-duration="400" className="navbar w-nav">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-li"><a href="index.html" aria-current="page" className="nav-link-2 w-nav-link w--current">Wellness Test Card</a></div>
                <div className="nav-li"><a href="coronavirus.html" className="nav-link-2 w-nav-link">Coronavirus Test Card</a></div>
                <div className="nav-li"><a href="about.html" className="nav-link-2 w-nav-link">About</a></div>
                <div className="nav-li"><a href="careers.html" className="nav-link-2 w-nav-link">Careers</a></div>
                <div className="nav-li"><a href="mailto:partners@vesselhealth.com?subject=Vessel%20Health%20Partner%20Inquiry" className="nav-link-2 w-nav-link">Partner</a></div>
                <div className="nav-li"><a href="#" data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a248" className="nav-link-2 w-nav-link">Press</a></div>
              </nav>
            <div className="w-nav-overlay" data-wf-ignore=""></div></div>
            <div className="div-block-58">
              <div><a href="index.html" aria-current="page" className="dark-bt white w-button w--current">Support</a></div>
              <div>
                <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em>&nbsp;<a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
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

export default homePage