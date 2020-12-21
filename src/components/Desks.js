import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from '@vkontakte/vkui';

import DeskList from './DeskList';
import DeskCreate from './DeskCreate';

const Desks = ({ onChangePanel }) => {
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>

      <Div>
        <DeskCreate />
      </Div>

      <DeskList />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;