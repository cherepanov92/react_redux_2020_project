import React, {useEffect, useState} from 'react';
import ColumnCard from '../ColumnCard/ColumnCard';
import { CardGrid } from '@vkontakte/vkui';
import firebase from 'firebase';

import CardCreate from '../CardCreate/CardCreate';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) => setCards(cards.filter(({id}) => {return id !== removeId}));

  // Запрос данных о карточках
  useEffect(() => {
    const db = firebase.firestore();
    
    db.collection("cards").get().then((querySnapshot) => {
      const cards = [];
      
      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();

        cards.push({
          id: doc.id, 
          columnId,
          name,
        });
      });

      setCards(cards);
    });
  }, []);

  return (
    <CardGrid>
      <CardCreate onCreate={addCard} />
      {cards.map(({ id, name }) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}
    </CardGrid>
  );
};

export default Cards;