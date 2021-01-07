import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Header, Button } from '@vkontakte/vkui';
import firebase from 'firebase';

import './Column.css';
import Cards from '../Cards/Cards';

const Column = ({ id, name, onDelete }) => {
  const deleteItem = () => {
    const db = firebase.firestore();

    db.collection("columns")
    .doc(id)
    .delete()
    .then(() => onDelete(id))
    .catch(console.error)
  }

  return (
    <Div className="Column">
      <div className={'Column__header'}>
        <Header>{name}</Header>
        <Button 
          mode="destructive" 
          onClick={deleteItem}
        >
          Удалить
        </Button>
      </div>
      <Card className="Column__wrapper">
        <Cards columnId={id} />
      </Card>
    </Div>
  )
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default Column;