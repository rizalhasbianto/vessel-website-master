import React, { Component} from "react"
import { Link } from "gatsby"
import $ from 'jquery'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

import close from "../images/close.png"
import white_logo from "../images/white-logo.png"

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
    <SEO title="Pre-order Wellness Test Cards - Vessel Health" />
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
    <Footer />
  </div>
  </Layout>
	)
	}
}
export default coronaPage