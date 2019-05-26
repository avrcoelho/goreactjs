import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Footer = ({ count }) => (
  <p>
    Voce tem
    {` ${count} `}
    favoritos
  </p>
);

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  // faça a logica aqui, caso não tenha conseguido fazer dentro do redux
  // não faça lógica no render
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
