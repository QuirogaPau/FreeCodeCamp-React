import React from 'react'
import freeCodeCampLogo from '../image/freecodecamp-logo.png'; 


 const Logo = (logo) => {
  return (
    <div>
        
        <img src={freeCodeCampLogo} alt='Logo de freeCodeCamp' className='freecodecamp-logo' />
    </div>
  )
}

export default Logo;
