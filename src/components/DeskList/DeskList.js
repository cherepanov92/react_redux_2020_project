import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardGrid } from '@vkontakte/vkui';

import DeskItem from '../DeskItem/DeskItem';
import { getDesks } from '../../actions';

const DeskList = ({ desks, onDelete, onloadDesks, onDeskClick }) => {
  // Запрос данных о досках
  useEffect(() => {
    getDesks()
    // .then(desks => onloadDesks(desks))
    .then(onloadDesks) // то-же самое что и пример сверху
  }, []);

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name }) => (
        <DeskItem 
          key={id} 
          id={id} 
          onClick={() => onDeskClick(id)} 
          onDelete={onDelete}
        >
          {name}
        </DeskItem>
      ))}
    </CardGrid>
  );
};

DeskList.propTypes = {
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onloadDesks: PropTypes.func.isRequired,
  onDeskClick: PropTypes.func.isRequired,
};

export default DeskList;
