import React from 'react';
import PropTypes from 'prop-types';
import { createColumn } from '../../actions';
import { Div } from '@vkontakte/vkui';

import CreateForm from '../CreateForm/CreateForm';
import './ColumnCreate.css';

const ColumnCreate = ({ onCreate, deskId }) => {
  const createItem = (name) => {
    createColumn(name, deskId)
    .then(doc => onCreate({ id: doc.id, ...doc.data() }))
    .catch(console.error);
  }
  
  return (
    <Div className="ColumnCreate">
      <CreateForm 
        onSubmit = {createItem}
        placeholder = {'Введите название колонки'}
        actionTitle  = {'Создать колонку'}
      />
    </Div>
  )
};

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
}

export default ColumnCreate;