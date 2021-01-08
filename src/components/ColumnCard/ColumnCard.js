import React from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from '@vkontakte/vkui';

import './ColumnCard.css';
import { deleteCard } from '../../actions';

const ColumnCard = ({ id, onDelete, children }) => {
  const deleteItem = () => {
    deleteCard(id)
    .then(() => onDelete(id))
    .catch(console.error);
  }

  return (
    <Card size='l'>
      <Div className='ColumnCard__wrapper'>
        {children}

        <Button 
          mode="destructive" 
          onClick={deleteItem}
        >
          Удалить
        </Button>
      </Div>
    </Card>
  )
}

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColumnCard;