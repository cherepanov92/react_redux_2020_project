import React, { Fragment, useEffect, useContext } from 'react';
import { PanelHeaderSimple, PanelHeaderBack, Gallery } from '@vkontakte/vkui';
import { getColumns } from '../../actions';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import Context from '../../components/App/context';

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);
  // Запрос данных о колонках
  useEffect(() => {
    getColumns(activeDesk.id)
    // .then(columns => setColumns(columns))
    .then(setColumns); // Аналог строчки выше
  }, []);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Доска {activeDesk.name}</PanelHeaderSimple>
      <Gallery
        className="Columns__list"
        slideWidth="95%"
        align="left"
      >
        {columns.map(({id, name}) => <Column key={id} id={id} name={name} />)}
        
        <ColumnCreate />
      </Gallery>
    </Fragment>
  )
}

export default Columns;