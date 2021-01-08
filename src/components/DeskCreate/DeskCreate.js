import React from 'react';
import PropTypes from 'prop-types';

import CreateForm from '../CreateForm/CreateForm';
import { createDesk } from '../../actions';

const DeskCreate = ({ onCreate }) => {
  const deskCreate = (name) => (
    createDesk(name)
      .then(doc => onCreate({ id: doc.id, ...doc.data() }))
      .catch(console.error)
  )
  
  return (
    <CreateForm 
      onSubmit = {deskCreate}
      placeholder = {'Введите название доски'}
      actionTitle  = {'Создать доску'}
    />
  )
};

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default DeskCreate;