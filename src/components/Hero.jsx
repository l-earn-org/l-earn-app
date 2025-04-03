import heroImage from "../assets/landing-learn.png";
export const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="left">
          <h1>Creating the necessity for innovation through learning</h1>
          <p>
            Join us today and get skills and right networks in your area of
            interest.
          </p>
          <button>Join us for Free</button>
        </div>
        <div className="right">
          <img src={heroImage} />
        </div>
      </div>
      {/* MOBILE VIEW JSX */}
      <div className="hero-section-mobile">
        <div className="top">
          <h1>Creating the necessity for innovation through learning</h1>
          <img src={heroImage} />
          <p>
            Join us today and get skills and right networks in your area of
            interest.
          </p>
          <button>Join us for Free</button>
        </div>
      </div>
    </>
  );
};
