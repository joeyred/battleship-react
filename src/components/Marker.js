import React from 'react';
import PropTypes from 'prop-types';

import calcPosition from '../util/calcPosition';

import styles from './Marker.module.scss';

const Marker = (props) => {
  const style = {
    gridArea: calcPosition(props.location)
  };
  return (
    <figure className={`${styles.base} ${styles[props.type]}`} style={style}></figure>
  );
}

Marker.propTypes = {
  type: PropTypes.string.isRequired,
  location: PropTypes.array
};

export default Marker;
