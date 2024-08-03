import React, { useState } from "react";
import { useScroll } from './ScrollContext';

export default function Portfolio() {
    const [modalImage, setModalImage] = useState(null);
    const { portfolioRef } = useScroll();

    const openModal = (image) => {
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return(
        <div>
            <section className="portfolio" id="portfolio" ref={portfolioRef}>
                <h2>My <span className="purple">Portfolio</span></h2>
                <div className="portfolio-gallery">
                    <div className="portfolio-item" onClick={() => openModal('images/to-do-list.png')}>
                        <img src={'images/to-do-list.png'} alt="Project 1" />
                        <div className="overlay">To do list</div>
                    </div>
                    <div className="portfolio-item" onClick={() => openModal('images/travel-journal.png')}>
                        <img src={"images/travel-journal.png"}  alt="Project 2" />
                        <div className="overlay">Travel journal</div>
                    </div>
                    <div className="portfolio-item" onClick={() => openModal('images/tenzies.png')}>
                        <img src={"images/tenzies.png"} alt="Project 3" />
                        <div className="overlay">Tenzies App</div>
                    </div>
                </div>
            </section>

            <div>
                {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={modalImage} alt="Enlarged" />
                </div>
            )}
            </div>
        </div>
    )
}