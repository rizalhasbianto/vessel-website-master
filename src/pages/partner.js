import React, { Component} from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import white_logo from "../images/white-logo.png"

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
    <SEO title="Privacy Policy - Vessel Health" />
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
    <Footer />
  </div>
  </Layout>
	</>
	)
	}
}

export default coronaPage