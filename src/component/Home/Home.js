import "./Home.css"
import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: '../images/slide-01.jpg',
  },
  {
    src: '../images/slide-02.jpg',
  },
  {
    src: '../images/slide-03.jpg',
  }
];

const Home = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} />
          <CarouselCaption />
        </CarouselItem>
      );
    });
  
    return (
        <div className="Homepage">
        <div className="col-lg-4 left-home">
            <div className="left-content">
                <div className="inner-content">
                    <h4>KlassyCafe</h4>
                    <h6>THE BEST EXPERIENCE</h6>
                    <div className="main-white-button scroll-to-section">
                    <a href="#reservation">Make A Reservation</a>
                    </div>
                </div>
                </div>

            </div>
        <div className="col-lg-8 right-home">
            <Carousel className="slide"
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>

        </div>
        </div>
    );
  }
  
  export default Home;