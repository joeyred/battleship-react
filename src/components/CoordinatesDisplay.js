import React from 'react';
import PropTypes from 'prop-types';
// utils
import numberToLetter from '../util/numberToLetter';
// Graphics
import * as Graphic from '../graphics';
// Styles
import styles from './CoordinatesDisplay.module.scss';

const CoordinatesDisplay = (props) => {

  const x = props.coordinates[0];
  const y = props.coordinates[1];

  return (
    <div className={styles.container}>
      <figure className={styles['left-ssd']}>
        <Graphic.SevenSegmentDisplay character={numberToLetter(x)} />
      </figure>

      <figure className={styles['left-ssd']}>
        <Graphic.SevenSegmentDisplay character={y} />
      </figure>
    </div>
  );
}

CoordinatesDisplay.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default CoordinatesDisplay;
