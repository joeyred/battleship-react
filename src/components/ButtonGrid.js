import React from 'react';
import PropTypes from 'prop-types';

import getGridTemplateValue from '../util/getGridTemplateValue';
import {grid} from '../util/calcPosition';


function generateSpaces(dimentions) {
  const firstSpace = [0, 0];
  const lastSpace = [dimentions[0], dimentions[1]];
  let x, y;
  let spaces = [];
  for (x = firstSpace[0]; x < lastSpace[0]; x++) {
    for (y = firstSpace[1]; y < lastSpace[1]; y++) {
      spaces.push([x, y]);
    }
    y = 0;
  }
  return spaces;
}

const ButtonGrid = (props) => {
  const showCoordinates = props.showCoordinates || false;
  const spaces = generateSpaces(props.dimentions);
  const inlineGridStyles = {
    display: 'grid',
    gridTemplateColumns: getGridTemplateValue(props.dimentions[0]),
    gridTemplateRows: getGridTemplateValue(props.dimentions[1])
  };
  let gridButtons = [];
  let coordinatesElement;
  let style;
  let handlers = {};
  for (let i = 0; i < spaces.length; i++) {
    style = {
      gridArea: grid(spaces[i])
    };
    if (props.handleSelection) {
      handlers.onClick = () => props.handleSelection(spaces[i]);
    }
    if (props.handleHover) {
      handlers.onMouseEnter = () => props.handleHover(spaces[i]);
    }
    if (showCoordinates) {
      coordinatesElement = <span>{`${spaces[i][0]}, ${spaces[i][1]}`}</span>;
    }
    gridButtons.push(
      <button
        {...handlers}
        style={style}
        key={i}
        >
        {showCoordinates ? coordinatesElement : null}
      </button>
    );
  }
  return (
    <div style={{width: '100%', height: '100%', ...inlineGridStyles, ...props.style}}>
      {gridButtons}
    </div>
  );
};

ButtonGrid.propTypes = {
  showCoordinates: PropTypes.bool,
  dimentions: PropTypes.array.isRequired,
  handleSelection: PropTypes.func,
  handleHover: PropTypes.func
};
export default ButtonGrid;
