import React from 'react';
import PropTypes from 'prop-types';

import styles from './ControlGroupHeader.module.scss';

const ControlGroupHeader = (props) => {
  const Element = `h${props.level}`;
  return (
    <Element className={styles.base}>
      <span className={styles.text}>{props.children}</span>
    </Element>
  );
}

ControlGroupHeader.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired
};

export default ControlGroupHeader;
