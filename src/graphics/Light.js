import React from 'react';
import PropTypes from 'prop-types';

import Graphic from './Graphic';

import styles from './Light.module.scss';

const Light = (props) => {
  const {
    on,
    colorOn,
    colorOff
  } = props;
  return (
    <figure className={styles.container}>
      <Graphic viewBox={[60, 60]}>
        <defs>
          <radialGradient id='light_cover' cx='30' cy='30' r='26.168' gradientUnits='userSpaceOnUse'>
              <stop offset='0' stopColor='#ccc' stopOpacity='0.3' />
              <stop offset='0.303' stopColor='#a7a7a7' stopOpacity='0.3' />
              <stop offset='0.95' stopColor='#4d4d4d' stopOpacity='0.3' />
          </radialGradient>
        </defs>

        <circle className='outer-ring' fill='#8C8C8C' cx='30' cy='30' r='30' />
        <circle className='light-color' fill={colorOff} cx='30' cy='30' r='26.2' />
        <circle className='light-cover' fill='url(#light_cover)' cx='30' cy='30' r='26.2' />
      </Graphic>


      <Graphic viewBox={[60, 60]} display={on} className={styles.glow}>
        <defs>
          <filter id='effect_blur'>
            <feGaussianBlur stdDeviation='2' />
          </filter>
          <radialGradient id='light_cover' cx='30' cy='30' r='26' gradientUnits='userSpaceOnUse'>
            <stop offset='0' stopColor='#ccc' stopOpacity='0.3' />
            <stop offset='0.303' stopColor='#a7a7a7' stopOpacity='0.3' />
            <stop offset='0.95' stopColor='#4d4d4d' stopOpacity='0.3' />
          </radialGradient>
        </defs>

        <circle fill={colorOn} filter='url(#effect_blur)' className='st1' cx='30' cy='30' r='30' />
        <circle fill='url(#light_cover)' filter='url(#effect_blur)' className='st1' cx='30' cy='30' r='30' />
      </Graphic>
    </figure>
  );
}

Light.propTypes = {
  colorOn: PropTypes.string.isRequired,
  colorOff: PropTypes.string.isRequired,
  on: PropTypes.bool.isRequired,
};

export default Light;
