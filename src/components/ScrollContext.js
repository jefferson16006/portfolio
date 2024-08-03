// ScrollContext.js
import React, { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        if (section === 'portfolio' && portfolioRef.current) {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ScrollContext.Provider value={{ portfolioRef, contactRef, scrollToSection }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
