import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <nav className='footer-nav'>
                <ul className='nav-items'>
                    <a>Home</a>
                    <a>Terms and Conditions</a>
                    <a>Privacy Policy</a>
                    <a>Collection Statement</a>
                    <a>Help</a>
                    <a>Manage Account</a>
                    <a>Podcasts</a>
                    <a>About Talkieflux</a>
                </ul>
            </nav>
            <div className='social-links'>
                <ul>
                        <img className='social-fb' src="/images/facebook.png" alt="" />
                        <img className='social-linked' src="/images/linkedIn.png" alt="" />
                </ul>
            </div>
            <div className='brand-info'>
            <div className='footer-logo'>
                <img src="/talkieflux-logo.png" alt="" />
            </div>
            <div className='copyright'>
                <p>Visit Talkieflux’s not-for-profit parent, the Talkieflux Group Foundation.
Portions of this content are ©2018–2023 by individual talkieflux.com contributors. Content available under a Creative Commons license.</p>
            </div>
            </div>
            <div className='web-url'>
                <a href="#">www.talkieflux.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer