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
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import Label from '../components/Label';
import ControlGroupHeader from '../components/ControlGroupHeader';
import Ship from '../components/Ship';

import * as Graphic from '../graphics';

import '../scss/typography.scss';
import '../scss/resets.scss';

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
  ));

storiesOf('Seven Segment Display', module)
  .addDecorator(story =>
    <div
      style={{
        width: '20%',
        height: 'auto',
        margin: '4rem auto'
      }}
    >
    {story()}
    </div>
  )
  .add('0', () => (
    <Graphic.SevenSegmentDisplay character={0} />
  ))
  .add('1', () => (
    <Graphic.SevenSegmentDisplay character={1} />
  ))
  .add('2', () => (
    <Graphic.SevenSegmentDisplay character={2} />
  ))
  .add('3', () => (
    <Graphic.SevenSegmentDisplay character={3} />
  ))
  .add('4', () => (
    <Graphic.SevenSegmentDisplay character={4} />
  ))
  .add('5', () => (
    <Graphic.SevenSegmentDisplay character={5} />
  ))
  .add('6', () => (
    <Graphic.SevenSegmentDisplay character={6} />
  ))
  .add('7', () => (
    <Graphic.SevenSegmentDisplay character={7} />
  ))
  .add('8', () => (
    <Graphic.SevenSegmentDisplay character={8} />
  ))
  .add('9', () => (
    <Graphic.SevenSegmentDisplay character={9} />
  ))
  .add('a', () => (
    <Graphic.SevenSegmentDisplay character={'a'} />
  ))
  .add('b', () => (
    <Graphic.SevenSegmentDisplay character={'b'} />
  ))
  .add('c', () => (
    <Graphic.SevenSegmentDisplay character={'c'} />
  ))
  .add('d', () => (
    <Graphic.SevenSegmentDisplay character={'d'} />
  ))
  .add('e', () => (
    <Graphic.SevenSegmentDisplay character={'e'} />
  ))
  .add('f', () => (
    <Graphic.SevenSegmentDisplay character={'f'} />
  ))
  .add('g', () => (
    <Graphic.SevenSegmentDisplay character={'g'} />
  ))
  .add('h', () => (
    <Graphic.SevenSegmentDisplay character={'h'} />
  ))
  .add('i', () => (
    <Graphic.SevenSegmentDisplay character={'i'} />
  ))
  .add('j', () => (
    <Graphic.SevenSegmentDisplay character={'j'} />
  ));

storiesOf('CoordinatesDisplay', module)
  .addDecorator(story =>
    <div
      style={{
        width: '50%',
        height: 'auto',
        margin: '4rem auto'
      }}
    >
    {story()}
    </div>
  )
  .add('a - 1', () => (
    <CoordinatesDisplay coordinates={[0, 1]} />
  ));



storiesOf('Square Container', module)
.add('square', () => <SquareContainer><span>Hi Hi Hi Hi</span></SquareContainer>);

storiesOf('Label', module)
  .add('basic example', () => <Label>Hello World</Label>);

storiesOf('Control Group Header', module)
  .add('basic example', () => <ControlGroupHeader level={2}>Hello World</ControlGroupHeader>);


storiesOf('Ship Graphic', module)
  .addDecorator(story =>
    <div
      style={{
        width: '120px',
        height: 'auto',
        margin: '4rem auto'
      }}
    >
    {story()}
    </div>
  )
  .add('Carrier', () => <Graphic.Carrier />)
  .add('Battleship', () => <Graphic.Battleship />)
  .add('Cruiser', () => <Graphic.Cruiser />)
  .add('Submarine', () => <Graphic.Submarine />)
  .add('Destroyer', () => <Graphic.Destroyer />)
;

storiesOf('Ship Component', module)
  // .addDecorator(story =>
  //   <div
  //     style={{
  //       width: '500px',
  //       height: '500px',
  //       margin: '4rem auto',
  //       display: 'grid',
  //       gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
  //       gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
  //     }}
  //   >
  //   {story()}
  //   </div>
  // )
  .add('Ships - vertical', () =>
    <div
      style={{
        width: '500px',
        height: '500px',
        margin: '4rem auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
      }}
    >
      <Ship
        name='carrier'
        size={5}
        direction='vertical'
        locations={[[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]}
      />
      <Ship
        name='battleship'
        size={4}
        direction='vertical'
        locations={[[1, 1], [1, 2], [1, 3], [1, 4]]}
      />
      <Ship
        name='cruiser'
        size={3}
        direction='vertical'
        locations={[[3, 1], [3, 2], [3, 3]]}
      />
      <Ship
        name='submarine'
        size={3}
        direction='vertical'
        locations={[[4, 1], [4, 2], [4, 3]]}
      />
      <Ship
        name='destroyer'
        size={2}
        direction='vertical'
        locations={[[5, 1], [5, 2]]}
      />
    </div>
  )
  .add('Ships - horizontal', () =>
    <div
      style={{
        width: '500px',
        height: '500px',
        margin: '4rem auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'
      }}
    >
      <Ship
        name='carrier'
        size={5}
        direction='horizontal'
        locations={[[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]]}
      />
      <Ship
        name='battleship'
        size={4}
        direction='horizontal'
        locations={[[1, 1], [2, 1], [3, 1], [4, 1]]}
      />
      <Ship
        name='cruiser'
        size={3}
        direction='horizontal'
        locations={[[1, 2], [2, 2], [3, 2]]}
      />
      <Ship
        name='submarine'
        size={3}
        direction='horizontal'
        locations={[[1, 3], [2, 3], [3, 3]]}
      />
      <Ship
        name='destroyer'
        size={2}
        direction='horizontal'
        locations={[[1, 4], [2, 4]]}
      />
    </div>
  )

;
