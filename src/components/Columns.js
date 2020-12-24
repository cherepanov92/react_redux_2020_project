import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Gallery} from '@vkontakte/vkui';

import './Columns.css';
import Column from "./Column";

const Columns = () => {
  return (
    <Fragment>
      <PanelHeaderSimple>Доска</PanelHeaderSimple>

      <Gallery
        className="Columns__list"
        slideWidth="90%"
        align="center"
      >
        <Column />
        <Column />
        <Column />
      </Gallery>
    </Fragment>
  )
}

Columns.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
}

export default Columns;