import React from 'react';
import PropTypes from 'prop-types';

import Graphic from './Graphic';

const ButtonBackground = (props) => {
  const direction = ('top' || 'bottom' || 'left' || 'right') ? props.direction : false;
  const fill = props.fill || '#000000';

  const bg =
    (direction === 'top') ? <path d='M30,0C13.4,0,0,13.4,0,30v30h60V30C60,13.4,46.6,0,30,0z' /> :
    (direction === 'bottom') ? <path d='M0,0v30c0,16.6,13.4,30,30,30s30-13.4,30-30V0H0z' /> :
    (direction === 'left') ? <path d='M60,0H30C13.4,0,0,13.4,0,30s13.4,30,30,30h30V0z' /> :
    (direction === 'right') ? <path d='M30,0H0v60h30c16.6,0,30-13.4,30-30S46.6,0,30,0z' /> :
    <rect width='60' height='60' />;

  return (
    <Graphic height={60} width={60}>
      {bg}
    </Graphic>
  );
}

ButtonBackground.propTypes = {
  direction: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
    false
  ]),
  fill: PropTypes.string
};

export default ButtonBackground;
