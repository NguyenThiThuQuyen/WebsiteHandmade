import React from 'react'
import {Carousel} from 'react-bootstrap'
import img from '../../Images/banner3.jpg'
import img1 from '../../Images/banner4.jpg'
import img2 from '../../Images/banner7.jpg'
import './Slide.css'

function Slide() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <div className="slide">
            <Carousel>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100 h-80"
                  src={img1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            </div>
        </div>
        <div className="col-4">
          
        </div>
      </div>
    </div>

    
  )
}

export default Slide