import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Qui sont nous ?</h5>
          <h1>Lancement de nos services</h1>
          <p>Créée en Octobre 2009, Banque Zitouna est une banque commerciale universelle, qui obéit aux textes régissant l’activité bancaire en Tunisie. Il s'agit d'une Banque Citoyenne à forte responsabilité sociale ayant une grande volonté à contribuer à l’expansion économique du Pays.</p>
          <br></br>
          <h2>Nos mission</h2>



          <ul style={{}}>
            <li>Offrir une panoplie de produits et services Takaful Général et Takaful Family de haute valeur ajoutée conformes aux principes de la Finance Islamique.</li>
            <li>Participer à l’innovation et à la diversification des produits d’assurances Tunisiens.</li>
            <li>
              Contribuer au développement économique du pays, à la pérennité des entreprises et au bien-être social des particuliers.</li>
          </ul>


        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
