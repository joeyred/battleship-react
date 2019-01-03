import React from 'react';
import PropTypes from 'prop-types';

import Graphic from './Graphic';

const Button = (props) => {
  // const background = ('top' || 'bottom' || 'left' || 'right' || 'full') ? props.background : false;
  const background = props.background ? props.background : false;
  const backgroundFill = '#98ABBC';
  const circleRadius = 25;
  const graphicRadius = 30;

  const {
    on,
    pressed
  } = props;
  const position = pressed ? {
    cx: graphicRadius,
    cy: graphicRadius - 0.4,
    r: circleRadius - 2
  } : {
    cx: graphicRadius,
    cy: graphicRadius,
    r: circleRadius - 1
  };

  const bg =
    (!background) ? null :
    (background === 'top') ? <path d='M30,0C13.4,0,0,13.4,0,30v30h60V30C60,13.4,46.6,0,30,0z' fill={backgroundFill} /> :
    (background === 'bottom') ? <path d='M0,0v30c0,16.6,13.4,30,30,30s30-13.4,30-30V0H0z' fill={backgroundFill} /> :
    (background === 'left') ? <path d='M60,0H30C13.4,0,0,13.4,0,30s13.4,30,30,30h30V0z' fill={backgroundFill} /> :
    (background === 'right') ? <path d='M30,0H0v60h30c16.6,0,30-13.4,30-30S46.6,0,30,0z' fill={backgroundFill} /> :
    <rect width='60' height='60' fill={backgroundFill} />;

  const lightFill = on ? 'url(#light)' : '#FFFFFF';
  return (
    <Graphic viewBox={graphicRadius * 2}>
      <defs>
        {/* Outer Gradiant */}
        <radialGradient id='outer' cx={graphicRadius} cy={graphicRadius} r={circleRadius} gradientUnits='userSpaceOnUse'>
          <stop offset='0.887' stopColor='#323232' />
          <stop offset='1' stopColor='#231f20' />
        </radialGradient>

        {/* Button Gradiant */}
        <radialGradient id='button' cx={graphicRadius} cy={graphicRadius} r={circleRadius - 1} gradientUnits='userSpaceOnUse'>
          <stop offset='0.888' stopColor='#fff' stopOpacity='0.4' />
          <stop offset='0.993' stopColor='#b5b5b5' stopOpacity='0.6' />
        </radialGradient>

        <radialGradient id='light' cx={graphicRadius} cy={graphicRadius} r={circleRadius - 1} gradientUnits='userSpaceOnUse'>
          <stop offset='0' stopColor='#fff9d4' />
          <stop offset='0.485' stopColor='#faf1af' />
          <stop offset='1' stopColor='#f4e783' />
        </radialGradient>
      </defs>
      {bg}
      <g id='Button'>

        <circle fill='url(#outer)' cx={graphicRadius}  cy={graphicRadius}  r={circleRadius} />
        <circle fill={lightFill} id="light" {...position} />
        <circle fill='url(#button)' {...position} />
      </g>
    </Graphic>
  );
}

Button.propTypes = {
  on: PropTypes.bool.isRequired,
  pressed: PropTypes.bool.isRequired,
  background: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
    'full'
  ]),
};

export default Button;
