import React from 'react';
import PropTypes from 'prop-types';

const Ship = (props) => {
  return (<div></div>);
}

Ship.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
  locations: PropTypes.array.isRequired,
  positioningMethod: PropTypes.oneOf(['grid', 'absolute'])
};

export default Ship;
