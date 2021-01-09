import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from '@vkontakte/vkui';

import { deleteDesk } from '../../actions';
import './DeskItem.css';
import Context from '../App/context';

const DeskItem = ({ id, children }) => {
  const { removeDesk, goToColumns } = useContext(Context);

  const deleteItem = () => {
    deleteDesk(id)
    .then(() => removeDesk(id))
    .catch(console.error);
  }

  return (
    <Card 
      size="l"
      onClick={() => goToColumns(id)}
    >
      <Div className='DeskItem__content'>
        {children}
        <Button mode="destructive" onClick={deleteItem}>
          Удалить
        </Button>
      </Div>
    </Card>
  );
};

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node, 
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
};

export default DeskItem;
