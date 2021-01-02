import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';

import DeskList from '../../components/DeskList/DeskList';
import DeskCreate from '../../components/DeskCreate/DeskCreate';

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = useState([]);
  const newDesk = (desk) => setDesks([...desks, desk]);
  const removeDesk = (removeId) => setDesks(desks.filter(({id}) => {return id !== removeId}));

  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate onCreate={newDesk} />
      </Div>

      <DeskList desks={desks} onDelete={removeDesk} onloadDesks={setDesks} />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;