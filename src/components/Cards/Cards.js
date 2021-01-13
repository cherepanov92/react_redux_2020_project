import React, { Fragment, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { CardGrid, Div } from '@vkontakte/vkui';

import ColumnCard from '../ColumnCard/ColumnCard';
import CardCreate from '../CardCreate/CardCreate';
import { getCards } from '../../actions';
import Context from '../App/context';
import './Cards.css';

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);
  // Запрос данных о карточках
  useEffect(() => {
    getCards(columnId)
    // .then(cards => setCards(cards))
    .then(setCards) // Аналог строки выше
  }, []);

  return (
    <Fragment>
      <CardGrid>
        {cards.map(({ id, name }) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
      </CardGrid>
      <Div className="Card_createButton">
        <CardCreate columnId={columnId} />
      </Div>
    </Fragment>
  );
};

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards;