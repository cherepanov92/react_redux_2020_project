import React, { useEffect } from 'react';
import { CardGrid } from '@vkontakte/vkui';
import DeskItem from './DeskItem';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const DeskList = ({ desks, onDelete, onloadDesks }) => {
  // Запрос данных о досках
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("desks").get().then((querySnapshot) => {
      const desks_data = [];
      
      querySnapshot.forEach((doc) => {
        desks_data.push({
          id: doc.id, 
          name: doc.data().name
        });
      })
      
      onloadDesks(desks_data);
    });
  }, [])

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ id, name })=> <DeskItem key={id} id={id} onDelete={onDelete}><p>{name}</p></DeskItem>)}
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
};

export default DeskList;
