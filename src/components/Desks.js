import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Button, PanelHeaderSimple, CardGrid } from '@vkontakte/vkui';

import DeskList from './DeskList';

const Desks = ({ onChangePanel }) => {
  return (
    <Fragment>
      <PanelHeaderSimple>Мои доски</PanelHeaderSimple>
      <div>Панель досок</div>
      <Button onClick={onChangePanel}>Перейти к колонкам</Button>
      <DeskList />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;