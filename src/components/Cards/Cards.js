import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { CardGrid } from '@vkontakte/vkui';

import ColumnCard from '../ColumnCard/ColumnCard';
import CardCreate from '../CardCreate/CardCreate';
import { getCards } from '../../actions';

const Cards = ({ columnId }) => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) => setCards(cards.filter(({id}) => {return id !== removeId}));

  // Запрос данных о карточках
  useEffect(() => {
    getCards(columnId)
    // .then(cards => setCards(cards))
    .then(setCards) // Аналог строки выше
  }, []);

  return (
    <CardGrid>
      <CardCreate onCreate={addCard} columnId={columnId} />
      {cards.map(({ id, name }) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards;