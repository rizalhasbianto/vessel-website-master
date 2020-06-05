import React, { Component} from "react"
import { Link } from "gatsby"
import Slider from "react-slick";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Group_ from "../images/Group-22.png"
import Vessel_Website_Our_Mission_Image_v from "../images/Vessel_Website_Our-Mission_Image_v1-01.png"
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
import _Ryan_Drnginis from "../images/4-Ryan-Dranginis.jpg"
import _Chris_Hoffman from "../images/44_chris-hoffman.jpg"
import prev from "../images/prev.png"
import next from "../images/next.png"
import jon_carder_headshot from "../images/jon-carder-headshot.jpg"
import white_logo from "../images/white-logo.png"
import close from "../images/close.png"

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
	return (
	<Layout>
    <SEO title="Our Mission - Vessel Health" />
	<div class="about-cont">
<div class="about">
    <div class="green-bg careers"></div>
    <div class="container-23 w-container">
      <div class="div-block-103">
        <h1>Start from within</h1>
        <p class="paragraph">When it comes to personal health, information is everything. That’s why we created a revolutionary approach to help people understand and optimize their health through at-home assessment, personalized action plans, and ongoing progress monitoring. After all, if we can identify what’s holding us back, there’s no limit to what we can achieve.&nbsp;<br/></p><Link to="/wellness-test-cards" class="dark-bt main-section-bt w-button">Pre-order</Link></div>
    </div><img src={Group_} alt="" class="image-26-copy"/></div>
  <div class="our-mission">
    <div class="container-25 w-container">
      <div class="div-block-111"><img src={Vessel_Website_Our_Mission_Image_v} alt=""/></div>
      <div class="div-block-112">
        <h2 class="heading">Our Mission</h2>
        <p class="paragraph">We’re optimistic about the future of health because we’re building it. By helping people better understand their bodies, we’re unlocking a world where everyone can feel, perform and live better. And most importantly, where people can have more time to do the things they love with the people they love.&nbsp;<br/></p>
      </div>
    </div>
  </div>
  <div class="our-team">
    <div class="container-4 w-container">
      <div class="div-block-21">
        <h2 class="heading data team">The Vessel<br/>A-Team<br/></h2>
        <p class="paragraph why team">From top research scientists and doctors to nutritionists and marketers, we’re a diverse and talented team spread out across the world. All team members have a passion for healthy living and share a common vision of improving the vitality and longevity of humankind.<br/></p>
      </div>
      <div class="div-block-45 w-clearfix">
        <div class="div-block-44 w-clearfix">
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
            <div className="div-block-28 grow"><img src={_Ryan_Drnginis} alt="" className="image-8 slide-img"/></div>
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
            <div className="div-block-28 grow"><img src={_Ryan_Drnginis} alt="" className="image-8 slide-img"/></div>
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
            <div className="div-block-28 grow"><img src={_Ryan_Drnginis} alt="" className="image-8 slide-img"/></div>
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
    <div class="cream-bg doctor"></div>
  </div>
  <div class="our-story">
    <div class="container-25 w-container">
      <div class="div-block-111"><img src={jon_carder_headshot} alt="" class="image-35"/></div>
      <div class="div-block-112">
        <h2 class="heading">Our Story</h2>
        <p class="paragraph">Jon Carder, a serial entrepreneur and the founder of Vessel, started noticing some surprising symptoms as he got into his 30’s — lower energy, brain fog, trouble sleeping — and how they interfered with his ability to be his best self, both professionally and personally. Determined to solve these “problems”, he went to the doctor. After a lot of complicated (and expensive) lab work, Carder and his doctor identified nutrient deficiencies, high toxins levels like mercury and adjusted his supplements and nutrition accordingly. Within a month, he was feeling the best he had felt in years but was disillusioned by how complicated and expensive the process was.<br/>&zwj;<br/>He realized the way he, and many others felt, wasn’t a “growing old” problem but an access problem. With Vessel, he was determined to change that mentality by arming people with affordable and easy at-home wellness testing to manage their wellbeing and optimize their energy, brain function, sleep, fitness, immunity, and appearance. And it’s just the beginning. <br/><br/></p>
      </div>
    </div>
  </div>
  <div class="find-your-better">
    <div class="container-9 w-container">
      <div class="div-block-32 w-clearfix">
        <h2 class="white heading">Your best is yet to come<br/></h2>
        <p class="paragraph white">Coming summer 2020.</p><Link to="/wellness-test-cards" class="dark-bt white w-button">Pre-order</Link></div>
    </div>
    <div class="footer-content">
      <div class="container-10 w-container">
        <div class="div-block-36"><img src={white_logo} height="40" alt="" class="image-11"/></div>
        <div class="div-block-35">
          <div class="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span class="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" class="footer-link">Help Center</a></div>
        <div class="div-block-35">
        <Link className="footer-link" to="/">Wellness Test Card</Link>
        <Link className="footer-link" to="/coronavirus">Coronavirus Test Card</Link>
        <Link className="footer-link" to="/coronavirus-grouptesting">Coronavirus Group Testing</Link>
        <Link className="footer-link" to="/about">About</Link>
        <Link className="footer-link" to="/careers">Careers</Link>
        <Link className="footer-link" to="/partner">Partner</Link>
        <Link className="footer-link press-f" to="#">Press</Link>
        </div>
      </div>
      <div class="container-11 w-container">
        <div class="div-block-36">
          <h4 class="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" class="link">Ig</a><em class="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" class="link">Fb</a><em class="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" class="link">Tw</a><em class="italic-text">/</em>&nbsp;<a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" class="link-2">Yt</a></h4>
        </div>
        <div class="div-block-37">
          <div class="footer-text notice">2020 Vessel. All rights Reserved.</div>
          <Link className="footer-link notice" to="/privacy-policy">Privacy Policy</Link>
          <Link className="footer-link notice" to="/terms-of-service">Terms of Service</Link>
          <div class="footer-text notice patent">Patent Pending</div>
          <div class="footer-text notice disclaimer">* <strong>This product is intended only for maintaining and encouraging a healthy lifestyle and is unrelated to the diagnosis, cure, mitigation, prevention, or treatment of a disease or condition</strong>. &nbsp;Designed by Vessel in California.</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </Layout>
	)
	}
}

export default coronaPage