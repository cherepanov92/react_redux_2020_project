import React from 'react';
import { CardGrid } from '@vkontakte/vkui';
import DeskItem from './DeskItem';
import PropTypes from 'prop-types';

const DeskList = ({ desks }) => {
  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name })=> <DeskItem key={id}><h1>{name}</h1></DeskItem>)}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default DeskList;
