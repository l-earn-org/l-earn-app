import { useState } from "react";

import userIcon from "../assets/user1.jpg";
import user2Icon from "../assets/user2.jpg";
import user3Icon from "../assets/user34.jpg";

export const Testimonial = () => {
  const testimonials = [
    {
      userImg: user2Icon,
      username: "Melinda",
      text: "I never knew learning online could be this engaging. L-earn is simply amazing!",
    },
    {
      userImg: userIcon,
      username: "Jim",
      text: "L-earn platform has transformed the way I study. The resources are top-notch!",
    },
    {
      userImg: user3Icon,
      username: "Alvin",
      text: "A one-stop solution for anyone looking to gain real-world knowledge fast!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-grid">
          {testimonials.map((item, i) => {
            return (
              <div key={i} className="testimonial">
                <div>
                  <img src={item.userImg} />
                  <p>{item.username}</p>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/*  MOBILE VIEW  */}
      <div className="top-level-slider-container">
          <button onClick={prevSlide} className="nav-button left">
            &lt;
          </button>
        <div className="mobile-slider-container">

          <div className="mobile-testimonials-slider">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="testimonial"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="mobile-testimonial-header">
                  <img src={item.userImg} alt={item.username} />
                  <p>{item.username}</p>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

       
        </div>
        <button onClick={nextSlide} className="nav-button right">
            &gt;
          </button>
      </div>
    </>
  );
};
