import React from 'react'
import Style from './Header.module.css';
const Header = () => {
  return (
   <header className={Style.header}>
        <div>
            <h1>Products</h1>
        </div>
        <nav className={Style.menu}>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Service</li>
                </ul>
        </nav>
   </header>
  )
}

export default Header