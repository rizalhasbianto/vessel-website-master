import React from "react"
import { Link } from "gatsby"
import close from "../images/close.png"
import white_logo from "../images/white-logo.png"

class Footer extends React.Component {
    componentDidMount() {
        // cookies
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
    } else {
       setCookie("username", 'vessel', 30);
       var bar = document.getElementsByClassName("cookies-bar");
       bar[0].classList.add("showing");
       var cookies = document.getElementById("cookies");
       cookies.addEventListener('click', (event) => {
        event.preventDefault();
      var bar = document.getElementsByClassName("cookies-bar");
         bar[0].classList.remove("showing");
       });
    }
  }
  checkCookie();
  // Press popup
  document.getElementsByClassName("press-f")[0].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementsByClassName('poups')[0].classList.remove("asup");
    document.getElementsByClassName('press-pop')[0].classList.remove("hiding");
    document.getElementsByClassName('poups')[0].classList.add("kaluar");
    document.getElementsByClassName('press-pop')[0].classList.add("showing");
  });
  document.getElementsByClassName("press-c")[0].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementsByClassName('poups')[0].classList.remove("kaluar");
    document.getElementsByClassName('press-pop')[0].classList.remove("showing");
    document.getElementsByClassName('poups')[0].classList.add("asup");
    document.getElementsByClassName('press-pop')[0].classList.add("hiding");
  });
    }
    render() {
        return (
          <>
          <div className="poups asup">
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
        <div className="disclaimer">By submitting this form you agree to our <a href="/terms-of-service" className="link-10">terms of service</a> and <a href="/privacy-policy" className="link-9">privacy policy.</a></div>
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
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="/">Wellness Test Card</Link>
                </div>
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="/coronavirus">Coronavirus Test Card</Link>
                </div>
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="/about">About</Link>
                </div>
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="/careers">Careers</Link>
                </div>
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="/partner">Partner</Link>
                </div>
                <div className="nav-li">
                  <Link className="nav-link-2 w-nav-link " to="#">Press</Link>
                </div>
              </nav>
            <div className="w-nav-overlay" data-wf-ignore=""></div></div>
            <div className="div-block-58">
              <div><a href="https://vesselhealth.zendesk.com/" target="_blank" aria-current="page" className="dark-bt white w-button w--current">Support</a></div>
              <div>
                <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em>&nbsp;<a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
              </div>
            </div>
          </div>
          <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a25f" className="div-block-117"></div>
        </div>
      </div>
    </div>
    <div className="press-pop hiding">
      <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a261" className="div-block-130"></div>
      <div className="div-block-59">
        <div data-w-id="a4fe9eb0-4130-2c0c-fef5-aca3a688a263" className="close pop press-c"><img src={close} alt=""/></div>
        <div className="div-block-53 pop">
          <h1 className="heading popup">For press inquiries<br/></h1>
          <h3 className="heading-61 email-click"><a href="mailto:press@vesselhealth.com?subject=Vessel%20Health%20press%20inquiry" className="link-13">press@vesselhealth.com</a></h3>
        </div>
      </div>
    </div>
  </div>
        <div className="cookies-bar">
            <div className="w-container">
              <div className="cookies-notice">
                <p className="paragraph-28 cookies">This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.
                <Link to="/privacy-policy">Learn more</Link>
                </p>
                <Link to="#" className="dark-bt cookies w-button" id="cookies">Got it</Link>
                </div>
            </div>
        </div>
        </>
            )
    }
}
export default Footer