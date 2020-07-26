import PropTypes from "prop-types";
import React from "react";

const TextGridOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div style={{ textAlign: "justify", width: "75%", marginLeft: "12.5%" }} className="col-lg-10 col-md-4">
      <div
        className={`single-mission ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <h3>{data.title}</h3>
        <p>
          <ul>
            {data.text.map((zebi, i) =>
              i % 2 === 0 ? (<li style={{ fontWeight: "bold" }}>{zebi}</li>) : (<li>{zebi}</li>)
            )}
          </ul>
        </p>
      </div>
    </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default TextGridOneSingle;
