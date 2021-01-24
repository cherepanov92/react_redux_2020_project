import React, { useContext } from 'react';
import { Div } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';

import './ColumnCreate.css';
import ColumnCreateForm from './ColumnCreateForm';
import { createColumn } from '../../actions';
import Context from '../App/context';

const ColumnCreate = () => {
  const { addColumn, desks } = useContext(Context);
  const { route: { params: { deskId }} } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  const createItem = (name) => {
    return createColumn(name, desk.id)
    .then(doc => addColumn({ id: doc.id, ...doc.data() }))
    .catch(console.error)
  }
  
  return (
    <Div className="ColumnCreate">
      <ColumnCreateForm 
        onSubmit = {createItem}
      />
    </Div>
  )
};

export default ColumnCreate;