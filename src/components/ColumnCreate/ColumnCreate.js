import React, { useContext } from 'react';
import { createColumn } from '../../actions';
import { Div } from '@vkontakte/vkui';

import './ColumnCreate.css';
import CreateForm from '../CreateForm/CreateForm';
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
      <CreateForm 
        onSubmit = {createItem}
        placeholder = {'Введите название колонки'}
        actionTitle  = {'Создать колонку'}
      />
    </Div>
  )
};

export default ColumnCreate;