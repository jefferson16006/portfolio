import React from "react";
import { ScrollProvider } from './components/ScrollContext';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function Home() {
    return(
        <ScrollProvider>
            <Header />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </ScrollProvider>
    )
}