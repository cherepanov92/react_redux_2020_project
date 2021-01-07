import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';

import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = ({ onChangePanel, desks, setDesks, addDesk, removeDesk }) => { 
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate onCreate={addDesk} />
      </Div>

      <DeskList desks={desks} onDelete={removeDesk} onloadDesks={setDesks} onDeskClick={onChangePanel} />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
  desks: PropTypes.array.isRequired, 
  setDesks: PropTypes.func.isRequired, 
  addDesk: PropTypes.func.isRequired, 
  removeDesk: PropTypes.func.isRequired,
}

export default Desks;