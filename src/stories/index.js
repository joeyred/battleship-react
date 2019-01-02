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
  .add('on', () => <Light colorOn='#6BF27B' colorOff='#7EC493' on={true} />)
  .add('off', () => <Light colorOn='#6BF27B' colorOff='#7EC493' on={false} />)
  ;
storiesOf('Button', module)
  .add('on', () => <Button on={true}/>)
  .add('off', () => <Button on={false}/>)
  ;
storiesOf('ButtonGroup', module)
  .add('horizontal', () =>
    <ButtonGroup
      numberOfButtons={5}
      orientation='horizontal'
    />)
    .add('vertical', () =>
      <ButtonGroup
        numberOfButtons={5}
        orientation='vertical'
      />);

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
