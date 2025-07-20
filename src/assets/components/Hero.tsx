import "./Hero.css";
import watchIcon from "./watch.svg";
import illustration_pic from "./pictures/illustration.svg";
import { useState } from "react";

function Hero() {
  const [ifImgGlow, setIfImgGlow] = useState(false);
  const [ifShowImage, setShowImage] = useState(true);

  //   const handleClick = ()=>{
  //     setShowImage(!ifShowImage);
  //   }
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="left-col">
            <p className="subhead">It's Nitty &amp; Gritty</p>
            <h1>A Task App That Doesn't Stink</h1>

            <div className="hero-cta">
              <a href="#" className="primary-cta">
                Try for free
              </a>
              <a href="#" className="watch-a-video-cta">
                <img src={watchIcon} alt="watch" />
                Watch a video
              </a>
            </div>
          </div>
          {/*show image only if visible*/}
          {ifShowImage && (
            <img
              src={illustration_pic}
              className={ifImgGlow ? "hero-img glow" : "hero-img"}
              alt="illustration"
              onMouseEnter={() => setIfImgGlow(true)}
              onMouseLeave={() => setIfImgGlow(false)}
              onClick={() => setShowImage(false)}
            ></img>
          )}
        </div>
      </section>
    </>
  );
}

export default Hero;
