import React from "react";

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return(
        <footer>
            <div className="footer">
                <a href="https://twitter.com/Jefferson2k6?s=08" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter twitter"></i></a>
                <a href="https://www.facebook.com/jefferson.chukwu.71?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook facebook"></i></a>
                <a href="https://wa.me/+23459676272" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp whatsapp"></i></a>
                <a href="https://www.instagram.com/jefferson18006/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram instagram"></i></a>
            </div>
            <h3 style={{color: 'white', textAlign: 'center', marginTop: '0'}}>Copyright &copy; {year}, Jefferson. All rights reserved.</h3>
        </footer>
    )
}