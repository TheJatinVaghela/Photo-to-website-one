import React from "react";
import PropTypes from "prop-types";

const Lastafterhero = (props) => {
  return (
    <>
      <div className="Lastafterhero">
        <a
          href="https://www.freeiconspng.com/img/20050"
          title="Image from freeiconspng.com"
        >
          <img
            src="https://www.freeiconspng.com/uploads/quotes-png-11.png"
            width="350"
            alt="Quotes Png Available In Different Size"
          />
        </a>
        <p className="mb-8">
          "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris
          efficitur, mauris in auctor euismod, quam elit ultrices urna, eget
          eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae,
          blandit mattis sapien. Sed aliquam leo et semper vestibulum."
        </p>
        <h2>Jatin Vaghela
          <br />
        <span className="ml-20">Software developer</span>
        </h2>
      </div>
    </>
  );
};

Lastafterhero.propTypes = {};

export default Lastafterhero;
