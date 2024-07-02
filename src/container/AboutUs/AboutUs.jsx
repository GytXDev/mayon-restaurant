import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">À Propos de Nous</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Bienvenue au restaurant Le Mayon, où chaque repas est une célébration des saveurs et de la convivialité. Nous proposons un menu diversifié comprenant des pizzas savoureuses, des plats de cuisine raffinés, des accompagnements délicieux et des grillades succulentes. Notre mission est de vous offrir une expérience culinaire inoubliable dans un cadre chaleureux et accueillant.</p>
        {/*<button type="button" className="custom__button">En Savoir Plus</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre Histoire</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Depuis notre ouverture, nous nous efforçons de créer un lieu où la qualité des mets et l'accueil chaleureux se rencontrent. Notre chef talentueux prépare chaque plat avec soin, en utilisant les ingrédients les plus frais. Que vous ayez envie de déguster une pizza Vogienne, un filet de bœuf, ou une brochette de viande grillée, nous avons quelque chose pour satisfaire chaque palais.</p>
        {/*<button type="button" className="custom__button">En Savoir Plus</button>*/}
      </div>
    </div>
  </div>
);

export default AboutUs;
