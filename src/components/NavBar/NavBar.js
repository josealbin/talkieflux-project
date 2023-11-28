import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <img className='brand-logo' src="/talkieflux-logo.png" alt="brand-logo" />
        <img className='avatar' src="/avatar.png" alt="avatar" />
    </div>
  )
}

export default NavBar