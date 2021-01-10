import React, {useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { CardGrid } from '@vkontakte/vkui';

import ColumnCard from '../ColumnCard/ColumnCard';
import CardCreate from '../CardCreate/CardCreate';
import { getCards } from '../../actions';
import Context from '../App/context';

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);
  // Запрос данных о карточках
  useEffect(() => {
    getCards(columnId)
    // .then(cards => setCards(cards))
    .then(setCards) // Аналог строки выше
  }, []);

  return (
    <CardGrid>
      <CardCreate columnId={columnId} />
      {cards.map(({ id, name }) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
    </CardGrid>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards;