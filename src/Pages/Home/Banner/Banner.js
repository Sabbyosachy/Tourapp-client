import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

//Banner added with some description

const Banner = () => {
    return (
        <div className="py-5">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://i.ibb.co/TcyRqkW/philipp-kammerer-6-Mxb-m-Z-Q8-E-unsplash-1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="title">Popular in Trip Ideas</h2>
      <p className="subtitle">From Arizona to Zambia, our list of the world’s famous Ponte Sant'Angelo Bridge, leading to Castel Sant'Angelo,Cancun, Mexico,Orlando,London.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/vwSggsW/rodrigo-ramos-PAz-k-D7cq-C8-unsplash-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="title"> World Best Places</h2>
      <p className="subtitle">With a world full of fascinating destinations, choosing the perfect vacation spot can present a and evaluated sights, cultures, scenic beauty, food scenes and more</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-25"
      src="https://i.ibb.co/B6QX2bj/luca-bravo-O453-M2-Liufs-unsplash-1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2 className="title">Best Packages</h2>
      <p className="subtitle">Although vacation packages generally offer lower prices than booking separately, this may not be the case every time.Cheaper flight than the options available in a package.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;