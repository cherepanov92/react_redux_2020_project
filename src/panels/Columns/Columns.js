import React, { Fragment, useEffect, useContext } from 'react';
import { PanelHeaderSimple, PanelHeaderBack, Gallery } from '@vkontakte/vkui';
import { useRoute } from 'react-router5';

import './Columns.css';
import Column from '../../components/Column/Column';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import { getColumns } from '../../actions';
import Context from '../../components/App/context';

const Columns = () => {
  const { goToDesks, setColumns, columns, desks } = useContext(Context);
  const { route: { params: { deskId }} } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  // Запрос данных о колонках
  useEffect(() => {
    if(desk.id) {
      getColumns(desk.id)
      // .then(columns => setColumns(columns))
      .then(setColumns); // Аналог строчки выше
    }
  }, [desk]);

  return (
    <Fragment>
      <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Доска {desk.name ? `${desk.name}` : ""}</PanelHeaderSimple>
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