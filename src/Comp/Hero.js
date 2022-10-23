import React from "react";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <>
      <div className="Hero">
        <div className="HeroD HeroD1">
          <div className="HeroD_D HeroD_1">
            <div className="HeroD_D1_D HeroD_D1_1">
              GOOD FOOD
              <br />
              GOOD MOOD
            </div>
          </div>
          <div className="HeroD_D HeroD_2">
            <div className="HeroD_D2_D HeroD_D2_1">
              <span className="HeroD_D2_D_Span">
                Born more than 40 years ago as Mr. Natural's Good Food Store,
                we're still Missoula's home for locally-produced, organic and
                bulk foods. Now our name's a little shorter. And the store’s a
                lot bigger. But our mission remains the same:
              </span>
              <a className="HeroD_D2_D_a" href="">Read More</a>
            </div>
            <div className="HeroD_D2_D HeroD_D2_2">
               <span className="HeroD_D2_D_Span colorGrey BOY">
                The Good Food Store is dedicated to supporting a healthy
                community. We provide a wide selection of organic food and natural
                products, conduct our business in an ethical and respectful manner
                and donate to organizations in need.
              </span>
            </div>
          </div>
        </div>
        <img
          src="//images01.nicepage.com/d4/2a/d42af3f464955b038c7b12a3b7f259b6.png"
          alt="IMG"
        />
      </div>
    </>
  );
};

Hero.propTypes = {};

export default Hero;
