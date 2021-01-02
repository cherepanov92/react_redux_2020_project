import React from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from '@vkontakte/vkui';
import firebase from 'firebase';

import './ColumnCard.css';

const ColumnCard = ({ id, onDelete, children }) => {
  const deleteCard = () => {
    const db = firebase.firestore();

    db.collection("cards")
    .doc(id)
    .delete()
    .then(() => onDelete(id))
    .catch(console.error)
  }

  return (
    <Card size='l'>
      <Div className='ColumnCard__wrapper'>
        {children}

        <Button 
          mode="destructive" 
          onClick={deleteCard}
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