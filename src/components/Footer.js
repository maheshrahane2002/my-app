import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>At/Post.Chandanapuri.</p>
                    <p>Tal.Sangamner,Dist.Ahmednagar.</p>
                    <p>MH-422 605.</p>
                    <p>India.</p>
                </div>
            </div>

            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            +917620010046</h4>
            </div>

            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            technorbit65@gmail.com</h4>
            </div>

        </div>
        <div className="right">
            <h4>About the Company :</h4>
            <p>This is me Mahesh Rahane. CEO and Founder of technOrbit. I enjoy discussing new projects and design challenges.</p>
        <div className="social">
        <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
        <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
        <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
        <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}}/>
        <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
