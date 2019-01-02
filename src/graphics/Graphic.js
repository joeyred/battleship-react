import React from 'react';
import PropTypes from 'prop-types';

const Graphic = (props) => {

  const {
    // min-x, min-y, width, height
    viewBox,
    height,
    width,
    display,
    keepRatio,
    attributes
  } = props;

  // Put all attributes together
  if (keepRatio) attributes.preserveAspectRatio = 'xMidYMid meet';
  if (props.className) attributes.className = props.className;

  // Deal with building out the string value for viewBox if an array is passed
  if (viewBox.constructor === Array) {
    if (viewBox.length === 2) {
      attributes.viewBox = `0 0 ${viewBox[0]} ${viewBox[1]}`
    }
    if (viewBox.length === 4) {
      attributes.viewBox = `${viewBox[0]} ${viewBox[1]} ${viewBox[2]} ${viewBox[3]}`
    }
  }
  const element = display ?
    <svg
      xmlns='http://www.w3.org/2000/svg'
      {...attributes}
    >
      {props.children}
    </svg> : null;

  return display ? element : null;
}

Graphic.propTypes = {
  viewBox: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  display: PropTypes.bool,
  keepRatio: PropTypes.bool,
  attributes: PropTypes.object
};

Graphic.defaulProps = {
  height: false,
  width: false,
  display: true,
  keepRatio: true,
  attributes: {}
};

export default Graphic;
