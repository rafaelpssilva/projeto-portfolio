import React from 'react'

import './Header.css'

function Header() {

    return (
        <header class="header">
            <nav>
                <a href="/" class="logo">
                    R
                </a>

                <ul class="sidenav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Projetos</a></li>
                </ul>
    

                <button className='btn-mobile-menu'>Menu</button>
            </nav>
        </header>
    )
}

export default Header 