import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import { Button, PanelHeaderSimple } from '@vkontakte/vkui';



const Desks = ({ onChangePanel }) => {
  return (
    <Fragment>
      <PanelHeaderSimple>
        Мои доски
      </PanelHeaderSimple>
      <div>Панель досок</div>
      <Button onClick={onChangePanel}>Перейти к колонкам</Button>
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Desks;