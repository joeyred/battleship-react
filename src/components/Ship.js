import React from 'react';
import PropTypes from 'prop-types';

import calcPosition from '../util/calcPosition';

import * as Graphic from '../graphics';

// import styles from './Ship.module.scss';

const Ship = (props) => {
  const {
    name,
    size,
    direction,
    locations,
    positioningMethod,
    attributes
  } = props;
  attributes.style = {};
  if (positioningMethod === 'grid') {
    attributes.style.gridArea = calcPosition.grid(locations);
  }
  attributes.style.padding = '0.3rem';


  const shipGraphic =
    name === 'carrier' ? <Graphic.Carrier direction={direction} /> :
    name === 'battleship' ? <Graphic.Battleship direction={direction} /> :
    name === 'cruiser' ? <Graphic.Cruiser direction={direction} /> :
    name === 'submarine' ? <Graphic.Submarine direction={direction} /> :
    name === 'destroyer' ? <Graphic.Destroyer direction={direction} /> :
    null;

  return (
    <div
      {...attributes}
    >
      {shipGraphic}
    </div>
  );
}

Ship.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  locations: PropTypes.array.isRequired,
  positioningMethod: PropTypes.oneOf(['grid', 'absolute']),
  attributes: PropTypes.object
};

Ship.defaultProps = {
  positioningMethod: 'grid',
  attributes: {}
};

export default Ship;
