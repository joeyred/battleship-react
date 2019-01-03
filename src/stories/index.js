import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Light from '../graphics/Light';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import ButtonGrid from '../components/ButtonGrid';
import SquareContainer from '../components/SquareContainer';

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Light', module)
  .add('on', () => <div style={{width: '60px', height: '60px'}}><Light colorOn='#6BF27B' colorOff='#7EC493' on={true} /></div>)
  .add('off', () => <div style={{width: '60px', height: '60px'}}><Light colorOn='#6BF27B' colorOff='#7EC493' on={false} /></div>)
  ;
storiesOf('Button', module)
  .add('on', () => <div style={{width: '60px', height: '60px'}}><Button on={true}/></div>)
  .add('off', () => <div style={{width: '60px', height: '60px'}}><Button on={false}/></div>)
  ;
storiesOf('ButtonGroup', module)
  .add('horizontal', () =>
    <div style={{height: '60px', width: '100%'}}>
    <ButtonGroup
      numberOfButtons={5}
      orientation='horizontal'
    /></div>)
    .add('vertical', () =>
      <div style={{height: '100%', width: '60px'}}>
      <ButtonGroup
        numberOfButtons={5}
        orientation='vertical'
      /></div>);

storiesOf('Button Grid', module)
  .add('square grid', () => (
    <SquareContainer>
      <ButtonGrid dimentions={[3, 3]} />
    </SquareContainer>
  ))
  .add('cell coordinates displayed', () => (
    <SquareContainer>
      <ButtonGrid
        dimentions={[3, 3]}
        showCoordinates={true}
      />
    </SquareContainer>
  ))

storiesOf('Square Container', module)
.add('square', () => <SquareContainer><span>Hi Hi Hi Hi</span></SquareContainer>);
