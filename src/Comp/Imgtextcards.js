import React from "react";
import PropTypes from "prop-types";

const Imgtextcards = (props) => {
  return (
    <>
      <div className="Imgtextcards1">
        <div className="Imgtextcards1D Imgtextcards1D_img">
          <h2>
            EATING WELL SHOULD
            <br />
            TASTE GOOD, TOO.
          </h2>
          <p>
            That’s why our recipes are created by a real chef. Our test kitchen
            is a real restaurant. Our ingredients are the best we can
            find—organic whenever possible. And we add nothing unnecessary.
            Ever. There’s no need when you start with ingredients whose flavors
            stand out naturally.
          </p>
          <a href="">Read More</a>
        </div>
        <div className="Imgtextcards1D Imgtextcards1D_text"></div>
      </div>
     
      <div className="Imgtextcards1 mt-0">
        <div className="Imgtextcards1D Imgtextcards1D_text Imgtextcards2D_text"></div>
        <div className="Imgtextcards1D Imgtextcards1D_img">
          <h2>
            EATING WELL SHOULD
            <br />
            BE SIMPLE.
          </h2>
          <p>
            Yet finding the time to make delicious, wholesome meals is hard.
            We’re changing that—one mouthwatering meal at a time. By preparing
            simple recipes you can feel good about eating, that are ready in
            minutes. And taste better than you ever thought frozen food could.
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </>
  );
};

Imgtextcards.propTypes = {};

export default Imgtextcards;
