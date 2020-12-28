import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, CardGrid, Header } from '@vkontakte/vkui';

import ColumnCard from './ColumnCard';
import './Column.css';

const Column = ({ name }) => {
  return (
    <Div className="Column">
      <Header>{name}</Header>
      <Card className="Column__wrapper">
        <CardGrid>
          <ColumnCard>New card</ColumnCard>
        </CardGrid>
      </Card>
    </Div>
  )
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Column;