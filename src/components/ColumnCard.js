import React from 'react';
import PropTypes from 'prop-types';
import { Card, Div } from '@vkontakte/vkui';

const ColumnCard = ({ children }) => {
  return (
    <Card size='l'><Div>{children}</Div></Card>
  )
}

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColumnCard;