import React from "react"
import { Link } from "gatsby"
import white_logo from "../images/white-logo.png"

class Footer extends React.Component {
    render() {
        return (
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
        <Link className="footer-link" to="https://vesselhealth.com/blog/">Blog</Link>
        <Link className="footer-link" to="/careers">Careers</Link>
        <Link className="footer-link" to="/partner">Partner</Link>
        <Link className="footer-link press-f" to="#">Press</Link>
        </div>
      </div>
      <div className="container-11 w-container">
        <div className="div-block-36">
          <h4 className="lab-child white last"><a href="https://www.instagram.com/vesselhealth/" target="_blank" className="link">Ig</a><em className="italic-text-2">/</em><a href="https://www.facebook.com/vesselhq" target="_blank" className="link">Fb</a><em className="italic-text-2">/</em><a href="http://twitter.com/wearevessel" target="_blank" className="link">Tw</a><em className="italic-text">/</em> <a href="https://www.youtube.com/channel/UCljstRPPpBCBwe_un2pU45w" target="_blank" className="link-2">Yt</a></h4>
        </div>
        <div className="div-block-37">
          <div className="footer-text notice">2020 Vessel. All rights Reserved.</div>
          <Link className="footer-link notice" to="/privacy-policy">Privacy Policy</Link>
          <Link className="footer-link notice" to="/terms-of-service">Terms of Service</Link>
          <div className="footer-text notice patent">Patent Pending</div>
          <div className="footer-text notice disclaimer">* <strong>This product is intended only for maintaining and encouraging a healthy lifestyle and is unrelated to the diagnosis, cure, mitigation, prevention, or treatment of a disease or condition</strong>.  Designed by Vessel in California.</div>
        </div>
      </div>
    </div>
        )
    }
}
export default Footer