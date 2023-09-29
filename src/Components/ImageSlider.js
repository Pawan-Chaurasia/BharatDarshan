import React from 'react'
import Slider from "react-slick";
import image from "./images/goan culture.jpg";
import img1 from "./images/heri.jpg";
import img2 from "./images/heri2.jpg";
import img3 from "./images/heri3.jpg";

export default function ImageSlider() {    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='container' >
        <div className="row" >
    <Slider {...settings} >
            <div className="col-md-4">
                <div className="card">
                    <img src={img1} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img2} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img3} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={image} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img2} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={image} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={img3} className='card-img-top' alt="img" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src={image} className='card-img-top' alt="img" />
                </div>
            </div>
    </Slider>
        </div>
    </div>
    </>
  )
}
