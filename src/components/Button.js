import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

import * as Graphic from '../graphics';

export default class Button extends Component {
  state = {
    mouseDown: false
  }
  static propTypes = {
    on: PropTypes.bool.isRequired,
    /**
     * Whether or not the button can be interacted with.
     * @type {boolean}
     */
    disabled: PropTypes.bool,

    /**
     * Called after user's click.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,
    background: PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right',
      'full'
    ])
  }
  clickHandler = (e) => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    this.props.onClick();
  }
  mouseHandler = (e) => {
    // console.log(e);
    const mouseDown = this.state.mouseDown;
    // console.log(`old: ${mouseDown}`);
    switch (mouseDown) {
      case false : this.setState({mouseDown: true}); break;
      case true : this.setState({mouseDown: false});

    }
    // console.log(`new: ${mouseDown}`);
  }

  render() {
    const {
      mouseDown
    } = this.state;
    const {
      on,
      className
    } = this.props;
    const background = this.props.background || false;
    return (
      <button
        role='button'
        className={`${styles.reset} ${className}`}
        onMouseDown={this.mouseHandler}
        onMouseUp={this.mouseHandler}
        onClick={this.clickHandler}
      >
        <Graphic.Button
          on={on}
          pressed={mouseDown}
          background={background}
        />
      </button>
    );
  }
}
