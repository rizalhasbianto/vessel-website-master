import React, { Component} from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import careers_top from "../images/careers-top.png"
import team from "../images/team.png"
import Vessel_website_launch_party from "../images/Vessel-website-launch-party.jpg"
import Image_4 from "../images/Image-4.png"
import vit_ang_ps from "../images/vit-ang_ps.png"
import expand from "../images/expand.png"
import white_logo from "../images/white-logo.png"
import close from "../images/close.png"

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
	<Layout>
    <SEO title="Careers - Vessel Health" />
	<div className="mian-content">
  <div className="hiring">
    <div className="green-bg careers"></div><img src={careers_top} alt="" className="image-26"/>
    <div className="container-23 careers w-container">
      <div className="div-block-103 hiring-top">
        <h1>We’re hiring!</h1>
        <p className="paragraph">Passionate about personal health and wellness? Inspired by new and complex challenges? Driven by the idea of disrupting the wellness industry? Determined to build the best experience possible for millions of users? Ready for a fulfilling role, not just an easy one?&nbsp; If all apply to you, and you want to play an impactful role in building the future, we want to hear from you.<br/></p>
        <button onClick={() => scrollTo('#job-openings')} to="#"className="dark-bt w-button">See Openings</button></div>
    </div>
  </div>
  <div className="values">
    <div className="cream-bg cv"></div>
    <div className="container-24 w-container">
      <div className="div-block-106">
        <h2 className="heading">Our core values</h2>
        <p className="paragraph">This is how we behave, prioritize and make decisions.</p>
      </div>
      <div className="div-block-105">
        <div className="div-block-104">
          <h4 className="heading-50 number">01</h4>
          <h3 className="heading-49">Health Over Wealth</h3>
          <p className="paragraph core">We think long term in order to maximize the impact we can have on people’s wellbeing. We value impeccable science, innovation, transparency, and ethical decisions over the creation of wealth.</p>
        </div>
        <div className="div-block-104 right">
          <h4 className="heading-50 number">02</h4>
          <h3 className="heading-49">We Are Optimizers</h3>
          <p className="paragraph core">We are in constant pursuit of better -<strong> </strong>career performance, loving relationships, health and longevity.</p>
        </div>
      </div>
      <div className="div-block-105">
        <div className="div-block-104">
          <h4 className="heading-50 number">03</h4>
          <h3 className="heading-49">We Ship Epic</h3>
          <p className="paragraph core">We never settle for good enough, from an internal email to the tests we deliver, if we don’t love it,, we don’t ship it.</p>
        </div>
        <div className="div-block-104 right">
          <h4 className="heading-50 number">04</h4>
          <h3 className="heading-49">We Got You</h3>
          <p className="paragraph core">We make honorable agreements with each other and our customers with the help of structures and processes.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="we-are-vessel">
    <div className="container-27 w-container">
      <h2 className="heading we_vessel">We are Vessel</h2>
      <div className="div-block-109 first">
        <div className="div-block-107"><img src={team} alt="" className="image-37"/></div>
        <div className="div-block-104 right we">
          <h4 className="heading-50 number">01</h4>
          <h3 className="heading-49">Team</h3>
          <p className="paragraph core">With full-time, part-time and advisory roles, we are a primarily remote yet close-knit team&nbsp; of doers. We value accountability and action, creative thinking and problem solving and&nbsp; always find time to have a little fun along the way. <br/></p>
        </div>
      </div>
      <div className="div-block-109">
        <div className="div-block-104 we">
          <h4 className="heading-50 number">02</h4>
          <h3 className="heading-49">Culture</h3>
          <p className="paragraph core">Even though we’re mostly a virtual team, our culture is alive and well. First and foremost,&nbsp; we treat each other like adults, always pushing each other to grow as performers and&nbsp; leaders. The health tech industry is fast-paced, highly competitive, and always changing&nbsp; so we expect our team members to bring a high level of accountability and autonomy to&nbsp; their roles. Our culture is radically open, fast-moving, supportive and leaves plenty of&nbsp; room for fun along the way. <br/></p>
        </div>
        <div className="div-block-107 right"><img src={Vessel_website_launch_party} alt=""/></div>
      </div>
    </div>
  </div>
  <div className="pay-it"><img src={Image_4} alt="" className="image-9"/>
    <div className="green-bg give-health-pay"></div>
    <div className="container-5 w-container">
      <div className="div-block-31">
        <h2 className="heading doctor"><strong className="bold-text-6">How we give back</strong></h2>
        <div>
          <p className="paragraph">With every purchase made, Vessel will provide nutritional support to a child in need for an entire month through Vitamin Angels. We are proud to join them in the fight in lowering mortality rates and ending global malnutrition.</p>
        </div>
        <div className="div-block-54 w-clearfix"><a data-w-id="9bdf64eb-4668-747b-3ecb-518e69e63825" href="#" className="dark-bt vit-ang w-button">Learn more</a><img src={vit_ang_ps} alt="" className="image-10"/></div>
      </div>
    </div>
  </div>
  <div id="job-openings" className="job-opening">
    <div className="container-18 w-container">
      <h2 className="heading">Current job openings</h2>
      <p className="paragraph">Since we are mostly virtual, you can skip the long commutes or 9-5 office drudgery. As long as you get your work done, you can have a lot of flexibility with how and when you work. But this company isn’t for slackers either — our team typically works 50+ hours a week.<br/></p>
      <div className="qs-list">
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="fc17d42b-721e-8e69-6ff2-40a034044f6b" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">01</p>
              <h3 className="heading-46">Biochemical Engineer, Production Readiness<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$75k – $110k • 0.01% – 1.0%<strong><br/>F</strong>ull-time<br/>&zwj;<br/>Pay will be partial salary | Partial equity, until Series A round closes<br/><br/>&zwj;<strong>Role &amp; Responsibilities:</strong><br/>-Biochemical process transfer from R&amp;D Lab to high volume Production<br/>-Collaboration with the Science team to optimize assays for highly consistent and accurate high volume manufacturing<br/>-Implementing and maintaining a set of processes and documentation that enables accurate and efficient transfer of all assays to manufacturing<br/><br/>&zwj;<strong>Mission/Purpose:</strong><br/>The person in this role is critical to ensuring that assays developed in R&amp;D will be quickly and easily moved from the lab to manufacturing environment to ensure rapid commercialization of new tests and chemistries.<br/><br/>&zwj;<strong>Needed Skills:</strong><br/>-Knowledge of Biochemistry and/or Bioengineering<br/>-Assay development and production<br/>-Develop effective and efficient process and documentation<br/>-Proactive collaboration with Science and Manufacturing<br/>-Creative problem solving<br/>-Clear, effective communication<br/>-Quality Control and Testing<br/>-Fast response times<br/>-Organization &amp; planning<br/>-Attention to details<br/><br/>&zwj;<strong>What technical knowledge do you need to perform in your role?</strong><br/>-Bioengineering, Biochemistry, chemical engineering or similar<br/>-Rapid assay development and manufacturing (Lateral flow, colorimetrics)<br/>-Lab processes and procedures<br/><br/>&zwj;<strong>Qualifications (Must haves):</strong><br/>-Experience in Assay development and testing<br/>-Experience with transferring assays to manufacturing<br/>-Investigation and resolution of manufacturing issues related to assay development<br/>-Clear communication and speaking skills<br/><br/>&zwj;<strong>Qualifications (Nice to haves):</strong><br/>-Managing a team of chemists, engineers<br/>-Quality control and process<br/>-Knowledge of FDA manufacturing requirements<br/>-Six-sigma, Lean or Black Belt training</p><a href="https://angel.co/company/vessel-tracker/jobs/772061-biochemical-engineer-production-readiness" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="fc17d42b-721e-8e69-6ff2-40a034044f76" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">02</p>
              <h3 className="heading-46">Biochemical Engineer<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$90k – $120k • 0.01% – 1.0%<br/>Full Time<br/><br/>Pay will be partial salary | Partial equity, until Series A round closes<br/><br/>&zwj;<strong>Role &amp; Responsibilities:</strong><br/>-Biochemical Engineering Interface between R&amp;D Lab and Production<br/>-Collaboration with the Science team to optimize assays for highly -consistent and accurate high volume manufacturing<br/>-Implementing and maintaining a set of processes and documentation that enables accurate and efficient transfer of all assays to manufacturing<br/><br/>&zwj;<strong>Mission/Purpose:</strong><br/>The person in this role is critical to ensuring that assays developed in R&amp;D will be quickly and easily moved from the lab to manufacturing environment to ensure rapid commercialization of new tests and chemistries.<br/><br/>&zwj;<strong>Needed Skills:</strong><br/>-Knowledge of Biochemistry and or Bioengineering<br/>-Development of new Assays<br/>-Develop effective and efficient process and documentation.<br/>-Quality Control and Testing<br/>-Creative problem solving<br/>-Clear, effective communication<br/>-Fast response times<br/>-Organization &amp; planning<br/>-Attention to details<br/><br/>&zwj;<strong>What technical knowledge do you need to perform in your role?</strong><br/>-Bioengineering, Biochemistry, chemical engineering, or similar.<br/>-Rapid assay development, LFA, colorimetrics.<br/>-Lab quality control processes and procedures.<br/><br/>&zwj;<strong>Qualifications (Must haves):</strong><br/>-Experience in LFA development and testing.<br/>-Strong Science background: Chemistry, Biology, Engineering, etc<br/>-Interested in creating new tests that are better than existing ones<br/>-Clear communication and speaking skills<br/><br/>&zwj;<strong>Qualifications (Nice to haves):</strong><br/>-Managing a team of chemists, engineers<br/>-Quality control and process<br/>-Six-sigma, Lean or Black Belt training<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/772059-biochemical-engineer" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="fc17d42b-721e-8e69-6ff2-40a034044f82" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">03</p>
              <h3 className="heading-46">VP of Regulatory Affairs<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$125k – $160k • 0.0% – 0.1%<br/>Full Time<br/><br/>&zwj;<strong>Role &amp; Responsibilities:</strong><br/>-Leading all regulatory affairs, including FDA submissions, HIPAA compliance processes, and labeling decisions<br/>-Reviewing and approving all materials from a regulatory perspective, including packaging, website, ads, and product features.<br/>-Ensure the company is staying compliant with regulations<br/><br/>&zwj;<strong>Mission/Purpose:</strong><br/>Our first core value at Vessel is health over wealth. This means that we put the health of our customers over making a quick buck. In order to do that, We need to maintain great relationships with authorities, stay compliant,and consistently get innovative products approved to sell to customers. The Director of Regulatory Affairs is the person responsible for this. This is a vital role in a health technology company and requires someone who has tremendous knowledge and passion for getting products approved with regulators<br/><br/>&zwj;<strong>Needed Skills:</strong><br/>-Knowledge of FDA regulations and best paths to approvals<br/>-Strong network with officials and FDA members<br/>-Clinical trial skills - knowing the proper protocol that the FDA is looking for<br/>-Attention to detail<br/>-FDA labeling skills - the ability to review content to ensure we are staying compliant<br/>-Teaching ability<br/>-Managing people effectively to follow processes and dealing with non-compliance<br/>-Discipline in the face of urgency (the ability to stand your ground when pressured to not to)<br/>-Organization and planning<br/>-Proactive communication<br/>&zwj;<br/><strong>What technical knowledge do you need to perform in your role?</strong><br/>-FDA submission experience<br/>-HIPAA compliance experience<br/>-Software skills such as Asana, Slack, Google Drive, Doc control software<br/>&zwj;<br/>&zwj;<strong>Qualifications (Must Haves)</strong><br/>-3+ years of success in a similar role<br/>-Successfully led 2+ medical device products submission through FDA approval<br/>-Written the protocols for 2+ published clinical trials <br/>-Privacy and data security experience<br/><br/>&zwj;<strong>Qualifications (Nice to Haves):</strong><br/>-Startup experience (worked at a company with less than 30 employees that scaled rapidly)<br/>-Consumer product experience<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/820748-vp-of-regulatory-affairs" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97 hide">
            <div data-w-id="fc17d42b-721e-8e69-6ff2-40a034044f8e" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">04</p>
              <h3 className="heading-46">VP of Enterprise Sales<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$120k – $175k • 0.0% – 0.1%<br/>Full-time<br/><br/>Pay is made up of base and commission<br/><br/>&zwj;<strong>Role &amp; Responsibilities:</strong> <br/>-Managing and cultivating Vessel’s Enterprise Sales strategy which focuses on companies and businesses (of all sizes)<br/>-Developing a Biz Dev plan which includes budget, targets, all in line with direction from the SVP’s of Vessels Sales Org.<br/>-Maintaining a comprehensive CRM approach in Hubspot to ensure all customers are tracked and logged correctly. This will include LTV of customers and churn management. <br/>-This pivotal role sells products into enterprise companies across various industries. These will include but are not limited to Corporate Wellness, HR and employee Benefits Liaison, Staff Health plans within target customers<br/>-Experience of working with Insurance companies and understanding how to navigate the submission and approval of Vessel into Corporate wellness programs for all target companies’ employees<br/><br/>&zwj;<strong>Mission/Purpose:</strong><br/>The VP of Enterprise Sales is a proven corporate Sales leader and brings with them the knowledge of how to get Vessel squarely in the sights of our target companies HR, Employee benefits and Staff wellness program leaders. The VP has senior contacts at various Health Insurance companies and knows how to give Vessel the best chance possible of being a ‘covered’ benefit within the majority of employee health Insurance schemes. Simply put, Vessel believes that having at-home testing is the way forward and we want to facilitate and make it easy for both employers and employees to use our technology.<br/><br/>The VP will make certain that any client issues and/or concerns are raised and addressed. You will share status, progress and facilitate sales activity across the Vessel team to ensure total client satisfaction.<br/><br/>&zwj;<strong>Needed Skills:</strong><br/>-Hunger and hunting mentality<br/>-Networked<br/>-Ability to work with corporate wellness departments and navigate health insurance with HR departments<br/>-Client Management: Find clients, Negotiate, sign and satisfy<br/>-Efficient execution of tasks needed to answer any questions leading to the successful signing of quality leads/clients<br/>-Fast response times to clients needs and questions<br/>-Organization and planning within the sales process<br/>-Proactive communication<br/>-Leading people and dealing with poor performance and giving support to team members<br/><br/><strong>What technical knowledge do you need to perform in your role?<br/>(Required)</strong><br/>-The VP knows senior leaders at Health Insurance companies such as Anthem, Blue Cross, United, Humana et al. Understanding and knowing the criteria for Vessel to achieve in-plan coverage is pivotal and also how to make this easy to access for all employers we engage and sign up. <br/>-Experience selling products into health and wellness and corporate wellness teams within companies across the US. <br/>-Have your own playbook as to how you operate and effectively sign up corporate clients<br/><br/><strong>(Preferred)</strong><br/>-Hubspot (Our client tracking tool), Asana, Slack, Google Calendar, Google Drive.<br/>-Ideally selling product into FTSE 250 companies<br/><br/>&zwj;<strong>Qualifications (Must haves):</strong><br/>-Degree in Business, Marketing, Sales and or Business<br/>-Minimum of 5 years corporate sales experience <br/>-Can show how you developed a book of business that matched the objectives of the company's Corporate Wellness team<br/><br/>&zwj;<strong>Qualifications (Nice to haves):</strong><br/>-MBA<br/>-Salesforce Expert<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/821419-vp-of-enterprise-sales" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="fc17d42b-721e-8e69-6ff2-40a034044f9a" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">05</p>
              <h3 className="heading-46">VP of Government Sales<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$120k – $175k • 0.0% – 0.1%<br/>Full-time<br/><br/>Pay is made up of base and commission<br/><strong><br/>Role &amp; Responsibilities:</strong><br/>-Managing and cultivating all Govt relations for Govt, States, Cities and municipalities<br/>-Developing a Biz Dev plan including budget, targets (cities/states/other)<br/>-Maintaining a CRM approach in Hubspot to ensure all customers are satisfied and encourage fellow neighboring states to sign up<br/>The US Government, States and City employees see this VP as their Go-to Vessel employee who can navigate time, systems and channel partners to get them test products and to also support and deliver results for their locations<br/><br/>&zwj;<strong>Mission/Purpose:</strong><br/>The VP of Govt sales is a city, State and Government relations guru. They understand how the Govt ‘system’ works and they know how to expertly navigate the public sector landscape. This person has a rolodex that can be immediately called upon to plug Vessel health into many cities and states which will speed up the roll out of Vessels unique technology. The candidate will likely have a track record of selling products and/or services into various cities/States and will understand the language, pressure, and needs of this client given the budget is a use of public funds. Govt employees have a high level of fiduciary responsibility for use of funds and Vessel’s VP Govt Sales ensures that service, Value and honesty is at the heart of how we operate.You will partner closely with our Govt partners to capture their hearts and minds for Vessel’s ecosystem through training, tools, and programs to grow the Vessel footprint in our territory.Through the partnership, you will identify new Government opportunities and support them through closure. You will make certain that any client issues and/or concerns are raised and addressed. You will share status, progress and facilitate sales activity across the Vessel team to ensure total client satisfaction.<br/><br/>&zwj;<strong>Needed Skills:</strong> <br/>-Hunger and hunting mentality<br/>-Connectivity - a mover and a shaker in the Govt sector<br/>-Client Management - find clients, Negotiate, sign and satisfy<br/>-Efficient execution of tasks needed to answer any questions leading to the successful signing of quality leads/clients<br/>-Fast response times to clients needs and questions<br/>-Organization &amp; planning within the sales process<br/>-Proactive communication<br/>-Leading people and dealing with poor performance and giving support to team members<br/><br/>&zwj;<strong>What technical knowledge do you need to perform in your role?<br/>(Required)</strong><br/>-Govt systems or forms that are required to become an approved vendor or supplier<br/>-Governmental terminology, understanding and systems experience<br/>-5+ years of experience in selling and managing products into senior government entities<br/><br/>&zwj;<strong>(Preferred)</strong><br/>-Hubspot (Our client tracking tool)<br/>-Asana<br/>-Slack<br/>-Google Calendar<br/>-Google Drive<br/><br/>&zwj;<strong>Qualifications (Must haves):</strong><br/>-Degree in Business, Marketing, and/or Sales<br/>-5+ years of governmental relations and sales experience<br/><br/>&zwj;<strong>Qualifications (Nice to haves):</strong><br/>-Political Science, Business and Public Administration, Public Policy experience<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/821444-vp-of-government-sales" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="cf8d9f63-34f7-6807-01b5-524bd1a784fb" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">06</p>
              <h3 className="heading-46">Senior iOS Developer<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$140k – $180k • 0.0% – 0.1%<br/>Full-time<br/><br/><strong>Role &amp; Responsibilities:</strong><br/>-Design and build applications for the iOS platform<br/>-Ensure the performance, quality, and responsiveness of applications<br/>-Collaborate with the team to define, design, and ALWAYS SHIP EPIC features<br/>-Maintain and improve code quality, organization, and automatization<br/>-Identify and fix bugs<br/><br/><strong>Mission/Purpose:</strong><br/>We are seeking a highly skilled iOS developer to join our Product Development team to help build new features for our core product. This role primarily is responsible for the development of iOS applications and their integration with backend services. The ideal candidate will possess a passion for making an impact through pushing the limits of mobile technologies and will work alongside other engineers and developers to design the next generation of the app and SHIP EPIC!<br/><br/><strong>Needed Skills:</strong><br/>-Proven experience developing full stack iOS mobile applications<br/>-Ensure the performance, quality, and responsiveness of applications<br/>-Create and maintain unit and integration tests for the app<br/>-Demonstrated leadership ability and personal accountability<br/>-Self-motivated and resourceful<br/>-Strong communication skills, both verbal and written<br/>-Organization &amp; planning<br/>-Proactive communication<br/><br/><strong>What technical knowledge do you need to perform in your role?</strong><br/>Required: XCode, Git<br/>Preferred: Python, AWS Infrastructure<br/><br/><strong>Qualifications (Must haves):</strong><br/>-Proven work experience developing full stack iOS mobile applications<br/>-Have shipped 2 or more mobile applications for release on the app store<br/>-In-depth understanding of Swift<br/>-Up to date experience with iOS frameworks such as UIKit, Core Animation, etc<br/>-Experience with offline storage, threading, and performance tuning<br/>-Familiarity with RESTful APIs to connect iOS applications to backend services<br/>-Knowledge of other web technologies and UI/UX standards<br/>-Familiarity with cloud message APIs and push notifications<br/>-Proficient understanding of code versioning tools, notably git<br/>-Comfortable working in an Agile development environment<br/>-Loves fast paced environment and learning new technologies<br/><br/><strong>Qualifications (Nice to haves):</strong><br/>-Familiarity with backend technologies and how to interface with them<br/>-Development experience in Python or Node.js<br/>-Experience with OpenCV<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/820743-senior-ios-developer" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
        <div className="div-block-98">
          <div className="div-block-97">
            <div data-w-id="fc96f3a1-8896-0c39-2c00-302f714da2fb" className="accordion-trigger w-clearfix">
              <p className="paragraph-18 number">07</p>
              <h3 className="heading-46">Senior Backend Developer<br/></h3><img src={expand} alt="" className="expand-icon"/></div>
            <div className="p-qs w-clearfix">
              <p className="paragraph">$140k – $180k • 0.0% – 0.1%<br/>Paid partial salary, Partial equity until Series A closes around March/April. Will shift to full-time, full salary upon closing of Series A round. Consumer facing experience is crucial.<br/><br/>Needed Skills:<br/>Python<br/>Flask<br/>REST APIs<br/>Pytest<br/>Docker<br/>SQL<br/>AWS<br/>AWS RDS<br/></p><a href="https://angel.co/company/vessel-tracker/jobs/695039-backend-developer" target="_blank" className="dark-bt job w-button">Learn more</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="find-your-better">
    <div className="container-9 w-container">
      <div className="div-block-32 w-clearfix">
        <h2 className="white heading">Your best is yet to come</h2>
        <p className="paragraph white">Coming summer 2020.</p><Link to="/wellness-test-cards" className="dark-bt white w-button">Pre-order</Link></div>
    </div>
    <div className="footer-content">
      <div className="container-10 w-container">
        <div className="div-block-36"><img src={white_logo} height="40" alt="" className="image-11"/></div>
        <div className="div-block-35">
          <div className="footer-text">Email: <a href="mailto:wegotyou@vesselhealth.com?subject=Vessel%20Health%20General%20Inquiry"><span className="footer-link">wegotyou@vesselhealth.com</span></a></div><a href="http://vesselhealth.zendesk.com/" target="_blank" className="footer-link">Help Center</a></div>
        <div className="div-block-35">
        <Link className="footer-link" to="/">Wellness Test Card</Link>
        <Link className="footer-link" to="/coronavirus">Coronavirus Test Card</Link>
        <Link className="footer-link" to="/coronavirus-grouptesting">Coronavirus Group Testing</Link>
        <Link className="footer-link" to="/about">About</Link>
        <Link className="footer-link" to="/careers">Careers</Link>
        <Link className="footer-link" to="/partner">Partner</Link>
        <Link className="footer-link press-f" to="#">Press</Link>
        </div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em>&nbsp;<a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div>
          <Link className="footer-link notice" to="/privacy-policy">Privacy Policy</Link>
          <Link className="footer-link notice" to="/terms-of-service">Terms of Service</Link>
          <div className="footer-text notice patent">Patent Pending</div>
          <div className="footer-text notice disclaimer">* <strong>This product is intended only for maintaining and encouraging a healthy lifestyle and is unrelated to the diagnosis, cure, mitigation, prevention, or treatment of a disease or condition</strong>. &nbsp;Designed by Vessel in California.</div>
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