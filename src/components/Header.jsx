import React from 'react'
import '../assets/css/header.css'

export const Header = () => {
  return (
    <header className="layout__header">
        <div className="header__logo">
            <a id="logo" href="#home">
                <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"></img>
            </a>
        </div>      

        <nav className="header__nav">      

            <a href="#home">Inicio</a>
            <a href="#tvShows">Series</a>
            <a href="#movies">Películas</a>
            <a href="#originals">Originals</a>
                    
        </nav>

        <nav className="header__sub-nav">
            <a href="#"><i className="fas fa-search sub-nav-logo"></i></a>
            <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>
            <a target="_blank" href="https://borjaj96.github.io/portfolio/">Portfolio</a>        
        </nav>      
    </header>
  )
}
