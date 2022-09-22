import React from 'react'
import { Link } from 'react-router-dom'

function MenuContainer({link, icon, isHome}) {
  return(
    <>   
     
   <li className={isHome ? 'active': ''}>
   <Link to={link}>
    <a >
    <span className='icon'>{icon}</span> 
    </a>
    </Link>
  </li>
  </>

  )
}

export default MenuContainer