import React, { useState, useEffect } from 'react';
import { CardGrid } from '@vkontakte/vkui';
import firebase from 'firebase';
import DeskItem from './DeskItem';


const DeskList = () => {
  const [desks, setDesks] = useState([]);

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
      
      setDesks(desks_data);
    });
  }, [])

  if (!desks.length) {
    return null;
  }

  return (
    <CardGrid>
      {desks.map(({ name }, i) => <DeskItem key={i}><h1>{name}</h1></DeskItem>)}
    </CardGrid>
  );
};

export default DeskList;
