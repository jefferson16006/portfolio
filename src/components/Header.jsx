import React from "react";
import { useScroll } from './ScrollContext';

export default function Header() {
    const { scrollToSection } = useScroll();
    return(
        <header>
            <div className="header">
                <h1>My name is <span className="purple">Jefferson</span></h1>
                <p>I am a Frontend developer</p>
                <div className="header-btn">
                    <button onClick={() => scrollToSection('portfolio')} className="portfolio-btn">Portfolio</button>
                    <button onClick={() => scrollToSection('contact')} className="contact-btn">Contact me</button>
                </div>
            </div>
        </header>
    )
}