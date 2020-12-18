import React from 'react';
import { CardGrid } from '@vkontakte/vkui';

import DeskItem from './DeskItem';

const desks_data = [
  { name:'Доска 1' },
  { name:'Доска 2' }
];

const DeskList = () => {
  if (desks_data.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks_data.map(({ name }) => <DeskItem><h1>{name}</h1></DeskItem>)}
    </CardGrid>
  );
};

export default DeskList;
