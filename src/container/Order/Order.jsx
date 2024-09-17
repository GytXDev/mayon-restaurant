// src/container/OrderOrder.jsx
import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import './Order.css';

const currentYear = new Date().getFullYear();

const Order = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Order;
