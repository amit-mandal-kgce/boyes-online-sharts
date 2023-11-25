'use client'
import React from 'react'
import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';

const slideImages = [
  {
    src: "/slide1.jpg",
    heading: "Mens T-shart",
    smheading: "To days Biggest Offers",
  },
  {
    src: "/slide2.jpg",
    heading: "Womens Kurtas",
    smheading: "To days Biggest Offers",
  },
  {
    src: "/slide3.jpg",
    heading: "Mens Forman Shart",
    smheading: "To days Biggest Offers",
  },
  {
    src: "/slide4.jpg",
    heading: "Womens Lehenga Cholies",
    smheading: "To days Biggest Offers",
  },
  {
    src: "/slide5.jpg",
    heading: "Mens Danim sharts",
    smheading: "To days Biggest Offers",
  },
  {
    src: "/slide6.jpg",
    heading: "Top Dresses...",
    smheading: "To days Biggest Offers",
  },
];

function ImageSlider() {
  return (
    <div className=" py-4">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className=" bg-cover h-[400px]"
              style={{ backgroundImage: `url(${slideImage.src})` }}
            >
              <div className="p-16 sm:p-24">
                <h1 className="text-sm sm:text-3xl md:text-5xl font-bold text-white py-2">{slideImage.heading}</h1>
                <h2 className='text-2xl text-white font-semibold py-3'>{slideImage.smheading}</h2>
                <div className=" ">
                  <button className="bg-green-800 px-3 text-2xl text-white rounded-md py-1">
                    Shop now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider
