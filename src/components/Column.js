import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, CardGrid } from '@vkontakte/vkui';

import ColumnCard from './ColumnCard';
import './Column.css';

const Column = () => {
  return (
    <Div className="Column">
      <Card mode="plain" className="Column__wrapper">
        <CardGrid>
          <ColumnCard>New card</ColumnCard>
        </CardGrid>
      </Card>
    </Div>
  )
}

Column.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Column;