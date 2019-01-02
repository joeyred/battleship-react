import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './SquareContainer.module.scss';



const SquareContainer = (props) => {
  return (

    <div className={styles.container}>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>

  );
};

// SquareContainer.propTypes = {
//   dimensions: PropTypes.array
// };

export default SquareContainer;
