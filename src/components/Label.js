import React from 'react';
import PropTypes from 'prop-types';

import styles from './Label.module.scss';

const Label = (props) => {
  return (
    <span className={styles.label}>{props.children}</span>
  );
}

Label.propTypes = {};

export default Label;
