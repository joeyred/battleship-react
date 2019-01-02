import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Graphics from '../graphics/Graphic';

import Button from './Button';

import styles from './ButtonGroup.module.scss';

export default class ButtonGroup extends Component {
  state = {
    activeIndex: null
  }
  static propTypes = {
    numberOfButtons: PropTypes.number.isRequired,
    startingIndex: PropTypes.number,
    orientation: PropTypes.oneOf(['vertical', 'horizontal'])
  }
  handleClick = (i) => {
    if (this.state.activeIndex !== i) this.setState({activeIndex: i});
  }

  render() {
    const {
      numberOfButtons,
      orientation
    } = this.props;
    const activeIndex = this.state.activeIndex;
    const directions =
      (orientation === 'horizontal') ?
        ['left', 'right'] :
        ['top', 'bottom']
    ;

    let buttons = [];
    let direction;

    for (let i = 0; i < numberOfButtons; i++) {
      // if (i === 0) {
      //   direction = directions[0];
      // } else if (i === numberOfButtons - 1) {
      //   direction = directions[1];
      // } else {
      //   direction = 'full';
      // }
      direction =
        (i === 0) ? directions[0] :
        (i === numberOfButtons - 1) ? directions[1] :
        'full'
      ;

      buttons.push(
          <Button
            key={`child-button-${i}`}
            on={(i === activeIndex)}
            background={direction}
            className={`${styles.button} ${styles[`button-${orientation}`]}`}
            onClick={() => this.handleClick(i)}
          />
      );
    }
    return (
      <div className={`${styles.base} ${styles[orientation]}`}>
        {buttons}
      </div>
    );
  }
}
