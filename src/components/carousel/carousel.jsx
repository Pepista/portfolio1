import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './carousel.css';

const images = [
    'Flag.png',
    'Frojdy.jpeg',
    'Lofoty,.png',
    'Mapa.png',
];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Předchozí</button>
            <TransitionGroup className="carousel-slide">
                <CSSTransition key={index} timeout={500} classNames="slide">
                    <img src={images[index]} alt={`Slide ${index + 1}`} />
                </CSSTransition>
            </TransitionGroup>
            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;