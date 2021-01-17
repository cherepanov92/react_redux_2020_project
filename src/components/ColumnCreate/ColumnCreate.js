import React, { useContext } from 'react';
import { createColumn } from '../../actions';
import { Div } from '@vkontakte/vkui';

import './ColumnCreate.css';
import ColumnCreateForm from './ColumnCreateForm';
import Context from '../App/context';

const ColumnCreate = () => {
  const {addColumn, activeDesk} = useContext(Context);

  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
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