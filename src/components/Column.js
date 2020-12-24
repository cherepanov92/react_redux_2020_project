import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, CardGrid} from '@vkontakte/vkui';

import './Column.css';

const Column = () => {
  return (
    <Div className="Column">
      <Card mode="plain" className="Column__wrapper">
        <CardGrid>
          <Card size="l" mode="plain"><Div>Привет, я карточка 1.</Div></Card>

          <Card size="l" mode="plain"><Div>Привет, я карточка 2.</Div></Card>

          <Card size="l" mode="plain"><Div>Привет, я карточка 3.</Div></Card>
        </CardGrid>
      </Card>
    </Div>
  )
}

Column.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Column;