import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.blank} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Le Mot du Chef" />
      <h1 className="headtext__cormorant">Notre Engagement</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Chez Le Mayon, chaque plat est une expérience mémorable avec des ingrédients authentiques et de qualité, inspirés par nos traditions culinaires. Chaque création célèbre l'harmonie des saveurs et textures pour une expérience exceptionnelle.</p>
        </div>
        <p className="p__opensans">Notre approche de la gastronomie va au-delà de la cuisine ; elle incarne la convivialité et l'hospitalité. En tant que chef et fondateur de Le Mayon, je m'engage à vous offrir une expérience culinaire enrichissante et inoubliable à chaque visite.</p>
      </div>

      <div className="app__chef-sign">
        <p>Coulibaly</p>
        <p className="p__opensans">Chef & Fondateur</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
